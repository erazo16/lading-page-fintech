/**
 * Hook personalizado para gestionar la lógica de productos y categorías.
 *
 * Este hook:
 * - Carga las categorías disponibles.
 * - Filtra productos según la categoría seleccionada.
 * - Expone funciones y estados útiles para interactuar con los productos y categorías.
*/

import { Product, ProductCategory } from "@/types";
import { getCategories, getProductsByCategory } from "@/utils/utils";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const allCategories = getCategories();
      const filteredProducts = getProductsByCategory(selectedCategory);

      setCategories(allCategories);
      setProducts(filteredProducts);
      setLoading(false);
    };

    loadData();
  }, [selectedCategory]);

  const handleCategoryChange = (category: ProductCategory | null) => {
    setSelectedCategory(category);
  };

  return {
    products,
    categories,
    selectedCategory,
    loading,
    handleCategoryChange,
  };
};
