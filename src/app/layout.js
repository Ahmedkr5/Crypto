import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto News",
  description: "Discover latest crypto news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
