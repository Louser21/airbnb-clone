import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar"
import Modal from "./_components/Modals/Modal";
import RegisterModal from "./_components/Modals/RegisterModal";
import ToasterProvider from "./_provider/ToasterProvider";
import LoginModal from "./_components/Modals/LoginModal";
import getCurrentUser from "./_actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb-Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser = {currentUser}/>
        {children}
      </body>
    </html>
  );
}
