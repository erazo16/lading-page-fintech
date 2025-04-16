import { Product, ProductCategory } from "@/types";
import { generateMockProducts } from "./data";

export const mockProducts = generateMockProducts();

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

export const getProductsByCategory = (
  category: ProductCategory | null
): Product[] => {
  if (!category) return mockProducts;
  return mockProducts.filter((product) => product.category === category);
};

export const getCategories = (): ProductCategory[] => {
  return [ProductCategory.ACCOUNT, ProductCategory.CARD];
};