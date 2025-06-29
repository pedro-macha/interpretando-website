import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ReactPlugin } from "@stagewise-plugins/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interpretando - Tradução Juramentada em Inglês e Espanhol",
  description: "Tradução juramentada nos idiomas inglês e espanhol. Oferecemos opção de retirada presencial nos nossos escritórios, ou recebimento pelos correios em todo o Brasil.",
  keywords: "tradução juramentada, inglês, espanhol, apostila de haia, tradutor juramentado",
  authors: [{ name: "Interpretando" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <StagewiseToolbar
          config={{
            plugins: [ReactPlugin],
          }}
        />
      </body>
    </html>
  );
}
