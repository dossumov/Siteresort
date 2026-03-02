import { Link } from "react-router";
import { TreePine, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2814", color: "rgba(255,255,255,0.75)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#6B9E3B" }}
              >
                <TreePine size={20} color="white" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  Лесная Заводь
                </div>
                <div style={{ fontSize: "0.65rem", color: "#A8D06A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  База отдыха
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}>
              Место, где природа встречается с комфортом. Отдыхайте, дышите лесным воздухом, наслаждайтесь тишиной.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Instagram size={16} color="#A8D06A" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Facebook size={16} color="#A8D06A" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="mb-4"
              style={{ color: "white", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Навигация
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Главная" },
                { to: "/rooms", label: "Домики" },
                { to: "/activities", label: "Активности" },
                { to: "/booking", label: "Бронирование" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4"
              style={{ color: "white", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Услуги
            </h4>
            <ul className="flex flex-col gap-2">
              {["Аренда домиков", "Баня и сауна", "Рыбалка", "Аренда лодок", "Барбекю", "Прогулки по лесу"].map(
                (s) => (
                  <li key={s} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                    {s}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              className="mb-4"
              style={{ color: "white", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Контакты
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} color="#A8D06A" className="mt-0.5 shrink-0" />
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                  Московская область, Сергиево-Посадский район, д. Берёзово
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} color="#A8D06A" className="shrink-0" />
                <a
                  href="tel:+79001234567"
                  className="transition-colors hover:text-white"
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} color="#A8D06A" className="shrink-0" />
                <a
                  href="mailto:info@lesnaya-zavod.ru"
                  className="transition-colors hover:text-white"
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}
                >
                  info@lesnaya-zavod.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © 2026 База отдыха «Лесная Заводь». Все права защищены.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            Режим работы: круглосуточно
          </p>
        </div>
      </div>
    </footer>
  );
}
