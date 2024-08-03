import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import SocialSide from "@/components/shared/SocialSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Thai Deal",
  description: "Service of Thai",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <SocialSide />
        <Navbar />
        <ErrorBoundary>{children}</ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
