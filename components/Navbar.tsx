"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "🏠 Bosh sahifa" },
  { href: "/services", label: "🎓 Xizmatlar" },
  { href: "/gallery", label: "📸 Galereya" },
  { href: "/team", label: "👩‍🏫 Jamoamiz" },
  { href: "/prices", label: "💰 Narxlar" },
  { href: "/contact", label: "📞 Bog'lanish" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-3xl animate-wiggle inline-block">🌸</span>
          <div>
            <p className="font-display font-extrabold text-lg leading-tight text-purple-600">
              Sister's Baby
            </p>
            <p className="text-[10px] text-gray-400 leading-none">Xususiy Bog'cha</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === l.href
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shrink-0"
        >
          ✨ Ro'yxatdan o'tish
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-purple-500 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-pink-500 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-orange-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-pink-100 px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname === l.href
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                  : "text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-gradient-to-r from-orange-400 to-pink-500 text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            ✨ Ro'yxatdan o'tish
          </Link>
        </div>
      )}
    </nav>
  );
}
