import type { Metadata } from "next";
import { Inter, Markazi_Text, Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { directories } from "./constants";

const inter = Inter({ subsets: ["latin"] });
export const markazi = Markazi_Text({ subsets: ["latin"]});
export const karla = Karla({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <Navbar directories={directories}/>
        </Header>
        {children}
      </body>
    </html>
  );
}
