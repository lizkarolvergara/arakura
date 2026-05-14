import { useState } from "react"

const faqs = [
  {
    pregunta: "¿Qué es ARAKURA?",
    respuesta: "Arakura es una marca de charcutería amazónica tradicional que transforma la riqueza del bosque en piezas artesanales de alto valor gastronómico. Somos identidad, técnica y sabor en equilibrio.",
  },
  {
    pregunta: "¿Qué hace especial a su charcutería?",
    respuesta: "Nuestra diferencia está en el origen. Trabajamos con insumos de la Amazonía y respetamos procesos artesanales que realzan la profundidad del sabor. Cada pieza es elaborada con tiempo, precisión y carácter.",
  },
  {
    pregunta: "¿Sus productos son artesanales?",
    respuesta: "¡Sí! Cada elaboración sigue procesos cuidados de curado y preparación, combinando tradición con estándares modernos de calidad e inocuidad.",
  },
  {
    pregunta: "¿Cómo garantizan la calidad?",
    respuesta: "Seleccionamos cuidadosamente nuestros insumos y aplicamos controles rigurosos en cada etapa del proceso. Nuestro compromiso es ofrecer productos seguros, consistentes y de excelencia.",
  },
]

function FAQItem({ pregunta, respuesta }) {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between py-6 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="font-display text-sm tracking-[0.1em] uppercase text-white/80 group-hover:text-[#7ecfb8] transition-colors duration-200">
          {pregunta}
        </span>
        <span
          className={`text-[#7ecfb8] text-lg ml-4 transition-transform duration-300 ${abierto ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      {/* Contenedor animado con grid-rows */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          abierto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-white/60 text-sm font-body leading-relaxed pb-6 max-w-2xl">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#2d4a35] pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase font-display font-light">
            Resolvemos tus dudas
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
            Preguntas
            <span className="block text-[#7ecfb8] italic font-normal">
              frecuentes
            </span>
          </h1>
        </div>

        {/* Acordeón */}
        <div className="border-t border-white/10">
          {faqs.map(faq => (
            <FAQItem
              key={faq.pregunta}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
            />
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-white/50 text-sm font-display tracking-wide mb-6">
            ¿Tienes otra pregunta?
          </p>
          <a
            href="https://wa.me/51917705184"
            target="_blank"
            rel="noreferrer"
            className="border border-[#7ecfb8] text-[#7ecfb8] px-8 py-3 text-xs tracking-[0.25em] uppercase font-display font-semibold hover:bg-[#7ecfb8] hover:text-[#2d4a35] transition-all duration-200 no-underline"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

      </div>
    </main>
  )
}