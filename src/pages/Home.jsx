import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero.jpeg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a2e20]/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Etiqueta superior */}
        <span className="inline-block text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase mb-8 opacity-80 font-display font-light">
          Charcutería amazónica · Tarapoto, Perú
        </span>

        {/* Título */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Amazonía que
          <span className="block text-[#7ecfb8] italic font-normal">
            nutre y alimenta
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-white/60 text-base md:text-lg font-light tracking-widest uppercase mb-12 max-w-xl mx-auto font-display">
          Tradición que se saborea, calidad que se siente
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/productos" className="bg-[#7ecfb8] ...">
              Ver productos
          </Link>
          <a
            href="https://wa.me/51917705184"
            target="_blank"
            rel="noreferrer"
            className="border border-white/40 text-white px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-display font-light hover:border-[#7ecfb8] hover:text-[#7ecfb8] transition-colors duration-200 no-underline w-full sm:w-auto text-center"
          >
            Pedir por WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}