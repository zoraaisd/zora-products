import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  PRODUCT_PAGE_LOADERS,
  type ProductPageKey,
} from "../../data/productPages";

function scrollPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const ProductItemPage: React.FC = () => {
  const { productSlug } = useParams();
  const loader = productSlug
    ? PRODUCT_PAGE_LOADERS[productSlug as ProductPageKey]
    : undefined;
  const [Page, setPage] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    scrollPageTop();
  }, [productSlug]);

  useEffect(() => {
    if (!Page) return;

    scrollPageTop();
    requestAnimationFrame(() => {
      scrollPageTop();
    });
  }, [Page]);

  useEffect(() => {
    let cancelled = false;

    if (!loader) {
      setPage(null);
      return;
    }

    setPage(null);
    loader().then((module) => {
      if (!cancelled) {
        setPage(() => module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  if (!loader) {
    return <Navigate to="/products" replace />;
  }

  if (!Page) {
    return <div className="min-h-screen bg-[#fcfbff]" />;
  }

  return <Page />;
};

export default ProductItemPage;
