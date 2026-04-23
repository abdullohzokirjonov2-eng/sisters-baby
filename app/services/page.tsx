import Link from "next/link";

const groups = [
  { icon: "🍼", age: "1–2 yosh", title: "Chaqaloqlar", desc: "Individual parvarish, uyqu, ovqat va rivojlantiruvchi o'yinlar.", features: ["Individual parvarish", "Uyqu xizmati", "Sog'lom ovqat"], color: "from-pink-400 to-rose-400", bg: "bg-pink-50", border: "border-pink-200" },
  { icon: "🧸", age: "2–3 yosh", title: "Kichkintoylar", desc: "Nutq, harakat va ijodiy o'yinlar orqali asosiy ko'nikmalar.", features: ["Nutq rivojlantirish", "Harakatli o'yinlar", "Musiqa darslari"], color: "from-purple-400 to-indigo-400", bg: "bg-purple-50", border: "border-purple-200" },
  { icon: "🎨", age: "3–4 yosh", title: "O'rta guruh", desc: "Ijodkorlik, mantiq va jamoa ishlash ko'nikmalari.", features: ["Rasm & qo'l ishlari", "Mantiq o'yinlari", "Guruhli faoliyat"], color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", border: "border-teal-200" },
  { icon: "📚", age: "4–6 yosh", title: "Tayyorlov", desc: "Maktabga tayyorlov: alifbo, raqamlar, ingliz tili asoslari.", features: ["Alifbo & raqamlar", "Ingliz tili", "Maktabga tayyorlov"], color: "from-orange-400 to-yellow-400", bg: "bg-orange-50", border: "border-orange-200" },
];

const schedule = [
  { time: "7:30–8:30", activity: "Qabul va ertalabki o'yinlar", icon: "🌅" },
  { time: "8:30–9:00", activity: "Nonushta", icon: "🍳" },
  { time: "9:00–10:30", activity: "Rivojlantiruvchi mashg'ulotlar", icon: "📚" },
  { time: "10:30–12:00", activity: "Ochiq havoda o'yinlar", icon: "🏃" },
  { time: "12:00–12:30", activity: "Tushlik", icon: "🍲" },
  { time: "12:30–14:30", activity: "Kunduzgi uyqu", icon: "😴" },
  { time: "14:30–15:00", activity: "Peshin choy", icon: "🥛" },
  { time: "15:00–17:00", activity: "Ijodiy mashg'ulotlar", icon: "🎨" },
  { time: "17:00–18:30", activity: "Ota-onalarni kutish", icon: "👨‍👩‍👧" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10 animate-spin-slow">🎓</div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">Xizmatlar</span>
          <h1 className="font-display text-6xl font-bold text-gray-800 mt-2">Guruhlar & Dasturlar 📚</h1>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">Har bir yosh uchun maxsus ishlab chiqilgan ta'lim dasturlari.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((g) => (
              <div key={g.title} className={`${g.bg} border-2 ${g.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl">{g.icon}</span>
                  <span className={`bg-gradient-to-r ${g.color} text-white text-sm font-semibold px-4 py-1.5 rounded-full`}>{g.age}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{g.desc}</p>
                <ul className="flex flex-col gap-2">
                  {g.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <span className={`w-5 h-5 bg-gradient-to-r ${g.color} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">Kun tartibi</span>
              <h2 className="font-display text-5xl font-bold text-gray-800 mt-2">Har kun qiziqarli! ⏰</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">Bolangiz bog'chada vaqtini foydali o'tkazadi. Har bir soat reja asosida.</p>
              <Link href="/contact" className="mt-8 inline-flex bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1">
                ✨ Ro'yxatdan o'tish
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {schedule.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 hover:shadow-md transition-all">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm font-bold text-purple-500 min-w-[100px]">{s.time}</span>
                  <span className="text-sm text-gray-700">{s.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
