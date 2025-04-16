"use client";

/**
 * Header - Componente de navegación principal
 *
 * Proporciona la navegación principal de la aplicación con soporte para:
 * - Navegación entre páginas
 * - Desplazamiento suave a secciones con enlaces de hash (#)
 * - Resaltado visual de la sección activa
 * - Menú responsivo para dispositivos móviles
 *
 * @features
 * - Detección automática de la sección activa basada en la URL y hash
 * - Navegación suave entre secciones de la misma página
 * - Menú desplegable en dispositivos móviles
 * - Sincronización de la interfaz con cambios en la URL
 *
 * @implementation
 * - Usa event listeners de 'hashchange' para detectar cambios en la URL
 * - Maneja estado separado para la ruta activa y la apertura del menú móvil
 * - Se integra con los componentes estilizados definidos en '../styled'
 *
 * @usage
 * Las secciones a las que navega este componente deben tener IDs que coincidan
 * con los hash definidos en el array navItems (ej. id="whyChooseUs" para "#whyChooseUs")
 */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeaderContainer,
  Logo,
  MobileMenuButton,
  NavContainer,
  NavLink,
  NavLinks,
} from "../styled";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname + window.location.hash);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "#whyChooseUs", label: "¿Por qué elegirnos?" },
    { href: "#products", label: "Productos" },
    { href: "#faq", label: "FAQ" },
  ];

  /**
   * Determina si un enlace está activo basado en la ruta actual
   * Maneja casos especiales para la página de inicio y enlaces con hash
   */
  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "";
    }

    if (href.includes("#")) {
      return currentPath === href;
    }

    return pathname === href;
  };

  /**
   * Maneja los clics en enlaces, implementando scroll suave para
   * enlaces con hash y cerrando el menú móvil después de la navegación
   */
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setCurrentPath(href);
      }
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer className="w-full">
      <NavContainer>
        <Link href="/" passHref>
          <Logo className="flex items-center">
            <span className="text-primary">Fintech</span>
            <span className="text-accent-main ml-1">Bank</span>
          </Logo>
        </Link>

        <NavLinks className={isMenuOpen ? "mobile-menu-open" : ""}>
          {navItems.map((item) => (
            <NavLink key={item.href} isActive={isActive(item.href)}>
              <Link href={item.href} onClick={(e) => handleClick(e, item.href)}>
                {item.label}
              </Link>
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton aria-label="Menu" onClick={toggleMenu}>
          <span>{isMenuOpen ? "✕" : "☰"}</span>
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
