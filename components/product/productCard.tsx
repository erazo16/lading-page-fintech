/**
 * Componente para mostrar la información de un producto.
 *
 * Muestra imagen (o ícono según categoría), categoría, tags, y características clave 
 * como tasa de interés, comisión anual y depósito mínimo. Incluye botón para ver detalles.
 *
 */

import { ProductCardProps } from "@/types";
import React from "react";
import {
  Badge,
  BadgeContainer,
  Card,
  CardContent,
  CardFooter,
  CardImage,
  CardTitle,
  CategoryBadge,
  ProductFeature,
} from "../styled";
import Button from "../common/button";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardImage className="bg-neutral-100 relative">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="objetct-cover"
          />
        ) : (
          <div className="text-4xl text-primary">
            {product.category === "Cuentas" ? "💼" : "💳"}
          </div>
        )}
      </CardImage>

      <CardContent>
        <CategoryBadge>{product.category}</CategoryBadge>
        <BadgeContainer>
          {product.isNew && <Badge variant="new">Nuevo</Badge>}
          {product.isPopular && <Badge variant="popular">Popular</Badge>}
          {product.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </BadgeContainer>

        <CardTitle>{product.name}</CardTitle>

        <p className="text-sm text-neutral-600 mb-4">{product.description}</p>

        <div className="mt-auto space-y-2">
          {product.interestRate !== undefined && (
            <ProductFeature>
              <span className="font-medium mr-2">Tasa de interés:</span>{" "}
              {product.interestRate}%
            </ProductFeature>
          )}
          {product.annualFee !== undefined && (
            <ProductFeature>
              <span className="font-medium mr-2">Comisión anual:</span>
              {product.annualFee === 0
                ? "Sin comisión"
                : `$${product.annualFee}`}
            </ProductFeature>
          )}
          {product.minimunDeposit !== undefined && (
            <ProductFeature>
              <span className="font-medium mr-2">Depósito mínimo:</span>
              {product.minimunDeposit === 0
                ? "Sin mínimo"
                : `$${product.minimunDeposit}`}
            </ProductFeature>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="primary" href={`/product/${product.id}`} fullWidth>
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
