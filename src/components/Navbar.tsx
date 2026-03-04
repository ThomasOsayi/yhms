"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-xl border-b border-brand-border/60 transition-all">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-[42px] h-[42px] bg-brand-teal-deep rounded-xl flex items-center justify-center text-brand-teal-light font-serif font-extrabold text-[17px]">
            Y
          </div>
          <span className="font-serif font-bold text-xl text-brand-dark tracking-tight">
            YHMS
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all ${
                  pathname === link.href
                    ? "bg-brand-teal-deep text-white"
                    : "text-brand-text hover:bg-brand-teal/[0.08] hover:text-brand-teal-dark"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/get-involved"
              className="ml-1 px-6 py-2.5 rounded-full bg-brand-orange text-white font-semibold text-[15px] shadow-[0_2px_12px_rgba(249,115,22,0.25)] hover:bg-[#EA6A10] hover:-translate-y-0.5 transition-all"
            >
              Join YHMS →
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-[2.5px] bg-brand-dark rounded" />
          <span className="w-6 h-[2.5px] bg-brand-dark rounded" />
          <span className="w-6 h-[2.5px] bg-brand-dark rounded" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-border p-5 shadow-lg">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                    pathname === link.href
                      ? "bg-brand-teal-deep text-white"
                      : "text-brand-text hover:bg-brand-teal/[0.08]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/get-involved"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-2 px-6 py-2.5 rounded-full bg-brand-orange text-white font-semibold"
              >
                Join YHMS →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}