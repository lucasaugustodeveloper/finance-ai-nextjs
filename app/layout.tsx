import type { Metadata } from "next";
import { Mulish } from "next/font/google"
import "./globals.css";

const mullish = Mulish({
  subsets: ['latin-ext']
});

export const metadata: Metadata = {
  title: "CashFlow - Domine Suas Finanças, Conquiste Seus Objetivos",
  description: `
    O CashFlow é o aplicativo definitivo para quem quer ter mais controle sobre o próprio dinheiro. Organize sua vida 
    financeira com ferramentas que facilitam o gerenciamento de contas, despesas e investimentos. 
    Crie orçamentos, analise seus fluxos de caixa e visualize seu progresso através de gráficos e relatórios dinâmicos
  `
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mullish.className} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
