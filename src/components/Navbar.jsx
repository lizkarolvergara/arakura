import { useState, useEffect } from "react"

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Medios", href: "#medios" },
  { label: "Galería", href: "#galeria" },
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
        <a href="#inicio" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-[#7ecfb8] text-xl font-bold tracking-[0.15em] uppercase">
            Arakura
          </span>
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase hidden sm:block font-display font-light">
            charcutería amazónica
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {links.map(link => (
            <li key={link.href}>
            <a  
                href={link.href}
                className="text-white/75 hover:text-[#7ecfb8] text-xs tracking-[0.15em] uppercase transition-colors duration-200 no-underline font-display font-light"
              >
                {link.label}
              </a>
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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm py-2 border-b border-[#7ecfb8]/15 no-underline font-display tracking-[0.1em] uppercase"
            >
              {link.label}
            </a>
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