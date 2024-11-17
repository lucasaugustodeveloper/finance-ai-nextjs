import "@/app/globals.css";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NavBar from "../_components/navbar";

const mullish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "CashFlow - Domine Suas Finanças, Conquiste Seus Objetivos",
  description: `
    O CashFlow é o aplicativo definitivo para quem quer ter mais controle sobre o próprio dinheiro. Organize sua vida 
    financeira com ferramentas que facilitam o gerenciamento de contas, despesas e investimentos. 
    Crie orçamentos, analise seus fluxos de caixa e visualize seu progresso através de gráficos e relatórios dinâmicos
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mullish.className} dark antialiased`}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <NavBar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
