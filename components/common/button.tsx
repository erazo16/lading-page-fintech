/**
 * Button - Componente de botón reutilizable
 * 
 * Proporciona un botón estilizado consistente con la identidad visual
 * de la aplicación. Puede renderizar tanto un botón estándar como un enlace,
 * manteniendo la misma apariencia visual.
 * 
 *
 * 
 * @props
 * - variant: "primary" | "secondary" | "outline" | "text" (default: "primary")
 * - size: "small" | "medium" | "large" (default: "medium")
 * - fullWidth: boolean - Ocupa el 100% del ancho disponible (default: false)
 * - href: string - Si se proporciona, renderiza un enlace en lugar de un botón
 * - onClick: función - Manejador para el evento click
 */

import { ButtonProps } from "@/types";
import React from "react";
import { ButtonStyled, LinkStyle } from "../styled";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  href,
  onClick,
  ...rest
}) => {
  if (href) {
    return (
      <LinkStyle
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        onClick={onClick}
      >
        {children}
      </LinkStyle>
    );
  }

  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...rest}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
