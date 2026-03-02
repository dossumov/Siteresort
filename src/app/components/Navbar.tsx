import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, TreePine, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/rooms", label: "Домики" },
  { to: "/activities", label: "Активности" },
  { to: "/booking", label: "Бронирование" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isTransparent ? "transparent" : "rgba(15, 40, 20, 0.97)",
        backdropFilter: isTransparent ? "none" : "blur(10px)",
        boxShadow: isTransparent ? "none" : "0 2px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: "#6B9E3B" }}
            >
              <TreePine size={20} color="white" />
            </div>
            <div>
              <div
                className="leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.02em",
                }}
              >
                Лесная Заводь
              </div>
              <div style={{ fontSize: "0.65rem", color: "#A8D06A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                База отдыха
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors duration-200 relative group"
                style={{
                  color: location.pathname === link.to ? "#A8D06A" : "rgba(255,255,255,0.85)",
                  fontSize: "0.875rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: location.pathname === link.to ? "100%" : "0%",
                    backgroundColor: "#A8D06A",
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + mobile burger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+79001234567"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#6B9E3B", color: "white", fontSize: "0.875rem" }}
            >
              <Phone size={14} />
              +7 (900) 123-45-67
            </a>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "rgba(15, 40, 20, 0.98)", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-2 transition-colors"
                style={{
                  color: location.pathname === link.to ? "#A8D06A" : "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 mt-2 py-2 justify-center rounded-full"
              style={{ backgroundColor: "#6B9E3B", color: "white" }}
            >
              <Phone size={14} />
              +7 (900) 123-45-67
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
