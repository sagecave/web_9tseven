import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "../../components/Hamburger/HamburgerMenu";
import Footer from "../../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "9TSEVEN find freedom and happiness",
  description: "A clothing brand that helps you find freedom and happiness through a community of like-minded people — and by encouraging personal growth through running.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white grid grid-cols-[10%_1fr_10%] `}>
        <header className="col-start-1 col-end-4">
          <HamburgerMenu />
        </header>
        <main className="col-start-2 col-end-3">{children}</main>
        <footer className="col-start-1 col-end-4">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
