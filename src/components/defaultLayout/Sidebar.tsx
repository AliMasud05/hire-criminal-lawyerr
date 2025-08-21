"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT ME", href: "/about" },
    { name: "Book a consultation", href: "/book-consultation" },
    { name: "Testimonies", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-1/5 xl:w-1/5 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 
      flex flex-col justify-center items-center
      border-b border-gray-200">
        <Link href="/">
              <Image src={logo}
               alt="Nabil Ben-Naoum" 
               width={1000} height={1000}
               className="w-full h-full object-cover"
                />
          
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block text-base uppercase font-semibold  transition-colors hover:text-red-600 ${
                  pathname === item.href ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="p-6 border-t border-gray-200">
        <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          English
        </button>
      </div>
    </div>
  );
}
