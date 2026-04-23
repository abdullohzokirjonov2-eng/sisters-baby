import Link from "next/link";

const stats = [
  { value: "150+", label: "Xursand oila", icon: "👨‍👩‍👧", color: "bg-pink-100 text-pink-600" },
  { value: "8", label: "Pedagog", icon: "👩‍🏫", color: "bg-purple-100 text-purple-600" },
  { value: "5+", label: "Yil tajriba", icon: "⭐", color: "bg-yellow-100 text-yellow-600" },
  { value: "4", label: "Yosh guruhi", icon: "🧸", color: "bg-teal-100 text-teal-600" },
];

const features = [
  { icon: "🎨", title: "Ijodiy faoliyat", desc: "Rasm, loy, origami va boshqa ijodiy mashg'ulotlar", color: "from-pink-400 to-rose-400" },
  { icon: "🎵", title: "Musiqa & Raqs", desc: "Bolalarga mos qo'shiq va raqslar orqali rivojlanish", color: "from-purple-400 to-indigo-400" },
  { icon: "📚", title: "Ta'lim dasturi", desc: "Alifbo, raqamlar, ingliz tili — zamonaviy metod", color: "from-blue-400 to-cyan-400" },
  { icon: "🏃", title: "Sport & Harakat", desc: "Har kuni ochiq havoda o'yinlar va jismoniy tarbiya", color: "from-teal-400 to-green-400" },
  { icon: "🍎", title: "Sog'lom ovqat", desc: "Kuniga 3 mahal bolalar uchun maxsus taom", color: "from-orange-400 to-yellow-400" },
  { icon: "🛡️", title: "Xavfsizlik", desc: "Kamera, himoyalangan hovli, tibbiy yordam", color: "from-red-400 to-pink-400" },
];

const testimonials = [
  {
    name: "Malika Yusupova",
    child: "Aziz, 3 yosh",
    text: "Farzandim Sister's Baby ga borishni juda yaxshi ko'radi! Har kuni yangi narsa o'rganib keladi. Pedagoglar juda mehribon va professional.",
    avatar: "M",
    color: "bg-pink-500",
  },
  {
    name: "Jasur Toshmatov",
    child: "Zulfiya, 4 yosh",
    text: "Qizim 6 oy davomida bu bog'chada. Nutqi rivojlandi, ingliz tilida so'zlar aytadi. Narxi ham oqilona. Tavsiya qilaman!",
    avatar: "J",
    color: "bg-purple-500",
  },
  {
    name: "Nilufar Rahimova",
    child: "Sardor, 2 yosh",
    text: "Kichkintoyimni birinchi marta bog'chaga qo'yayotganda qo'rquvdim. Lekin tarbiyachilar juda e'tiborli. Endi Sardor o'zi borishni talab qiladi!",
    avatar: "N",
    color: "bg-teal-500",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-teal-300 rounded-full opacity-20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 animate-fadeUp">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 px-4 py-2 rounded-full text-sm font-medium text-purple-700 w-fit">
              🌸 Toshkentning #1 xususiy bog'chasi
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Farzandingiz
              </span>
              <br />
              <span className="text-gray-800">kelajagi —</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                bizning
              </span>
              <br />
              <span className="text-gray-800">g'ururimiz!</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Sister's Baby bog'chasida bolangiz sevgi, e'tibor va sifatli ta'lim oladi.
              Har bir kun — yangi kashfiyot! 🎉
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
              >
                ✨ Ro'yxatdan o'tish
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-full font-semibold text-base hover:border-pink-400 hover:bg-pink-50 transition-all duration-200"
              >
                📋 Xizmatlar
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
              <span>📞 +998 95 018 58 51</span>
              <span>·</span>
              <span>⏰ 7:30 – 18:30</span>
            </div>
          </div>

          <div className="relative flex justify-center animate-fadeUp delay-200">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] animate-float shadow-2xl flex items-center justify-center">
                <span className="text-8xl">🌸</span>
              </div>
              <div className="absolute -top-6 -right-4 bg-yellow-300 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl shadow-lg animate-float delay-300">🎨</div>
              <div className="absolute -bottom-4 -left-6 bg-teal-300 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl shadow-lg animate-float delay-100">🎵</div>
              <div className="absolute top-1/2 -right-10 bg-orange-300 rounded-2xl w-14 h-14 flex items-center justify-center text-2xl shadow-lg animate-float delay-500">📚</div>
              <div className="absolute -top-2 -left-8 bg-pink-300 rounded-2xl w-14 h-14 flex items-center justify-center text-2xl shadow-lg animate-float delay-200">🧸</div>
              <div className="absolute -bottom-8 right-0 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <div>
                  <p className="text-xs font-bold text-gray-800">4.9 Reyting</p>
                  <p className="text-[10px] text-gray-400">150+ oila</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className={`${s.color} rounded-3xl p-6 text-center`}>
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="font-display text-4xl font-bold">{s.value}</div>
                <div className="text-sm font-medium mt-1 opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">
              Nima uchun biz?
            </span>
            <h2 className="font-display text-5xl font-bold text-gray-800 mt-2">
              Bolangizga eng yaxshisini! 🌈
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
              Har bir bola noyob. Shu sababli biz individual yondoshamiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-pink-500 uppercase tracking-widest">
              Ota-onalar fikri
            </span>
            <h2 className="font-display text-5xl font-bold text-gray-800 mt-2">
              Ular nima deydi? 💬
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`${t.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="font-display text-5xl font-bold text-white mb-4">
            Bugun ro'yxatdan o'ting!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Bo'sh o'rinlar cheklangan. Farzandingizning o'rni saqlab qoling.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              ✨ Ariza qoldiring
            </Link>
            <a
              href="tel:+998950185851"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200"
            >
              📞 Qo'ng'iroq
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
