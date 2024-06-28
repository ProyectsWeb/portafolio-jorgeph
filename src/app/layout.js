
import { Inter } from "next/font/google";
import "./../scss/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio de Jorge Peraza Hdez - Desarrollador Web",
  description: "Descubre el portafolio de Jorge Peraza Hernandez, un desarrollador web especializado en la creación de sitios y aplicaciones modernas, funcionales y atractivas. Explora mis proyectos, habilidades y experiencia en el desarrollo web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
