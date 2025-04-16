"use client";

/**
 * ClientLayout - Layout base para componentes del lado del cliente
 * 
 * Este componente proporciona la configuración necesaria para styled-components
 * en el contexto de Next.js App Router. Envuelve todos los componentes de la aplicación
 * con los providers necesarios y estructura básica (header, main, footer).
 * 
 * Se separa del layout principal para permitir que la metadata se defina en componentes
 * de servidor mientras que los providers de estilo se ejecutan en el cliente.
 */

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
