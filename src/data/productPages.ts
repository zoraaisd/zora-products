export const PRODUCT_PAGE_LOADERS = {
  "zora-hrms": () => import("../pages/products/zora-hrms"),
  "zora-crm": () => import("../pages/products/zora-crm"),
  careloop: () => import("../pages/products/careloop"),
  groomvy: () => import("../pages/products/groomvy"),
  erp: () => import("../pages/products/erp"),
} as const;

export type ProductPageKey = keyof typeof PRODUCT_PAGE_LOADERS;
export type ProductPageLoader = (typeof PRODUCT_PAGE_LOADERS)[ProductPageKey];
