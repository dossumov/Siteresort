import { Link } from "react-router";
import { motion } from "motion/react";
import { Users, Check, Wifi, Flame, Droplets, Wind, Coffee, Star } from "lucide-react";

const CABIN_INTERIOR =
  "https://images.unsplash.com/photo-1755200353224-80b7d8e535a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0NTI5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CHALET =
  "https://images.unsplash.com/photo-1759281944287-9173dc7018e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBjaGFsZXQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzI0NTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const BEDROOM =
  "https://images.unsplash.com/photo-1759139445627-5ce9d5fac8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHJ1c3RpYyUyMHdvb2R8ZW58MXx8fHwxNzcyNDUyOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const RIVER =
  "https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbGFuZHNjYXBlJTIwc2NlbmljfGVufDF8fHx8MTc3MjQ1Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080";

const amenityIcons: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  wifi: Wifi,
  fire: Flame,
  shower: Droplets,
  ac: Wind,
  coffee: Coffee,
};

const rooms = [
  {
    id: 1,
    name: "Стандартный домик",
    subtitle: "Уютное гнёздышко для двоих",
    desc: "Небольшой, но очень уютный деревянный домик, идеально подходящий для романтического отдыха или уединённого отпуска. Расположен в тени сосен с видом на лесную тропинку.",
    img: CHALET,
    guests: "до 2 гостей",
    area: "32 м²",
    price: "3 500",
    tag: "Популярный",
    tagColor: "#6B9E3B",
    beds: "1 двуспальная кровать",
    amenities: ["wifi", "fire", "shower", "coffee"],
    features: [
      "Двуспальная кровать",
      "Собственная терраса",
      "Мангал на участке",
      "Постельное бельё",
      "Полотенца",
      "Фен",
    ],
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 2,
    name: "Семейный домик",
    subtitle: "Для большой компании или семьи",
    desc: "Просторный двухкомнатный домик с двумя отдельными спальнями и большой общей гостиной. Идеально подходит для семейного отдыха с детьми или компании друзей.",
    img: BEDROOM,
    guests: "до 6 гостей",
    area: "68 м²",
    price: "7 000",
    tag: "Лучший выбор",
    tagColor: "#D4A853",
    beds: "2 спальни",
    amenities: ["wifi", "fire", "shower", "ac", "coffee"],
    features: [
      "2 отдельные спальни",
      "Гостиная с камином",
      "Полностью оборудованная кухня",
      "Большая терраса",
      "Мангал и беседка",
      "Детская площадка рядом",
    ],
    rating: 4.8,
    reviews: 61,
  },
  {
    id: 3,
    name: "Люкс у воды",
    subtitle: "Эксклюзивный домик на берегу",
    desc: "Премиальный домик с прямым выходом к озеру. Панорамные окна с видом на воду, дровяная баня, отдельные причал и лодка в комплекте. Для тех, кто ценит максимум комфорта на природе.",
    img: CABIN_INTERIOR,
    guests: "до 4 гостей",
    area: "80 м²",
    price: "9 500",
    tag: "Премиум",
    tagColor: "#8B5E3C",
    beds: "1 кинг-сайз кровать",
    amenities: ["wifi", "fire", "shower", "ac", "coffee"],
    features: [
      "Прямой выход к озеру",
      "Собственная баня",
      "Лодка в аренде",
      "Панорамные окна",
      "Джакузи на террасе",
      "Мини-бар",
    ],
    rating: 5.0,
    reviews: 28,
  },
  {
    id: 4,
    name: "Эко-домик",
    subtitle: "Близость к природе",
    desc: "Аутентичный деревянный домик в глубине леса, минимализм и полное единение с природой. Электричество от солнечных батарей, родниковая вода.",
    img: RIVER,
    guests: "до 3 гостей",
    area: "28 м²",
    price: "2 800",
    tag: "Эко",
    tagColor: "#2d7a3a",
    beds: "1 кровать + диван",
    amenities: ["fire", "shower", "coffee"],
    features: [
      "Солнечная энергия",
      "Родниковая вода",
      "Печное отопление",
      "Терраса с гамаком",
      "Рядом с лесом",
      "Тишина и покой",
    ],
    rating: 4.7,
    reviews: 19,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function RoomsPage() {
  return (
    <div style={{ backgroundColor: "#FAFAF5" }}>
      {/* Hero */}
      <section
        className="pt-28 pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #0F2814 0%, #1A3A1F 100%)" }}
      >
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
            Размещение
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
            Наши домики
          </h1>
          <p className="mt-4 max-w-xl mx-auto px-4" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Каждый домик — это маленький мир комфорта среди природы. Выберите подходящий вариант для вашего отдыха.
          </p>
        </motion.div>
      </section>

      {/* Rooms */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            {rooms.map((room, idx) => (
              <motion.div
                key={room.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className={`relative overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ minHeight: "300px" }}
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: room.tagColor, fontSize: "0.78rem", fontWeight: 600 }}
                  >
                    {room.tag}
                  </span>
                </div>
                <div className={`p-8 md:p-10 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(room.rating) ? "#F5A623" : "none"}
                          color="#F5A623"
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>
                      {room.rating} ({room.reviews} отзывов)
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#1A3A1F",
                    }}
                  >
                    {room.name}
                  </h2>
                  <p style={{ color: "#6B9E3B", fontSize: "0.9rem", fontWeight: 600, marginTop: "2px" }}>
                    {room.subtitle}
                  </p>
                  <p className="mt-3" style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {room.desc}
                  </p>

                  <div className="flex gap-4 mt-4 flex-wrap">
                    <span
                      className="flex items-center gap-1"
                      style={{ fontSize: "0.85rem", color: "#555" }}
                    >
                      <Users size={14} color="#6B9E3B" /> {room.guests}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#555" }}>📐 {room.area}</span>
                    <span style={{ fontSize: "0.85rem", color: "#555" }}>🛏 {room.beds}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-1.5">
                    {room.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5">
                        <Check size={13} color="#6B9E3B" />
                        <span style={{ fontSize: "0.83rem", color: "#444" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6" style={{ borderTop: "1px solid #eee" }}>
                    <div>
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.8rem",
                          fontWeight: 700,
                          color: "#1A3A1F",
                        }}
                      >
                        {room.price} ₽
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "#888" }}> / ночь</span>
                    </div>
                    <Link
                      to="/booking"
                      className="px-6 py-3 rounded-full transition-all hover:scale-105"
                      style={{ backgroundColor: "#6B9E3B", color: "white", fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      Забронировать
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-12 pb-20" style={{ backgroundColor: "#F0F4EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3
            className="text-center mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1A3A1F",
            }}
          >
            Условия проживания
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Заезд / Выезд",
                items: ["Заезд: с 14:00", "Выезд: до 12:00", "Ранний / поздний заезд по договорённости"],
              },
              {
                title: "Оплата",
                items: ["Депозит 30% при бронировании", "Оставшаяся сумма при заезде", "Наличные или карта"],
              },
              {
                title: "Правила",
                items: ["Домашние животные по согласованию", "Тихий час с 23:00 до 8:00", "Курение только в отведённых местах"],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "white" }}
              >
                <h4 style={{ color: "#1A3A1F", fontWeight: 700, marginBottom: "12px" }}>{block.title}</h4>
                <ul className="flex flex-col gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} color="#6B9E3B" className="mt-1 shrink-0" />
                      <span style={{ fontSize: "0.875rem", color: "#555" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
