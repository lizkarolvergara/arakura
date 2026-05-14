import { Link } from "react-router-dom"

const links = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Productos", to: "/productos" },
  { label: "Preguntas", to: "/preguntas" },
  { label: "Medios", to: "/medios" },
  { label: "Galería", to: "/galeria" },
]

const redes = [
  {
    label: "Instagram",
    href: "https://instagram.com/arakura.csb.ja",
    icon: "IG",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@.arakura",
    icon: "TK",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/AraKura",
    icon: "FB",
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e3528] border-t border-white/10 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-display text-[#7ecfb8] text-2xl font-bold tracking-[0.15em] uppercase block">
                Arakura
              </span>
              <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-display font-light">
                Charcutería amazónica
              </span>
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed max-w-xs">
              Transformamos la riqueza de la Amazonía en piezas de charcutería artesanal con carácter, profundidad y autenticidad.
            </p>
            {/* Aliado */}
            <div className="mt-2">
              <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-display block mb-2">
                Aliado estratégico
              </span>
              <span className="text-white/50 text-xs font-display tracking-wide">
                Ahumado Marujita — Tarapoto, Perú
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-display block mb-6">
              Navegación
            </span>
            <ul className="flex flex-col gap-3 list-none">
              {links.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/55 hover:text-[#7ecfb8] text-xs tracking-[0.1em] uppercase font-display transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-display block mb-6">
              Contacto
            </span>
            <div className="flex flex-col gap-4">

              {/* Redes */}
              <div className="flex gap-3">
                {redes.map(red => (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noreferrer"
                    title={red.label}
                    className="border border-white/20 text-white/50 hover:border-[#7ecfb8] hover:text-[#7ecfb8] text-[10px] font-display tracking-wider px-3 py-2 transition-all duration-200 no-underline"
                  >
                    {red.icon}
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51917705184"
                target="_blank"
                rel="noreferrer"
                className="border border-[#7ecfb8] text-[#7ecfb8] px-5 py-3 text-xs tracking-[0.2em] uppercase font-display font-semibold hover:bg-[#7ecfb8] hover:text-[#2d4a35] transition-all duration-200 no-underline text-center"
              >
                Pedir por WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:contactoarakura@gmail.com"
                className="text-white/40 hover:text-[#7ecfb8] text-xs font-display tracking-wide transition-colors duration-200 no-underline"
              >
                contactoarakura@gmail.com
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-display">
            © 2025 Arakura — Todos los derechos reservados
          </span>
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-display">
            Tarapoto, San Martín, Perú
          </span>
        </div>

      </div>
    </footer>
  )
}