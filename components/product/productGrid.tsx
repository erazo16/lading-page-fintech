/**
 * Componente de presentación que renderiza una grilla de productos.
 */

import { ProductGridProps } from "@/types";
import React from "react";
import { Grid } from "../styled";
import ProductCard from "./productCard";

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
