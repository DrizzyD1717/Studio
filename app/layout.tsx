import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Name | Creative Services",
  description: "Web Development, Brand Design, and Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-brand-white antialiased">
        {/* We will insert <Navbar /> here in the next step */}
        <Navbar></Navbar>
        <main className="min-h-screen">{children}</main>
        <Footer></Footer>
        {/* We will insert <Footer /> here later */}
      </body>
    </html>
  );
}
