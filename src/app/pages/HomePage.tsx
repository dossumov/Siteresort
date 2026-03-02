import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ChevronDown,
  Star,
  Users,
  Fish,
  Flame,
  Waves,
  TreePine,
  Leaf,
  ArrowRight,
  Quote,
  MapPin,
  Check,
} from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1764507476588-59704e707e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBsYWtlJTIwcmVzb3J0JTIwbmF0dXJlfGVufDF8fHx8MTc3MjQ1Mjk3MHww&ixlib=rb-4.1.0&q=80&w=1080";
const CABIN_INTERIOR =
  "https://images.unsplash.com/photo-1755200353224-80b7d8e535a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0NTI5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const BARBECUE =
  "https://images.unsplash.com/photo-1729866670865-868fd1ff5527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmFyYmVjdWUlMjBjYW1wZmlyZSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzcyNDUyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const KAYAK =
  "https://images.unsplash.com/photo-1770566258339-feee40377925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlhayUyMGZpc2hpbmclMjBsYWtlJTIwc3VtbWVyfGVufDF8fHx8MTc3MjQ1Mjk3MXww&ixlib=rb-4.1.0&q=80&w=1080";
const CHALET =
  "https://images.unsplash.com/photo-1759281944287-9173dc7018e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBjaGFsZXQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzI0NTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const SAUNA =
  "https://images.unsplash.com/photo-1757940556610-a114be4733bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzcyNDUyOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const HIKING =
  "https://images.unsplash.com/photo-1591442710240-cb2f6338b486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbCUyMHN1bW1lcnxlbnwxfHx8fDE3NzI0NTI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const BEDROOM =
  "https://images.unsplash.com/photo-1759139445627-5ce9d5fac8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHJ1c3RpYyUyMHdvb2R8ZW58MXx8fHwxNzcyNDUyOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const RIVER =
  "https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbGFuZHNjYXBlJTIwc2NlbmljfGVufDF8fHx8MTc3MjQ1Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const rooms = [
  {
    name: "Стандартный домик",
    desc: "Уютный деревянный домик для двоих с видом на лес",
    img: CHALET,
    beds: "1 двуспальная кровать",
    guests: "до 2 гостей",
    price: "3 500",
    tag: "Популярный",
  },
  {
    name: "Семейный домик",
    desc: "Просторный домик с двумя спальнями для семьи или компании",
    img: BEDROOM,
    beds: "2 спальни",
    guests: "до 6 гостей",
    price: "7 000",
    tag: "Лучший выбор",
  },
  {
    name: "Люкс у воды",
    desc: "Эксклюзивный домик с выходом прямо к берегу озера",
    img: CABIN_INTERIOR,
    beds: "1 кинг-сайз кровать",
    guests: "до 4 гостей",
    price: "9 500",
    tag: "Премиум",
  },
];

const activities = [
  { icon: Fish, label: "Рыбалка", desc: "Богатый карась, карп и щука" },
  { icon: Waves, label: "Купание", desc: "Чистое озеро с песчаным пляжем" },
  { icon: Flame, label: "Мангал и баня", desc: "Настоящая русская парилка" },
  { icon: TreePine, label: "Прогулки", desc: "Тропы через вековой лес" },
  { icon: Users, label: "Аренда лодок", desc: "Весельные и моторные лодки" },
  { icon: Leaf, label: "Тихий отдых", desc: "Вдали от городской суеты" },
];

const testimonials = [
  {
    name: "Александр К.",
    date: "Август 2025",
    rating: 5,
    text: "Отличное место для отдыха! Домик очень уютный, природа потрясающая. Рыбалка порадовала — поймал щуку почти на 4 кг. Обязательно вернёмся!",
  },
  {
    name: "Мария Т.",
    date: "Июль 2025",
    rating: 5,
    text: "Провели выходные с семьёй. Дети в восторге от озера и леса. Баня просто супер! Хозяева очень радушные и отзывчивые. Всё на высшем уровне.",
  },
  {
    name: "Дмитрий В.",
    date: "Июнь 2025",
    rating: 4,
    text: "Тихое и красивое место в 80 км от Москвы. Чистейший воздух, пение птиц, никакого городского шума. Отдохнул душой и телом. Рекомендую всем.",
  },
];

