import React from "react";
import DocumentHead from "./DocumentHead";

const BASE_URL = "https://www.zoraglobalai.com";

interface Crumb {
  name: string;
  path: string; // e.g. "/" or "/services/it"
}

interface BreadcrumbSchemaProps {
  crumbs: Crumb[];
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ crumbs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };

  return (
    <DocumentHead
      scripts={[{ type: "application/ld+json", content: JSON.stringify(schema) }]}
    />
  );
};

export default BreadcrumbSchema;
