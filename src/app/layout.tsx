import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thaynná Oliveira",
  description: "Bem-vindo ao portfólio de design gráfico de Thaynná de Oliveira Gomes. Explore uma variedade de trabalhos criativos. Thaynná é uma designer gráfica talentosa com uma paixão por criar designs visuais inovadores e atraentes.",
  keywords: [
    "Thay O Gomes",
    "thay.ai",
    "Thaynná",
    "Peças Gráficas",
    "portfólio",
    "Thaynná de Oliveira Gomes",
    "designer",
    "Design Gráfico",
    "Cidade/Região",
    "design web",
    "desenvolvimento de aplicativos",
    "branding",
    "UX/UI",
    "projetos criativos",
    "freelancer",
    "colaboração"
  ],
  authors:[{name:"Thaynná de Oliveira Gomes", url: "https://thaynnaog.vercel.app"}, {name:"Rafael Miotte", url:""}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
