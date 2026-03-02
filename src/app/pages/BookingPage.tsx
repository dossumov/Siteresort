import { useState } from "react";
import { motion } from "motion/react";
import { Check, Phone, Mail, MapPin, Calendar, Users, MessageSquare } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1764507476588-59704e707e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBsYWtlJTIwcmVzb3J0JTIwbmF0dXJlfGVufDF8fHx8MTc3MjQ1Mjk3MHww&ixlib=rb-4.1.0&q=80&w=1080";

const rooms = [
  { id: "standard", name: "Стандартный домик", price: "3 500 ₽/ночь" },
  { id: "family", name: "Семейный домик", price: "7 000 ₽/ночь" },
  { id: "lux", name: "Люкс у воды", price: "9 500 ₽/ночь" },
  { id: "eco", name: "Эко-домик", price: "2 800 ₽/ночь" },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  room: string;
  checkin: string;
  checkout: string;
  guests: string;
  comment: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export function BookingPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    room: "",
    checkin: "",
    checkout: "",
    guests: "2",
    comment: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Введите имя";
    if (!form.phone.trim()) newErrors.phone = "Введите номер телефона";
    if (!form.room) newErrors.room = "Выберите домик";
    if (!form.checkin) newErrors.checkin = "Укажите дату заезда";
    if (!form.checkout) newErrors.checkout = "Укажите дату выезда";
    if (form.checkin && form.checkout && form.checkin >= form.checkout)
      newErrors.checkout = "Дата выезда должна быть позже заезда";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const nights =
    form.checkin && form.checkout
      ? Math.max(
          0,
          Math.round(
            (new Date(form.checkout).getTime() - new Date(form.checkin).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const selectedRoom = rooms.find((r) => r.id === form.room);
  const pricePerNight = selectedRoom
    ? parseInt(selectedRoom.price.replace(/\D/g, ""), 10)
    : 0;
  const total = nights * pricePerNight;

  const inputStyle = (field: keyof FormState) => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: `1.5px solid ${errors[field] ? "#D4183D" : "#D8E8CC"}`,
    outline: "none",
    fontSize: "0.95rem",
    color: "#222",
    backgroundColor: "white",
    fontFamily: "'Inter', sans-serif",
  });

  const labelStyle = {
    display: "block" as const,
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1A3A1F",
    marginBottom: "6px",
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto p-10 rounded-3xl shadow-xl"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#EAF4DC" }}
          >
            <Check size={40} color="#6B9E3B" />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1A3A1F",
            }}
          >
            Заявка принята!
          </h2>
          <p className="mt-4" style={{ color: "#555", lineHeight: 1.7 }}>
            Спасибо, <strong>{form.name}</strong>! Мы свяжемся с вами в течение 30 минут для
            подтверждения бронирования.
          </p>
          {selectedRoom && nights > 0 && (
            <div
              className="mt-6 p-4 rounded-2xl text-left"
              style={{ backgroundColor: "#F0F4EC" }}
            >
              <div style={{ fontSize: "0.875rem", color: "#444" }}>
                <div className="flex justify-between py-1">
                  <span>Домик:</span>
                  <strong style={{ color: "#1A3A1F" }}>{selectedRoom.name}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>Заезд:</span>
                  <strong style={{ color: "#1A3A1F" }}>{new Date(form.checkin).toLocaleDateString("ru")}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>Выезд:</span>
                  <strong style={{ color: "#1A3A1F" }}>{new Date(form.checkout).toLocaleDateString("ru")}</strong>
                </div>
                <div
                  className="flex justify-between py-1 mt-1 pt-2"
                  style={{ borderTop: "1px solid #D8E8CC" }}
                >
                  <span>Итого:</span>
                  <strong style={{ color: "#6B9E3B", fontSize: "1.1rem" }}>
                    {total.toLocaleString("ru")} ₽
                  </strong>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", phone: "", email: "", room: "", checkin: "", checkout: "", guests: "2", comment: "" });
            }}
            className="mt-6 px-6 py-3 rounded-full w-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600 }}
          >
            Оформить новую заявку
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FAFAF5" }}>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,40,20,0.75)" }} />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                color: "#A8D06A",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Онлайн-заявка
            </span>
            <h1
              className="mt-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "white",
              }}
            >
              Забронировать домик
            </h1>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              Заполните форму, и наш менеджер свяжется с вами в течение 30 минут
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 rounded-3xl shadow-xl p-8 md:p-10"
              style={{ backgroundColor: "white" }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#1A3A1F",
                }}
              >
                Ваши данные
              </h2>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>
                      <span className="flex items-center gap-1">
                        Ваше имя <span style={{ color: "#D4183D" }}>*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      style={inputStyle("name")}
                    />
                    {errors.name && (
                      <p style={{ color: "#D4183D", fontSize: "0.78rem", marginTop: "4px" }}>{errors.name}</p>
                    )}
                  </div>
                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>
                      Телефон <span style={{ color: "#D4183D" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (900) 000-00-00"
                      style={inputStyle("phone")}
                    />
                    {errors.phone && (
                      <p style={{ color: "#D4183D", fontSize: "0.78rem", marginTop: "4px" }}>{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ivan@example.ru"
                    style={inputStyle("email")}
                  />
                </div>

                {/* Room */}
                <div>
                  <label style={labelStyle}>
                    Тип домика <span style={{ color: "#D4183D" }}>*</span>
                  </label>
                  <select
                    name="room"
                    value={form.room}
                    onChange={handleChange}
                    style={{ ...inputStyle("room"), cursor: "pointer" }}
                  >
                    <option value="">Выберите домик</option>
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {r.price}
                      </option>
                    ))}
                  </select>
                  {errors.room && (
                    <p style={{ color: "#D4183D", fontSize: "0.78rem", marginTop: "4px" }}>{errors.room}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  {/* Checkin */}
                  <div>
                    <label style={labelStyle}>
                      Дата заезда <span style={{ color: "#D4183D" }}>*</span>
                    </label>
                    <input
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      style={inputStyle("checkin")}
                    />
                    {errors.checkin && (
                      <p style={{ color: "#D4183D", fontSize: "0.78rem", marginTop: "4px" }}>{errors.checkin}</p>
                    )}
                  </div>
                  {/* Checkout */}
                  <div>
                    <label style={labelStyle}>
                      Дата выезда <span style={{ color: "#D4183D" }}>*</span>
                    </label>
                    <input
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={handleChange}
                      min={form.checkin || new Date().toISOString().split("T")[0]}
                      style={inputStyle("checkout")}
                    />
                    {errors.checkout && (
                      <p style={{ color: "#D4183D", fontSize: "0.78rem", marginTop: "4px" }}>{errors.checkout}</p>
                    )}
                  </div>
                  {/* Guests */}
                  <div>
                    <label style={labelStyle}>Гостей</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      style={{ ...inputStyle("guests"), cursor: "pointer" }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label style={labelStyle}>Пожелания</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Ранний заезд, детская кроватка, аллергия на животных..."
                    rows={3}
                    style={{ ...inputStyle("comment"), resize: "vertical" } as React.CSSProperties}
                  />
                </div>

                {/* Price preview */}
                {nights > 0 && selectedRoom && (
                  <div
                    className="rounded-2xl p-5"
                    style={{ backgroundColor: "#F0F4EC", border: "1px solid #D8E8CC" }}
                  >
                    <div style={{ fontSize: "0.875rem", color: "#444" }}>
                      <div className="flex justify-between py-1">
                        <span>Домик:</span>
                        <span style={{ fontWeight: 600 }}>{selectedRoom.name}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Ночей:</span>
                        <span style={{ fontWeight: 600 }}>{nights}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Стоимость за ночь:</span>
                        <span style={{ fontWeight: 600 }}>{pricePerNight.toLocaleString("ru")} ₽</span>
                      </div>
                      {nights >= 3 && (
                        <div className="flex justify-between py-1" style={{ color: "#6B9E3B" }}>
                          <span>Скидка 10% (от 3 ночей):</span>
                          <span style={{ fontWeight: 600 }}>-{(total * 0.1).toLocaleString("ru")} ₽</span>
                        </div>
                      )}
                      <div
                        className="flex justify-between py-2 mt-1 pt-2"
                        style={{ borderTop: "1px solid #D8E8CC" }}
                      >
                        <span style={{ fontWeight: 700 }}>Итого:</span>
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#1A3A1F",
                          }}
                        >
                          {nights >= 3
                            ? (total * 0.9).toLocaleString("ru")
                            : total.toLocaleString("ru")}{" "}
                          ₽
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg mt-2"
                  style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 700, fontSize: "1rem" }}
                >
                  Отправить заявку на бронирование
                </button>
                <p
                  className="text-center"
                  style={{ fontSize: "0.78rem", color: "#999" }}
                >
                  Отправляя форму, вы соглашаетесь с условиями бронирования
                </p>
              </form>
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Contact */}
              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#1A3A1F", color: "white" }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Связаться с нами
                </h3>
                <p className="mt-2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem" }}>
                  Мы работаем круглосуточно и всегда готовы ответить на вопросы
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  <li className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <Phone size={16} color="#A8D06A" />
                    </div>
                    <a
                      href="tel:+79001234567"
                      className="hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}
                    >
                      +7 (900) 123-45-67
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <MessageSquare size={16} color="#A8D06A" />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>
                      WhatsApp / Telegram
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <Mail size={16} color="#A8D06A" />
                    </div>
                    <a
                      href="mailto:info@lesnaya-zavod.ru"
                      className="hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}
                    >
                      info@lesnaya-zavod.ru
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <MapPin size={16} color="#A8D06A" />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>
                      Московская обл., д. Берёзово, 80 км по Ярославскому шоссе
                    </span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#F0F4EC", border: "1px solid #D8E8CC" }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1A3A1F",
                  }}
                >
                  Почему бронировать у нас
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    { icon: Calendar, text: "Бесплатная отмена за 3 дня" },
                    { icon: Users, text: "Трансфер из Сергиева Посада" },
                    { icon: Check, text: "Скидка 10% от 3 ночей" },
                    { icon: Check, text: "Бесплатный мангал в будни" },
                    { icon: Check, text: "Детские кроватки бесплатно" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2">
                      <Icon size={15} color="#6B9E3B" />
                      <span style={{ fontSize: "0.875rem", color: "#444" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prices */}
              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "white", border: "1px solid #E8EDDF" }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1A3A1F",
                    marginBottom: "12px",
                  }}
                >
                  Цены от
                </h3>
                {rooms.map((r) => (
                  <div
                    key={r.id}
                    className="flex justify-between py-2"
                    style={{ borderBottom: "1px solid #F0F4EC", fontSize: "0.875rem" }}
                  >
                    <span style={{ color: "#555" }}>{r.name}</span>
                    <span style={{ color: "#1A3A1F", fontWeight: 700 }}>{r.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
