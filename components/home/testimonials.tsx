/**
 * Componente Testimonials
 * Seccion que simula los comentarios de los clientes mostrados en tarjetas
 */

import React from "react";
import {
  AvatarContainer,
  CustomerInfo,
  CustomerName,
  CustomerRole,
  SectionDescriptionTestimonials,
  SectionTitleTestimonials,
  TestimonialCard,
  TestimonialsGrid,
  TestimonialsSection,
  TestimonialText,
} from "../styled";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection>
      <div className="container mx-auto">
        <SectionTitleTestimonials>
          Lo que dicen nuestros clientes
        </SectionTitleTestimonials>

        <SectionDescriptionTestimonials>
          Miles de personas confían en nosotros para sus necesidades financieras
          diarias
        </SectionDescriptionTestimonials>

        <TestimonialsGrid>
          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              La tarjeta de crédito premium transformó mi experiencia de viaje
              con acceso a salas VIP y un seguro de viaje completo. Recomiendo
              totalmente los servicios.
            </TestimonialText>
            <CustomerInfo>
              <AvatarContainer>
                <Image
                  src="/images/testimonials/avatar-1.jpg"
                  alt="Cliente"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </AvatarContainer>
              <div>
                <CustomerName>María Rodríguez</CustomerName>
                <CustomerRole>Ejecutiva de Ventas</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>

          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              La cuenta remunerada me ha permitido mantener mi dinero trabajando
              mientras lo tengo disponible. Las tasas son competitivas y la app
              es muy intuitiva.
            </TestimonialText>
            <CustomerInfo>
              <AvatarContainer>
                <Image
                  src="/images/testimonials/avatar-2.jpg"
                  alt="Cliente"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </AvatarContainer>
              <div>
                <CustomerName>Carlos Méndez</CustomerName>
                <CustomerRole>Ingeniero de Software</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>

          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              Como emprendedor, necesitaba una cuenta sin comisiones y con
              transferencias rápidas. La Cuenta Digital superó mis expectativas
              con su app y soporte 24/7.
            </TestimonialText>
            <CustomerInfo>
              <AvatarContainer>
                <Image
                  src="/images/testimonials/avatar-3.jpg"
                  alt="Cliente"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </AvatarContainer>
              <div>
                <CustomerName>Laura Sánchez</CustomerName>
                <CustomerRole>Dueña de Negocio</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>
        </TestimonialsGrid>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
