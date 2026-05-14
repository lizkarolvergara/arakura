import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const links = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Productos", to: "/productos" },
  { label: "Preguntas", to: "/preguntas" },
  { label: "Medios", to: "/medios" },
  { label: "Galería", to: "/galeria" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6
      ${scrolled
        ? "bg-[#2d4a35]/95 backdrop-blur-sm border-b border-[#7ecfb8]/20"
        : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-[#7ecfb8] text-xl font-bold tracking-[0.15em] uppercase">
            Arakura
          </span>
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase hidden sm:block font-display font-light">
            charcutería amazónica
          </span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-white/75 hover:text-[#7ecfb8] text-xs tracking-[0.15em] uppercase transition-colors duration-200 no-underline font-display font-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/51917705184"
              target="_blank"
              rel="noreferrer"
              className="border border-[#7ecfb8] text-[#7ecfb8] px-5 py-2 text-xs tracking-[0.2em] uppercase font-display font-semibold hover:bg-[#7ecfb8] hover:text-[#2d4a35] transition-all duration-200 no-underline"
            >
              Pedir ahora
            </a>
          </li>
        </ul>

        {/* Hamburguesa mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#7ecfb8] text-2xl bg-transparent border-none cursor-pointer font-display"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-[#2d4a35]/98 px-6 pb-6 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm py-2 border-b border-[#7ecfb8]/15 no-underline font-display tracking-[0.1em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/51917705184"
            target="_blank"
            rel="noreferrer"
            className="border border-[#7ecfb8] text-[#7ecfb8] py-3 text-sm font-semibold text-center mt-2 no-underline font-display tracking-[0.2em] uppercase hover:bg-[#7ecfb8] hover:text-[#2d4a35] transition-all duration-200"
          >
            Pedir ahora
          </a>
        </div>
      )}
    </nav>
  )
}