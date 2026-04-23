const team = [
  { name: "Mohira Karimova", role: "Bosh direktor & Tarbiyachi", exp: "12 yil tajriba", icon: "👩‍💼", color: "from-pink-400 to-rose-500", badge: "Asoschimiz", emoji: "🌸" },
  { name: "Dilnoza Yusupova", role: "Katta tarbiyachi", exp: "8 yil tajriba", icon: "👩‍🏫", color: "from-purple-400 to-indigo-500", badge: "Mutaxassis", emoji: "⭐" },
  { name: "Feruza Tosheva", role: "Ingliz tili o'qituvchisi", exp: "6 yil tajriba", icon: "👩‍🎓", color: "from-teal-400 to-cyan-500", badge: "Ingliz tili", emoji: "🎓" },
  { name: "Gulnora Rahimova", role: "Musiqa o'qituvchisi", exp: "10 yil tajriba", icon: "👩‍🎤", color: "from-orange-400 to-yellow-500", badge: "Musiqa", emoji: "🎵" },
  { name: "Sarvinoz Mirzayeva", role: "Sport tarbiyachi", exp: "5 yil tajriba", icon: "👩‍⚕️", color: "from-green-400 to-teal-500", badge: "Sport", emoji: "🏃" },
  { name: "Nargiza Xoliqova", role: "Logoped (nutq mutaxassisi)", exp: "9 yil tajriba", icon: "👩‍🔬", color: "from-blue-400 to-indigo-500", badge: "Logoped", emoji: "💬" },
];

const values = [
  { icon: "❤️", title: "Mehr-muhabbat", desc: "Har bir bolaga o'z farzandimiz kabi yondoshamiz" },
  { icon: "📖", title: "Bilim", desc: "Yangi pedagogik metodlar bilan doim rivojlanamiz" },
  { icon: "🤝", title: "Hamkorlik", desc: "Ota-onalar bilan ochiq va doimiy muloqotda bo'lamiz" },
  { icon: "🌱", title: "Rivojlanish", desc: "Har bir bolaning o'z sur'atida o'sishiga yordam beramiz" },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10">👩‍🏫</div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">Jamoamiz</span>
          <h1 className="font-display text-6xl font-bold text-gray-800 mt-2">Bizning pedagoglar 👩‍🏫</h1>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            Har bir pedagog — o'z sohasining mutaxassisi. Bolalarimiz eng yaxshi qo'llarda!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-5xl mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {t.icon}
                </div>
                <div className={`inline-block bg-gradient-to-r ${t.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {t.emoji} {t.badge}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800">{t.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                <p className="text-purple-500 text-sm font-semibold mt-2">📅 {t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl font-bold text-gray-800">Bizning qadriyatlarimiz 💎</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
