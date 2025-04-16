/**
 * Componente que muestra los detalles completos del producto.
 *
 * Presenta información clave como nombre, categoría, descripción, etiquetas, imagen (o emoji),
 * tasa de interés, comisión anual, depósito mínimo, beneficios y requisitos.
 * También incluye un gráfico de comportamiento del producto y botón para volver al catálogo.
 */

import { ProductDetailProps } from "@/types";
import React from "react";
import {
  BadgeContainerDetail,
  BadgeDetail,
  ButtonsContainer,
  DetailContainer,
  InfoCard,
  InfoGrid,
  InfoLabel,
  InfoValue,
  List,
  ListContainer,
  ListItem,
  ProductBody,
  ProductCategory,
  ProductDescription,
  ProductHeader,
  ProductImage,
  ProductTitle,
  SectionTitle,
  Tag,
  TagsContainer,
} from "../styled";
import Button from "../common/button";
import Link from "next/link";
import Image from "next/image";
import Chart from "../product/chart";

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <DetailContainer>
      <ProductHeader>
        <ProductCategory>{product.category}</ProductCategory>

        <BadgeContainerDetail>
          {product.isNew && <BadgeDetail variant="new">Nuevo</BadgeDetail>}
          {product.isPopular && (
            <BadgeDetail variant="popular">Popular</BadgeDetail>
          )}
        </BadgeContainerDetail>

        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>

        <TagsContainer>
          {product.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ProductHeader>

      <ProductImage className="relative">
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
      </ProductImage>

      <ProductBody>
        <SectionTitle>Características principales</SectionTitle>

        <InfoGrid>
          {product.interestRate !== undefined && (
            <InfoCard>
              <InfoLabel>Tasa de interés</InfoLabel>
              <InfoValue>{product.interestRate}% anual</InfoValue>
            </InfoCard>
          )}

          {product.annualFee !== undefined && (
            <InfoCard>
              <InfoLabel>Comisión anual</InfoLabel>
              <InfoValue>
                {product.annualFee === 0
                  ? "Sin comisión"
                  : `$${product.annualFee}`}
              </InfoValue>
            </InfoCard>
          )}

          {product.minimunDeposit !== undefined && (
            <InfoCard>
              <InfoLabel>Depósito mínimo</InfoLabel>
              <InfoValue>
                {product.minimunDeposit === 0
                  ? "Sin mínimo"
                  : `$${product.minimunDeposit}`}
              </InfoValue>
            </InfoCard>
          )}
        </InfoGrid>

        <Chart product={product} />

        <ListContainer>
          <div>
            <SectionTitle>Beneficios</SectionTitle>
            <List>
              {product.benefits.map((benefit, index) => (
                <ListItem key={index}>{benefit}</ListItem>
              ))}
            </List>
          </div>

          <div>
            <SectionTitle>Requisitos</SectionTitle>
            <List>
              {product.requirements.map((requirement, index) => (
                <ListItem key={index}>{requirement}</ListItem>
              ))}
            </List>
          </div>
        </ListContainer>

        <ButtonsContainer>
          <Button variant="text" size="large" href="/">
            Volver al catálogo
          </Button>
        </ButtonsContainer>
      </ProductBody>
    </DetailContainer>
  );
};

export default ProductDetails;
