"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    childCount: "1",
    startDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.parentName.trim()) e.parentName = "Ism-sharif kiritilishi shart";
    if (!form.phone.trim()) e.phone = "Telefon raqam kiritilishi shart";
    if (!form.childName.trim()) e.childName = "Bolaning ismi kiritilishi shart";
    if (!form.childAge) e.childAge = "Yoshni tanlang";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }

    setLoading(true);

    const TOKEN = "8709059894:AAF0WBt7tRmRx5-CMqyUSMEXRwZhL7trLq0";
    const CHAT_ID = "7219909178";

    const text = `
🌸 *Yangi ariza — Sister's Baby*

👤 *Ota-ona:* ${form.parentName}
📞 *Telefon:* ${form.phone}
👶 *Bola ismi:* ${form.childName}
🎂 *Yoshi:* ${form.childAge}
👨‍👩‍👧 *Bolalar soni:* ${form.childCount} ta
📅 *Boshlanish:* ${form.startDate || "Ko'rsatilmagan"}
💬 *Xabar:* ${form.message || "Yo'q"}
    `.trim();

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.error("Telegram xato:", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10">📞</div>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            Bog'lanish
          </span>
          <h1 className="font-display text-6xl font-bold text-gray-800 mt-2">
            Biz bilan bog'laning 📞
          </h1>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            Savollaringiz bormi? Ariza qoldiring yoki qo'ng'iroq qiling!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <a
                href="tel:+998950185851"
                className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-6 flex items-center gap-5 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">📞</div>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Asosiy raqam</p>
                  <p className="text-white font-bold text-lg">+998 95 018 58 51</p>
                </div>
              </a>

              <a
                href="tel:+998977085851"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-6 flex items-center gap-5 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">📱</div>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Qo'shimcha raqam</p>
                  <p className="text-white font-bold text-lg">+998 97 708 58 51</p>
                </div>
              </a>

              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">⏰</div>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Ish vaqti</p>
                  <p className="text-white font-bold text-lg">7:30 – 18:30</p>
                  <p className="text-white/70 text-sm">Dushanba – Shanba</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">📍</div>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Manzil</p>
                  <p className="text-white font-bold text-lg">Toshkent</p>
                  <p className="text-white/70 text-sm">O'zbekiston</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-3xl p-12 text-center flex flex-col items-center gap-5">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-5xl">
                    🎉
                  </div>
                  <h3 className="font-display text-3xl font-bold text-gray-800">
                    Arizangiz qabul qilindi!
                  </h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed">
                    Tez orada siz bilan bog'lanamiz. Ish vaqtida qo'ng'iroq
                    kutib qoling:{" "}
                    <strong className="text-teal-600">7:30 – 18:30</strong>
                  </p>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          parentName: "",
                          phone: "",
                          childName: "",
                          childAge: "",
                          childCount: "1",
                          startDate: "",
                          message: "",
                        });
                      }}
                      className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Yangi ariza
                    </button>
                    <a
                      href="tel:+998950185851"
                      className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all"
                    >
                      📞 Qo'ng'iroq
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-sm">
                  <h3 className="font-display text-3xl font-bold text-gray-800 mb-8">
                    ✍️ Ro'yxatdan o'tish arizasi
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Ism-sharifingiz *
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          placeholder="Nilufar Karimova"
                          className={`w-full px-4 py-3 rounded-2xl border-2 text-sm outline-none transition-all ${
                            errors.parentName
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 focus:border-purple-400 focus:bg-purple-50"
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-red-500 text-xs mt-1">⚠️ {errors.parentName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefon raqamingiz *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+998 __ ___ __ __"
                          className={`w-full px-4 py-3 rounded-2xl border-2 text-sm outline-none transition-all ${
                            errors.phone
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 focus:border-purple-400 focus:bg-purple-50"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">⚠️ {errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bolaning ismi *
                        </label>
                        <input
                          type="text"
                          name="childName"
                          value={form.childName}
                          onChange={handleChange}
                          placeholder="Ali"
                          className={`w-full px-4 py-3 rounded-2xl border-2 text-sm outline-none transition-all ${
                            errors.childName
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 focus:border-purple-400 focus:bg-purple-50"
                          }`}
                        />
                        {errors.childName && (
                          <p className="text-red-500 text-xs mt-1">⚠️ {errors.childName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bolaning yoshi *
                        </label>
                        <select
                          name="childAge"
                          value={form.childAge}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-2xl border-2 text-sm outline-none transition-all ${
                            errors.childAge
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 focus:border-purple-400 focus:bg-purple-50"
                          }`}
                        >
                          <option value="">Tanlang</option>
                          <option value="1-2">🍼 1–2 yosh</option>
                          <option value="2-3">🧸 2–3 yosh</option>
                          <option value="3-4">🎨 3–4 yosh</option>
                          <option value="4-6">📚 4–6 yosh</option>
                        </select>
                        {errors.childAge && (
                          <p className="text-red-500 text-xs mt-1">⚠️ {errors.childAge}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bolalar soni
                        </label>
                        <select
                          name="childCount"
                          value={form.childCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 text-sm outline-none focus:border-purple-400 focus:bg-purple-50 transition-all"
                        >
                          <option value="1">👶 1 ta bola — 2 000 000 so'm</option>
                          <option value="2">👶👶 2 ta bola — 3 500 000 so'm</option>
                          <option value="3">👶👶👶 3 ta bola — 4 500 000 so'm</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Boshlanish sanasi
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={form.startDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 text-sm outline-none focus:border-purple-400 focus:bg-purple-50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Qo'shimcha xabar
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Savollaringiz yoki qo'shimcha ma'lumotlar..."
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 text-sm outline-none focus:border-purple-400 focus:bg-purple-50 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "⏳ Yuborilmoqda..." : "✨ Ariza yuborish"}
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      * Majburiy maydonlar. 1–2 ish kuni ichida qo'ng'iroq qilamiz.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
