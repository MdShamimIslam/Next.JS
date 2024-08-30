
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Eventry logo"
              width={100}
              height={100} />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li><Link href='/login'>Login</Link></li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
