import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "../../components/Hamburger/HamburgerMenu";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <header>
          <HamburgerMenu />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
