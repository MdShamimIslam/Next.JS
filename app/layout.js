import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from './components/CustomLink';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} w-[1600px] mx-auto mt-8`}>
      <nav className='flex justify-center'>
        <ul className='flex gap-5'>
          <li>
            <CustomLink path='/'>Home</CustomLink>
          </li>
          <li>
          <CustomLink path='/products'>Products</CustomLink>
          </li>
        </ul>
      </nav>
        {children}
        </body>
    </html>
  );
}
