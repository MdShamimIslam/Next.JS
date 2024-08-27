
import { bitter } from "./fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Home",
  description: "This is Home page with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${bitter.archivo}`}>
        {children}
      </body>
    </html>
  );
}
