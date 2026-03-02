import { Link } from "react-router";
import { motion } from "motion/react";
import { Fish, Waves, Flame, TreePine, Users, Leaf, Clock, Star } from "lucide-react";

const KAYAK =
  "https://images.unsplash.com/photo-1770566258339-feee40377925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlhayUyMGZpc2hpbmclMjBsYWtlJTIwc3VtbWVyfGVufDF8fHx8MTc3MjQ1Mjk3MXww&ixlib=rb-4.1.0&q=80&w=1080";
const SAUNA =
  "https://images.unsplash.com/photo-1757940556610-a114be4733bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMHNwYSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzcyNDUyOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const HIKING =
  "https://images.unsplash.com/photo-1591442710240-cb2f6338b486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbCUyMHN1bW1lcnxlbnwxfHx8fDE3NzI0NTI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const BARBECUE =
  "https://images.unsplash.com/photo-1729866670865-868fd1ff5527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmFyYmVjdWUlMjBjYW1wZmlyZSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzcyNDUyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const activities = [
  {
    icon: Fish,
    name: "Рыбалка",
    tagline: "Кидай удочку, лови удачу",
    desc: "Наше озеро богато рыбой: карась, карп, щука, окунь и лещ. Рыбалка доступна круглый год — летом с берега или лодки, зимой со льда. Рыболовные принадлежности можно взять напрокат.",
    img: KAYAK,
    price: "Бесплатно для гостей",
    duration: "В любое время",
    includes: ["Удочки и снасти в прокат", "Место на берегу", "Зимняя рыбалка", "Аренда лодки — 500 ₽/час"],
    highlight: false,
  },
  {
    icon: Flame,
    name: "Русская баня",
    tagline: "Жара, пар и берёзовый веник",
    desc: "Настоящая дровяная баня по-чёрному и современная сауна с паровой комнатой. После парилки — прыжок в холодный бассейн или озеро. Идеально для расслабления и оздоровления.",
    img: SAUNA,
    price: "от 2 500 ₽ / 2 часа",
    duration: "от 2 часов",
    includes: ["Дровяная парилка", "Берёзовые и дубовые веники", "Холодный бассейн", "Чай с травами"],
    highlight: true,
  },
  {
    icon: TreePine,
    name: "Пешие маршруты",
    tagline: "Дышите лесом, заряжайтесь природой",
    desc: "Три разных маршрута по сосновому лесу — от лёгкой прогулки до полноценного трекинга. Гид-эколог расскажет о флоре и фауне Подмосковья. Грибной и ягодный сезон с июля по октябрь.",
    img: HIKING,
    price: "Бесплатно для гостей",
    duration: "1–4 часа",
    includes: ["3 маршрута разной сложности", "Карты-схемы", "Экскурсия с гидом (по заявке)", "Грибная охота осенью"],
    highlight: false,
  },
  {
    icon: Waves,
    name: "Купание и водный отдых",
    tagline: "Плещитесь на чистом озере",
    desc: "Оборудованный пляж с песчаным дном, понтоном и вышкой для прыжков. Лежаки, зонты и SUP-доски. Дно регулярно очищается, вода проверяется на чистоту.",
    img: KAYAK,
    price: "Бесплатно для гостей",
    duration: "С 8:00 до 22:00",
    includes: ["Оборудованный пляж", "Лежаки и зонты", "SUP-доски в прокат", "Плавучий понтон"],
    highlight: false,
  },
  {
    icon: Flame,
    name: "Мангал и барбекю",
    tagline: "Шашлык под звёздным небом",
    desc: "У каждого домика есть своя зона барбекю. Большая беседка с мангалом для компаний доступна по предварительной записи. Дрова, уголь и розжиг в наличии.",
    img: BARBECUE,
    price: "от 300 ₽",
    duration: "Вечер",
    includes: ["Мангал у каждого домика", "Дрова и уголь в продаже", "Инвентарь для барбекю", "Большая беседка на 20 чел."],
    highlight: false,
  },
  {
    icon: Users,
    name: "Командный отдых",
    tagline: "Корпоратив в лесу",
    desc: "Организуем корпоративный отдых, дни рождения и тимбилдинги. Беседки на 20–50 человек, сцена для выступлений, командные игры и спортивные площадки.",
    img: BARBECUE,
    price: "По запросу",
    duration: "Весь день",
    includes: ["Аренда беседки на 20–50 чел.", "Мастер-классы", "Спортивные игры", "Вечеринка с DJ"],
    highlight: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ActivitiesPage() {
  return (
    <div style={{ backgroundColor: "#FAFAF5" }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A3A1F 0%, #2d5a27 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <img src={HIKING} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span
              style={{
                color: "#A8D06A",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Досуг и развлечения
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
              Активности
            </h1>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              У нас никогда не бывает скучно. Рыбалка, баня, прогулки, купание — всё это ждёт вас на базе «Лесная Заводь».
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities list */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: "white",
                    border: act.highlight ? "2px solid #6B9E3B" : "none",
                  }}
                >
                  {act.highlight && (
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-white z-10"
                      style={{ backgroundColor: "#6B9E3B", fontSize: "0.75rem", fontWeight: 700 }}
                    >
                      ★ Хит сезона
                    </div>
                  )}
                  <div
                    className={`relative overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}
                    style={{ minHeight: "280px" }}
                  >
                    <img
                      src={act.img}
                      alt={act.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      style={{ minHeight: "280px" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
                  </div>
                  <div
                    className={`p-8 md:p-10 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#EAF4DC" }}
                    >
                      <Icon size={24} color="#6B9E3B" />
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "#1A3A1F",
                      }}
                    >
                      {act.name}
                    </h2>
                    <p style={{ color: "#6B9E3B", fontWeight: 600, fontSize: "0.9rem", marginTop: "2px" }}>
                      {act.tagline}
                    </p>
                    <p className="mt-3" style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
                      {act.desc}
                    </p>

                    <div className="flex gap-4 mt-4">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: "#F0F4EC", fontSize: "0.82rem", color: "#444" }}
                      >
                        <Star size={13} color="#6B9E3B" />
                        {act.price}
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: "#F0F4EC", fontSize: "0.82rem", color: "#444" }}
                      >
                        <Clock size={13} color="#6B9E3B" />
                        {act.duration}
                      </div>
                    </div>

                    <ul className="mt-5 grid grid-cols-2 gap-1.5">
                      {act.includes.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <Leaf size={13} color="#6B9E3B" className="mt-1 shrink-0" />
                          <span style={{ fontSize: "0.82rem", color: "#555" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4" style={{ backgroundColor: "#F0F4EC" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "#1A3A1F",
          }}
        >
          Хотите попробовать всё?
        </h2>
        <p className="mt-3 max-w-md mx-auto" style={{ color: "#666", lineHeight: 1.7 }}>
          Забронируйте домик и наслаждайтесь всеми активностями базы отдыха «Лесная Заводь»
        </p>
        <Link
          to="/booking"
          className="inline-block mt-8 px-8 py-3.5 rounded-full transition-all hover:scale-105"
          style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600 }}
        >
          Забронировать сейчас
        </Link>
      </section>
    </div>
  );
}
