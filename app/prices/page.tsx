import Link from "next/link";

const plans = [
  {
    children: 1, label: "1 ta bola", price: "2 000 000", icon: "👶",
    color: "from-pink-400 to-rose-500",
    features: ["Barcha guruhlar", "Kunlik 3 mahal ovqat", "Mashg'ulotlar", "Ota-ona hisoboti", "Tibbiy yordam"],
    highlight: false,
  },
  {
    children: 2, label: "2 ta bola", price: "3 500 000", icon: "👶👶",
    color: "from-purple-500 to-indigo-600",
    features: ["Barcha guruhlar", "Kunlik 3 mahal ovqat", "Mashg'ulotlar", "Ota-ona hisoboti", "Tibbiy yordam", "Aka-uka chegirmasi"],
    highlight: true, badge: "🔥 Eng mashhur",
  },
  {
    children: 3, label: "3 ta bola", price: "4 500 000", icon: "👶👶👶",
    color: "from-teal-400 to-cyan-600",
    features: ["Barcha guruhlar", "Kunlik 3 mahal ovqat", "Mashg'ulotlar", "Ota-ona hisoboti", "Tibbiy yordam", "Aka-uka chegirmasi", "Katta oila bonus"],
    highlight: false,
  },
];

const included = [
  { icon: "🍳", label: "Nonushta" },
  { icon: "🍲", label: "Tushlik" },
  { icon: "🥛", label: "Peshin choy" },
  { icon: "📚", label: "O'quv materiali" },
  { icon: "🎨", label: "Ijodiy faoliyat" },
  { icon: "🏃", label: "Sport darslari" },
  { icon: "💊", label: "Birinchi yordam" },
  { icon: "📱", label: "Ota-ona hisoboti" },
];

const faqs = [
  { q: "To'lov qanday amalga oshiriladi?", a: "Har oyning 1–5 kunlari naqd yoki bank o'tkazma orqali." },
  { q: "Qo'shimcha xizmatlar bormi?", a: "Ha, ingliz tili va sport bo'yicha qo'shimcha mashg'ulotlar mavjud." },
  { q: "Bola kasal bo'lsa to'lov qaytariladi?", a: "5 kundan ortiq tibbiy hujjat bilan to'liq hisoblash amalga oshiriladi." },
  { q: "Sinov davri bormi?", a: "Ha, bolangiz 3 kunlik bepul sinov davrida tanishishi mumkin." },
];

export default function PricesPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10">💰</div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Narxlar</span>
          <h1 className="font-display text-6xl font-bold text-gray-800 mt-2">Qulay narxlar 💰</h1>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">Bir nechta farzandingiz bo'lsa maxsus chegirmadan foydalaning!</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((p) => (
              <div key={p.children} className={`relative rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 ${p.highlight ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-2xl scale-105" : "bg-white border-2 border-gray-100 hover:shadow-xl"}`}>
                {p.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                    {p.badge}
                  </div>
                )}
                <div className="text-4xl mt-2">{p.icon}</div>
                <h3 className={`font-display text-2xl font-bold ${p.highlight ? "text-white" : "text-gray-800"}`}>{p.label}</h3>
                <div>
                  <span className={`font-display text-4xl font-bold ${p.highlight ? "text-white" : "text-purple-600"}`}>{p.price}</span>
                  <span className={`text-sm ml-2 ${p.highlight ? "text-white/70" : "text-gray-400"}`}>so'm / oy</span>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-white/90" : "text-gray-600"}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${p.highlight ? "bg-white/20 text-white" : "bg-purple-100 text-purple-600"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-4 rounded-2xl font-bold text-sm transition-all ${p.highlight ? "bg-white text-purple-600 hover:bg-purple-50" : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"}`}
                >
                  Ro'yxatdan o'tish →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* To'lov har oyning 1–5 kunlari amalga oshiriladi.</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">Narxga nima kiradi? 🎁</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item.label} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-gray-800 text-center mb-12">Savol-Javob ❓</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-2">❓ {f.q}</h4>
                <p className="text-gray-500 text-sm">💬 {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
