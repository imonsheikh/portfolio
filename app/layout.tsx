import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: "Imon | Developer",
  description: "A portfolio website for MD Imon Mia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <Header/> 
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition> 
        <Toaster position="bottom-right" toastOptions={{
          style: {background: "#000", color: "#fff"}
        }}/>
      </body>
    </html>
  );
}


