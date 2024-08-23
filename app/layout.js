import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "This is home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[1600px] mx-auto mt-8`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
