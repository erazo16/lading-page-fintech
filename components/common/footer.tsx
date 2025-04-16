import React from "react";
import {
  Container,
  Copyright,
  FooterContent,
  FooterLink,
  FooterSection,
  FooterTitle,
} from "../styled";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container mx-auto px-4">
        <FooterContent>
          <FooterSection>
            <FooterTitle>FintechBank</FooterTitle>
            <p className="text-neutral-500 max-w-xs"></p>
          </FooterSection>

          <FooterSection>
            {" "}
            Soluciones financieras digitales para un mundo en constante
            evolución. Tu banco, tu forma, tu futuro.
            <FooterTitle>Productos</FooterTitle>
            <FooterLink href="/">Cuentas</FooterLink>
            <FooterLink href="/">Tarjetas</FooterLink>
            <FooterLink href="/">Préstamos</FooterLink>
            <FooterLink href="/">Inversiones</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Compañía</FooterTitle>
            <FooterLink href="/">Sobre nosotros</FooterLink>
            <FooterLink href="/">Carreras</FooterLink>
            <FooterLink href="/">Prensa</FooterLink>
            <FooterLink href="/">Blog</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Legal</FooterTitle>
            <FooterLink href="/">Privacidad</FooterLink>
            <FooterLink href="/">Términos</FooterLink>
            <FooterLink href="/">Cookies</FooterLink>
            <FooterLink href="/">Seguridad</FooterLink>
          </FooterSection>
        </FooterContent>

        <Copyright>
          © {new Date().getFullYear()} FintechBank. Todos los derechos
          reservados.
        </Copyright>
      </div>
    </Container>
  );
};

export default Footer;
