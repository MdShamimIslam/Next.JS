import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          className="max-w-[100px] md:max-w-[165px]"
          src="/logo.png"
          alt="Lws"
          height={100}
          width={165}
        />
      </Link>
    </div>
  );
};

export default Logo;
