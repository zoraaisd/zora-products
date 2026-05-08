const API_BASE_URL = (
  import.meta.env.VITE_BLOG_API_URL || "http://localhost:4000/api/v1"
).replace(/\/$/, "");

const WEBSITE_SLUG = import.meta.env.VITE_PUBLIC_WEBSITE_SLUG || "zora-services";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
};

export type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

export type BlogPost = {
  id: string;
  websiteId: string;
  authorId: string;
  author: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featuredImage: string | null;
  bannerImage: string | null;
  introVideo: string | null;
  status: string;
  visibility: string;
  isFeatured: boolean;
  allowComments: boolean;
  publishedAt: string | null;
  scheduledAt: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  website?: {
    id: string;
    name: string;
    slug: string;
    url: string;
  };
  authorUser?: {
    id: string;
    name: string;
    role: string;
  };
  tags?: Array<{
    tag: BlogTag;
  }>;
};

async function fetchApi<T>(path: string) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as ApiResponse<T>;
}

export async function fetchPublicBlogs(page = 1, limit = 50) {
  return fetchApi<BlogPost[]>(
    `/public/websites/${WEBSITE_SLUG}/blogs?page=${page}&limit=${limit}`
  );
}

export async function fetchPublicBlogBySlug(slug: string) {
  return fetchApi<BlogPost>(`/public/websites/${WEBSITE_SLUG}/blogs/${slug}`);
}

export function stripHtml(value?: string | null) {
  if (!value) {
    return "";
  }

  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function estimateReadTime(content?: string | null) {
  const plainText = stripHtml(content);
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function getBlogDescription(post: BlogPost) {
  return (
    post.ogDescription ||
    post.metaDescription ||
    post.excerpt ||
    stripHtml(post.content).slice(0, 180) ||
    "Explore the latest update from our blog."
  );
}

export function getBlogImage(post: BlogPost) {
  return (
    post.featuredImage ||
    post.bannerImage ||
    post.ogImage ||
    "/it-hero/website.webp"
  );
}

export function getBlogCardImage(post: BlogPost) {
  return (
    post.bannerImage ||
    post.featuredImage ||
    post.ogImage ||
    "/it-hero/website.webp"
  );
}
