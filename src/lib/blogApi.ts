import { mockBlogPosts, type MockBlogPost, type MockBlogSection } from "../data/blogdata";

type UnknownRecord = Record<string, unknown>;

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() ?? "";
const DEFAULT_POSTS_ENDPOINT = (import.meta.env.VITE_BLOG_POSTS_ENDPOINT as string | undefined)?.trim() || "/api/blog-posts";
const DEFAULT_POST_ENDPOINT = (import.meta.env.VITE_BLOG_POST_ENDPOINT as string | undefined)?.trim() || "/api/blog-posts";

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

function toStringValue(value: unknown, fallback = ""): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return fallback;
}

function toBooleanValue(value: unknown): boolean {
  return value === true || value === "true" || value === 1 || value === "1";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveUrl(value: unknown): string {
  const rawValue = toStringValue(value).trim();

  if (!rawValue) {
    return "";
  }

  if (/^(https?:)?\/\//i.test(rawValue) || rawValue.startsWith("data:")) {
    return rawValue;
  }

  if (API_BASE_URL) {
    try {
      return new URL(rawValue, API_BASE_URL).toString();
    } catch {
      return rawValue;
    }
  }

  return rawValue;
}

function normalizeSection(section: unknown, fallbackTitle: string): MockBlogSection | null {
  if (!isRecord(section)) {
    return null;
  }

  const subtitle = toStringValue(
    section.subtitle ?? section.heading ?? section.title,
    fallbackTitle
  );
  const paragraph = toStringValue(
    section.paragraph ?? section.content ?? section.description ?? section.body
  );
  const image = resolveUrl(section.image ?? section.imageUrl ?? section.media_url);
  const video = resolveUrl(section.video ?? section.videoUrl ?? section.video_url);
  const imageAlt = toStringValue(section.imageAlt ?? section.image_alt ?? section.alt);
  const mediaCaption = toStringValue(
    section.mediaCaption ?? section.media_caption ?? section.caption
  );

  if (!subtitle && !paragraph && !image && !video) {
    return null;
  }

  return {
    subtitle: subtitle || fallbackTitle,
    paragraph,
    image: image || undefined,
    imageAlt: imageAlt || undefined,
    video: video || undefined,
    mediaCaption: mediaCaption || undefined,
  };
}

function normalizeSections(post: UnknownRecord): MockBlogSection[] {
  const rawSections = post.sections ?? post.content_sections ?? post.blocks;

  if (Array.isArray(rawSections)) {
    const sections = rawSections
      .map((section, index) =>
        normalizeSection(section, `Section ${index + 1}`)
      )
      .filter((section): section is MockBlogSection => section !== null);

    if (sections.length > 0) {
      return sections;
    }
  }

  const body = toStringValue(post.content ?? post.body ?? post.description);

  if (!body) {
    return [];
  }

  return [
    {
      subtitle: "Overview",
      paragraph: body,
    },
  ];
}

function normalizePost(post: unknown, index = 0): MockBlogPost | null {
  if (!isRecord(post)) {
    return null;
  }

  const title = toStringValue(post.title ?? post.name ?? post.heading, `Blog Post ${index + 1}`);
  const slugSource = toStringValue(post.slug ?? post.url_slug ?? post.permalink ?? title);
  const slug = slugify(slugSource) || `blog-post-${index + 1}`;
  const description = toStringValue(
    post.description ?? post.excerpt ?? post.summary ?? post.short_description
  );
  const department = toStringValue(post.department ?? post.category ?? post.topic, "General");
  const image = resolveUrl(
    post.image ?? post.imageUrl ?? post.banner_image ?? post.thumbnail ?? post.cover_image
  );
  const date = toStringValue(
    post.date ?? post.publishDate ?? post.publish_date ?? post.created_at,
    new Date().toISOString()
  );
  const readTime = toStringValue(post.readTime ?? post.read_time, "5 min read");
  const sections = normalizeSections(post);

  return {
    slug,
    title,
    description,
    department,
    image,
    date,
    readTime,
    sections,
    featured: toBooleanValue(post.featured ?? post.is_featured),
  };
}

function extractPosts(payload: unknown): unknown[] {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!isRecord(payload)) {
    return [];
  }

  const candidates = [
    payload.data,
    payload.posts,
    payload.results,
    payload.items,
    payload.blogs,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }

  return [];
}

async function requestJson(path: string, signal?: AbortSignal): Promise<unknown> {
  const response = await fetch(API_BASE_URL ? new URL(path, API_BASE_URL).toString() : path, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Blog API request failed with status ${response.status}`);
  }

  return response.json();
}

export async function fetchBlogPosts(signal?: AbortSignal): Promise<MockBlogPost[]> {
  try {
    const payload = await requestJson(DEFAULT_POSTS_ENDPOINT, signal);
    const posts = extractPosts(payload)
      .map((post, index) => normalizePost(post, index))
      .filter((post): post is MockBlogPost => post !== null);

    return posts.length > 0 ? posts : mockBlogPosts;
  } catch {
    return mockBlogPosts;
  }
}

export async function fetchBlogPostBySlug(
  slug: string,
  signal?: AbortSignal
): Promise<MockBlogPost | null> {
  try {
    const payload = await requestJson(`${DEFAULT_POST_ENDPOINT}/${encodeURIComponent(slug)}`, signal);
    return normalizePost(payload) ?? null;
  } catch {
    const posts = await fetchBlogPosts(signal);
    return posts.find((post) => post.slug === slug) ?? null;
  }
}
