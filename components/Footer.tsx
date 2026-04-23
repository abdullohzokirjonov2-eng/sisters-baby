import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌸</span>
              <div>
                <p className="font-display text-2xl font-bold">Sister's Baby</p>
                <p className="text-white/70 text-xs">Xususiy Bog'cha</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Har bir bola — noyob. Biz bolangizga sevgi, ta'lim va xavfsiz muhit taqdim etamiz.
            </p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <span className="bg-white/20 rounded-full px-3 py-1 text-xs">🌈 Ko'p rangli ta'lim</span>
              <span className="bg-white/20 rounded-full px-3 py-1 text-xs">❤️ Sevgi bilan</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Sahifalar</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "🏠 Bosh sahifa" },
                { href: "/services", label: "🎓 Xizmatlar" },
                { href: "/gallery", label: "📸 Galereya" },
                { href: "/team", label: "👩‍🏫 Jamoamiz" },
                { href: "/prices", label: "💰 Narxlar" },
                { href: "/contact", label: "📞 Bog'lanish" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Aloqa</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+998950185851" className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors">
                <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-base shrink-0">📞</span>
                +998 95 018 58 51
              </a>
              <a href="tel:+998977085851" className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors">
                <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-base shrink-0">📞</span>
                +998 97 708 58 51
              </a>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-base shrink-0">⏰</span>
                7:30 – 18:30, Dush–Shan
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-base shrink-0">📍</span>
                Toshkent, O'zbekiston
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Sister's Baby. Barcha huquqlar himoyalangan. 🌸
      </div>
    </footer>
  );
}
