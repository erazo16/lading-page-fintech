/**
 * Componente hero
 * Muestra la información principal de la landing
 */

import React from "react";
import styled from "styled-components";
import Button from "../common/button";
import Image from "next/image";

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #0056b3 0%, #003875 100%);
  color: white;
  padding: 3rem;
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
    max-width: 500px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const HeroImageContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
  height: 250px;

  @media (min-width: 768px) {
    flex: 1;
    margin-top: 0;
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 450px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

const Hero: React.FC = () => {

  // Implementa desplazamiento suave al hacer clic en los botones de navegación
  const handleSmoothScroll = (e: React.MouseEvent<any>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <HeroContainer className="px-4">
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>Soluciones financieras para un mundo digital</HeroTitle>
          <HeroSubtitle>
            Descubre nuestras cuentas y tarjetas diseñadas para adaptarse a tu
            estilo de vida. Simples, transparentes y sin complicaciones.
          </HeroSubtitle>
          <ButtonContainer>
            <Button
              size="large"
              href="#products"
              onClick={(e) => handleSmoothScroll(e, "products")}
            >
              Ver productos
            </Button>
            <Button
              size="large"
              variant="outline"
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contactar
            </Button>
          </ButtonContainer>
        </HeroContent>

        <HeroImageContainer>
          <Image
            src="/images/hero.png"
            alt="Soluciones financieras digitales"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </HeroImageContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
