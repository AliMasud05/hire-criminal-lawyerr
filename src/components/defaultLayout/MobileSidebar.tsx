"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT ME", href: "/about" },
    { name: "Book a consultation", href: "/book-consultation" },
    { name: "Testimonies", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white border border-gray-200 rounded-md shadow-sm"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative w-80 bg-white h-full shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="p-6 border-b border-gray-200 mt-8">
              <div className="border border-red-600 p-3 text-center">
                <div className="font-bold text-sm tracking-wide">
                  NABIL BEN-NAOUM
                </div>
                <div className="text-xs text-red-600 font-medium mt-1">
                  LAWYER
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm font-medium transition-colors hover:text-red-600 ${
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
        </div>
      )}
    </>
  );
}
