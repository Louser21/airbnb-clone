import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar"
import Modal from "./_components/Modals/Modal";
import RegisterModal from "./_components/Modals/RegisterModal";
import ToasterProvider from "./_provider/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb-Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ToasterProvider/>
        <RegisterModal/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
