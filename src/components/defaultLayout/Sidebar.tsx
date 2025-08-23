"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./GoogleTranslateProvider";

export function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMounted(true);
    // Safely get language from localStorage
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

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
      <div className="p-6 flex flex-col justify-center items-center border-b border-gray-200">
        <Link href="/">
          <Image
            src={logo}
            alt="Nabil Ben-Naoum"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-12">
          {navItems.map((item) => (
            <li key={item.name} className="flex">
              <div className="relative inline-block group">
                <Link
                  href={item.href}
                  className={`block text-base uppercase font-semibold transition-all duration-300 hover:text-red-600 ${
                    pathname === item.href ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.name}
                  {mounted && pathname === item.href && (
                    <span
                      className={`absolute left-0 bottom-0 w-full 
                        transition-all duration-500 ease-out origin-left scale-x-100 ${
                          language === "fr" &&
                          item.href === "/book-consultation"
                            ? "top-11  h-[5px] rounded-2xl bg-[#990012]  "
                            : "top-7  h-[5px] rounded-2xl bg-[#990012]"
                        }`}
                    ></span>
                  )}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="p-6 border-t border-gray-200">
        <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          <LanguageSwitcher />
        </button>
      </div>
    </div>
  );
}
