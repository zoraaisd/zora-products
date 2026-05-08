import React from "react";
import DocumentHead from "./DocumentHead";

const BASE_URL = "https://www.zoraglobalai.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.webp`;
const DEFAULT_OG_IMAGE_WIDTH = 1200;
const DEFAULT_OG_IMAGE_HEIGHT = 630;
const SITE_NAME = "Zora Global AI";
const TWITTER_HANDLE = "@ZoraGlobalAI";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: "website" | "article";
  robots?: string;
  serviceSchema?: ServiceSchemaProps;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = DEFAULT_OG_IMAGE_WIDTH,
  ogImageHeight = DEFAULT_OG_IMAGE_HEIGHT,
  ogType = "website",
  robots = "index, follow",
  serviceSchema,
}) => {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `${BASE_URL}${canonical}`;

  return (
    <DocumentHead
      title={fullTitle}
      metas={[
        { name: "description", content: description },
        { name: "robots", content: robots },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: description },
        { property: "og:type", content: ogType },
        { property: "og:url", content: fullCanonical },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: String(ogImageWidth) },
        { property: "og:image:height", content: String(ogImageHeight) },
        { property: "og:image:type", content: "image/webp" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: TWITTER_HANDLE },
        { name: "twitter:creator", content: TWITTER_HANDLE },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage }
      ]}
      links={[{ rel: "canonical", href: fullCanonical }]}
      scripts={
        serviceSchema
          ? [
              {
                type: "application/ld+json",
                content: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: serviceSchema.name,
                  provider: {
                    "@type": "Organization",
                    name: SITE_NAME,
                    url: BASE_URL
                  },
                  description: serviceSchema.description,
                  areaServed: "Worldwide",
                  url: serviceSchema.url
                })
              }
            ]
          : []
      }
    />
  );
};

export default PageSEO;
