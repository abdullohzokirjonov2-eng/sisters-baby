const categories = ["Hammasi", "O'yinlar", "Darslar", "Bayramlar", "Ovqat", "Sport"];

const photos = [
  { emoji: "🎨", label: "Rasm darsi", cat: "Darslar", bg: "from-pink-400 to-rose-400" },
  { emoji: "🏃", label: "Ochiq havo o'yinlari", cat: "Sport", bg: "from-teal-400 to-green-400" },
  { emoji: "🎂", label: "Tug'ilgan kun", cat: "Bayramlar", bg: "from-purple-400 to-pink-400" },
  { emoji: "🍲", label: "Tushlik vaqti", cat: "Ovqat", bg: "from-orange-400 to-yellow-400" },
  { emoji: "📚", label: "Kitob o'qish", cat: "Darslar", bg: "from-blue-400 to-indigo-400" },
  { emoji: "🧩", label: "Puzzle o'yini", cat: "O'yinlar", bg: "from-green-400 to-teal-400" },
  { emoji: "🎵", label: "Musiqa darsi", cat: "Darslar", bg: "from-pink-500 to-purple-500" },
  { emoji: "🌸", label: "Bahor bayrami", cat: "Bayramlar", bg: "from-rose-400 to-pink-400" },
  { emoji: "⚽", label: "Futbol o'yini", cat: "Sport", bg: "from-amber-400 to-orange-400" },
  { emoji: "🧸", label: "Erkin o'yin", cat: "O'yinlar", bg: "from-violet-400 to-purple-400" },
  { emoji: "🍎", label: "Meyvalar darsi", cat: "Darslar", bg: "from-red-400 to-rose-400" },
  { emoji: "🎭", label: "Teatr o'yini", cat: "Bayramlar", bg: "from-indigo-400 to-blue-400" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10">📸</div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Galereya</span>
          <h1 className="font-display text-6xl font-bold text-gray-800 mt-2">Bizning kunlar 📸</h1>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">Har kuni bolalarimiz bilan o'tkaziladigan qiziqarli daqiqalar.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          {categories.map((c, i) => (
            <button key={c} className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${i === 0 ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <div key={i} className={`bg-gradient-to-br ${p.bg} rounded-3xl aspect-square flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl`}>
                <span className="text-5xl">{p.emoji}</span>
                <span className="text-white text-sm font-semibold text-center px-4">{p.label}</span>
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{p.cat}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 rounded-3xl p-10 text-center">
            <div className="text-5xl mb-4">📷</div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">Haqiqiy rasmlar tez orada!</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Bu yerga bog'cha rasmlarini joylashtirish uchun rasmlarni yuklang yoki bizga yuboring.</p>
          </div>
        </div>
      </section>
    </>
  );
}
