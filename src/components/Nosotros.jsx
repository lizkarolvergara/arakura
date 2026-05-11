export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-[#2d4a35]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase font-display font-light">
            Quiénes somos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
            Tradición que se saborea,
            <span className="block text-[#7ecfb8] italic font-normal">
              calidad que se siente.
            </span>
          </h2>
        </div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-white/75 text-base leading-relaxed font-body">
              En <strong className="text-white font-semibold">ARAKURA</strong> transformamos
              la riqueza de la Amazonía en piezas de charcutería amazónica que honran
              la tradición y elevan la cultura amazónica.
            </p>
            <p className="text-white/75 text-base leading-relaxed font-body">
              Somos una marca que nace del respeto por nuestros insumos, nuestras técnicas
              y nuestra identidad cultural. Seleccionamos materia prima de la región para
              crear productos artesanales con carácter, profundidad y autenticidad,
              apoyando a comerciantes locales.
            </p>
            <p className="text-white/75 text-base leading-relaxed font-body">
              Nuestros productos están pensados para quienes buscan algo distinto: sabores
              auténticos, identidad regional y una experiencia gastronómica que conecta
              con el origen.
            </p>
            <a
              href="#productos"
              className="self-start text-[#7ecfb8] text-xs tracking-[0.2em] uppercase font-display font-semibold border-b border-[#7ecfb8]/40 pb-1 hover:border-[#7ecfb8] transition-colors duration-200 no-underline mt-2"
            >
              Descubre nuestros productos →
            </a>
          </div>

          {/* Misión y Visión */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#3d6147] p-8 border-l-2 border-[#7ecfb8]">
              <h3 className="font-display text-[#7ecfb8] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Misión
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-body">
                Producir y comercializar charcutería amazónica tradicional con estándares
                altos de calidad, inocuidad y valor nutricional, utilizando insumos
                regionales y técnicas artesanales mejoradas.
              </p>
            </div>
            <div className="bg-[#3d6147] p-8 border-l-2 border-[#7ecfb8]/40">
              <h3 className="font-display text-[#7ecfb8]/70 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Visión
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-body">
                Ser la marca referente de charcutería amazónica en el Perú, reconocida
                por su autenticidad, calidad artesanal y compromiso con el desarrollo
                sostenible de la Amazonía.
              </p>
            </div>
          </div>
        </div>

        {/* Valores / Pills */}
        <div className="border-t border-white/10 pt-12">
          <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-display block mb-6">
            Nuestros valores
          </span>
          <div className="flex flex-wrap gap-3">
            {[
              "Identidad amazónica",
              "Artesanía con carácter",
              "Insumos regionales",
              "Sostenibilidad pesquera",
              "Innovación amazónica",
              "Orgullo bolivariano",
            ].map(valor => (
              <span
                key={valor}
                className="border border-[#7ecfb8]/30 text-white/60 text-[10px] tracking-[0.15em] uppercase font-display px-4 py-2 hover:border-[#7ecfb8] hover:text-[#7ecfb8] transition-colors duration-200 cursor-default"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}