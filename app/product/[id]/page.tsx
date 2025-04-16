"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById } from "@/utils/data";
import ProductDetails from "@/components/product/productDetail";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Producto no encontrado
        </h1>
        <p className="mb-8">
          El producto que buscas no existe o ha sido eliminado.
        </p>
        <Link href="/" className="text-primary hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
}