export function HomePage() {
  return (
    <div style={{ backgroundColor: "#FAFAF5" }}>
      {/* ──────── HERO ──────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_BG}
          alt="Лесная Заводь"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)" }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(107,158,59,0.85)", color: "white", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            <Leaf size={14} />
            База отдыха в Подмосковье
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
            }}
          >
            Лесная Заводь —<br />
            <span style={{ color: "#A8D06A", fontStyle: "italic" }}>живой отдых</span> на природе
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Уютные деревянные домики, чистое озеро, баня и свежий лесной воздух всего в 80 км от Москвы
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600, fontSize: "0.95rem" }}
            >
              Забронировать
            </Link>
            <Link
              to="/rooms"
              className="px-8 py-3.5 rounded-full border-2 transition-all duration-200 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.7)", color: "white", fontWeight: 600, fontSize: "0.95rem" }}
            >
              Посмотреть домики
            </Link>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Листайте</span>
          <ChevronDown size={20} color="rgba(255,255,255,0.6)" />
        </div>
      </section>

      {/* ──────── STATS ──────── */}
      <section style={{ backgroundColor: "#1A3A1F" }}>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "12+", label: "Домиков и беседок" },
            { num: "80 км", label: "От Москвы" },
            { num: "5 га", label: "Территория" },
            { num: "15 лет", label: "Принимаем гостей" },
          ].map((s) => (
            <div key={s.label} className="py-4">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#A8D06A",
                }}
              >
                {s.num}
              </div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────── ABOUT ──────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span
              className="inline-block mb-3"
              style={{ color: "#6B9E3B", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
            >
              О нас
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#1A3A1F",
                lineHeight: 1.2,
              }}
            >
              Место, где природа <em>исцеляет</em>
            </h2>
            <p className="mt-5" style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
              Лесная Заводь — это уголок дикой природы с домашним уютом. Мы расположены в сосновом лесу на берегу живописного озера, где можно полностью отключиться от городской суеты и зарядиться энергией природы.
            </p>
            <p className="mt-3" style={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
              Каждый домик построен из натуральных материалов и оснащён всем необходимым для комфортного отдыха. Мы заботимся о том, чтобы ваш отпуск был незабываемым.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              {["Собственное чистое озеро", "Настоящая русская баня", "Экологически чистая территория", "Охраняемая парковка"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={16} color="#6B9E3B" />
                  <span style={{ fontSize: "0.95rem", color: "#444" }}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: "#1A3A1F", color: "white", fontSize: "0.875rem", fontWeight: 600 }}
            >
              Забронировать сейчас <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={RIVER}
              alt="Природа"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ height: "440px" }}
            />
            <div
              className="absolute -bottom-5 -left-5 hidden md:block rounded-xl p-4 shadow-xl"
              style={{ backgroundColor: "white", maxWidth: "200px" }}
            >
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="#F5A623" color="#F5A623" />)}
              </div>
              <p style={{ fontSize: "0.8rem", color: "#333", lineHeight: 1.5 }}>«Лучший отдых за последние годы!»</p>
              <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "4px" }}>— Андрей М.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────── ROOMS ──────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F4EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="inline-block mb-3"
              style={{ color: "#6B9E3B", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Размещение
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#1A3A1F",
              }}
            >
              Наши домики
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {rooms.map((room) => (
              <motion.div
                key={room.name}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#6B9E3B", fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    {room.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: "#1A3A1F",
                      fontSize: "1.1rem",
                    }}
                  >
                    {room.name}
                  </h3>
                  <p className="mt-2" style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
                    {room.desc}
                  </p>
                  <div className="mt-4 flex gap-4 text-sm" style={{ color: "#888" }}>
                    <span className="flex items-center gap-1"><Users size={14} /> {room.guests}</span>
                  </div>
                  <div
                    className="mt-4 flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid #eee" }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.4rem",
                          fontWeight: 700,
                          color: "#1A3A1F",
                        }}
                      >
                        {room.price} ₽
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#999" }}> / ночь</span>
                    </div>
                    <Link
                      to="/booking"
                      className="px-4 py-2 rounded-full text-sm transition-all hover:scale-105"
                      style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600 }}
                    >
                      Бронировать
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "#1A3A1F", color: "#1A3A1F", fontWeight: 600, fontSize: "0.875rem" }}
            >
              Все варианты размещения <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── ACTIVITIES ──────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="inline-block mb-3"
              style={{ color: "#6B9E3B", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Досуг
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#1A3A1F",
              }}
            >
              Чем заняться на базе
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {activities.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1 duration-300"
                  style={{ backgroundColor: "white", borderColor: "#E8EDDF" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#EAF4DC" }}
                  >
                    <Icon size={20} color="#6B9E3B" />
                  </div>
                  <div style={{ fontWeight: 600, color: "#1A3A1F", fontSize: "0.95rem" }}>{label}</div>
                  <div style={{ color: "#777", fontSize: "0.8rem", marginTop: "4px" }}>{desc}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              <img src={KAYAK} alt="Рыбалка" className="rounded-2xl object-cover w-full" style={{ height: "220px" }} />
              <img src={BARBECUE} alt="Барбекю" className="rounded-2xl object-cover w-full mt-6" style={{ height: "220px" }} />
              <img src={SAUNA} alt="Сауна" className="rounded-2xl object-cover w-full -mt-6" style={{ height: "220px" }} />
              <img src={HIKING} alt="Прогулки" className="rounded-2xl object-cover w-full" style={{ height: "220px" }} />
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "#1A3A1F", color: "#1A3A1F", fontWeight: 600, fontSize: "0.875rem" }}
            >
              Все активности <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── TESTIMONIALS ──────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#1A3A1F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="inline-block mb-3"
              style={{ color: "#A8D06A", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Отзывы
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "white",
              }}
            >
              Что говорят наши гости
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="p-6 rounded-2xl relative"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Quote size={32} color="#6B9E3B" className="mb-4 opacity-70" />
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {t.text}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{t.date}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#F5A623" color="#F5A623" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────── MAP / LOCATION ──────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: "#F0F4EC" }}>
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span
                  className="inline-block mb-3"
                  style={{ color: "#6B9E3B", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}
                >
                  Как добраться
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#1A3A1F",
                    lineHeight: 1.2,
                  }}
                >
                  Мы в 80 км от Москвы
                </h2>
                <p className="mt-4" style={{ color: "#555", lineHeight: 1.7 }}>
                  Удобный выезд по Ярославскому шоссе. Добраться просто на автомобиле или организованным трансфером.
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {[
                    { icon: MapPin, text: "Московская обл., д. Берёзово" },
                    { icon: MapPin, text: "80 км по Ярославскому шоссе" },
                    { icon: MapPin, text: "Трансфер от ж/д ст. Сергиев Посад" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2">
                      <Icon size={16} color="#6B9E3B" />
                      <span style={{ fontSize: "0.9rem", color: "#444" }}>{text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full w-fit transition-all hover:scale-105"
                  style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600 }}
                >
                  Забронировать и получить схему проезда <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative min-h-64 md:min-h-0">
                <img
                  src={HERO_BG}
                  alt="Расположение"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2"
                    style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                  >
                    <MapPin size={20} color="#6B9E3B" />
                    <span style={{ fontWeight: 700, color: "#1A3A1F", fontSize: "0.95rem" }}>Лесная Заводь</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CTA BANNER ──────── */}
      <section className="relative py-20 overflow-hidden">
        <img src={BARBECUE} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,40,20,0.75)" }} />
        <div className="relative z-10 text-center px-4">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "white",
            }}
          >
            Готовы к незабываемому отдыху?
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            Бронируйте домик сейчас и получите скидку 10% при бронировании на 3 ночи и более
          </p>
          <Link
            to="/booking"
            className="inline-block mt-8 px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 700, fontSize: "1rem" }}
          >
            Забронировать со скидкой
          </Link>
        </div>
      </section>
    </div>
  );
}
