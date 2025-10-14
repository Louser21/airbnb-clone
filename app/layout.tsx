import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar"
import Modal from "./components/Modals/Modal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./provider/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";

const font = Nunito({
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb-Clone",
};

export default async function RootLayout({
  children,
}: Readonly<LayoutProps<'/'>>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser = {currentUser}/>
        {children}
      </body>
    </html>
  );
}
