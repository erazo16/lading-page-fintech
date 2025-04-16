"use client";

/**
 * Home - Página principal
 * 
 * Componente principal que estructura la landing page.
 * Organiza todas las secciones principales y maneja el estado del catálogo de productos.
 * 
 * Las secciones están organizadas en el siguiente orden:
 * 1. Hero (banner principal)
 * 2. Por qué elegirnos
 * 3. Catálogo de productos
 * 4. Estadísticas
 * 5. Testimonios
 * 6. FAQ
 * 7. Contacto
 */

import CategoryFilter from "@/components/home/categoryFilter";
import ContactUs from "@/components/home/contactUs";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/whyChooseUs";
import ProductGrid from "@/components/product/productGrid";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const {
    products,
    categories,
    selectedCategory,
    loading,
    handleCategoryChange,
  } = useProducts();

  return (
    <div className="">
      <Hero />
      <div id="whyChooseUs">
        <WhyChooseUs />
      </div>
      <div className="container mx-auto px-4 py-8" id="products">
        <div className="mb-8 px-6">
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Nuestros Productos
          </h2>
          <p className="text-neutral-600">
            Explora nuestra gama de cuentas y tarjetas diseñadas para adaptarse
            a tu estilo de vida.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>

      <Stats />
      <Testimonials />
      <Faq />
      <ContactUs />
    </div>
  );
}
