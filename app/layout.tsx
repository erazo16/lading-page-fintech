import { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./client-layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FintechBank - Soluciones Financieras Digitales",
  description:
    "Descubre nuestras cuentas y tarjetas diseñadas para adaptarse a tu estilo de vida. Simples, transparentes y sin complicaciones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
