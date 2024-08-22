"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const CategoryList = ({ path, children }) => {
  
    const pathname = usePathname();

    const active = path === pathname;

    return (
        <Link className={active ? 'text-blue-600' : ''} href={path}>
            {children}
        </Link>
    )
}

export default CategoryList