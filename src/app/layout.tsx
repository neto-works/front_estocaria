import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { cn } from "@/lib/utils"
import Renderizador from "./renderizador";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = { title: "Estocaria | Net", description: "Uma app" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="pt-Br">
      <body className={cn(`w-full h-full font-sans antialiased text-white`, fontSans.variable)}>
        <ToastContainer />
        <Renderizador>{children}</Renderizador>
      </body>
    </html>
  );
}
