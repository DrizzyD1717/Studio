import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aureoo.vercel.app/"), // Replace with your actual domain
  title: {
    default: "STUDIO | Web, Design & Photography Collective",
    template: "%s | STUDIO", // This automatically adds "| STUDIO" to every sub-page title
  },
  description:
    "A multi-disciplinary creative studio specializing in high-performance Web Development, Brand Design, and Professional Photography.",
  icons: { icon: "/overall.png" },
  openGraph: {
    title: "STUDIO Collective",
    description: "Expert digital experiences and visual storytelling.",
    url: "https://aureoo.vercel.app/",
    siteName: "STUDIO",
    // locale: "en_US",
    type: "website",
    images: [
      {
        url: "/overall.png", // Create a 1200x630px image in your /public folder
        width: 1200,
        height: 630,
        alt: "STUDIO Creative Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIO Collective",
    description: "Web Development, Brand Design, and Photography.",
    images: ["/overall.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
