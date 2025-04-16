/**
 * Filtro de categorías que permite al usuario filtrar productos por categoría.
 * Muestra un botón para "Todos" y un botón para cada categoría disponible.
 */

import { categoryPropsFilter } from "@/types";
import React from "react";
import { FilterButton, FilterContainer } from "../styled";

const CategoryFilter: React.FC<categoryPropsFilter> = ({
  categories,
  selectCategory,
  onSelectCategory,
}) => {
  return (
    <FilterContainer>
      <FilterButton
        isActive={selectCategory === null}
        onClick={() => onSelectCategory(null)}
        aria-label="Ver todos los productos"
      >
        Todos
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category}
          isActive={selectCategory === category}
          onClick={() => onSelectCategory(category)}
          aria-label={`Ver sólo ${category}`}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;
