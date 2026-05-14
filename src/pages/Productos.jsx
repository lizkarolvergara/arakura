import { Link } from "react-router-dom"
import { productos } from "../data/productos"

export default function Productos() {
  return (
    <main className="min-h-screen bg-[#2d4a35] pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase font-display font-light">
            Lo que ofrecemos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
            Nuestros
            <span className="block text-[#7ecfb8] italic font-normal">
              productos
            </span>
          </h1>
          <p className="text-white/50 text-sm tracking-wide font-display font-light mt-4 max-w-md">
            Charcutería amazónica artesanal elaborada con insumos de la región.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="flex flex-col gap-24">
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Imagen */}
              <div className="relative">
                <div className="aspect-square bg-[#3d6147] overflow-hidden">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                    onError={e => {
                      e.target.style.display = "none"
                    }}
                  />
                </div>
                {/* Badge presentación */}
                <div className="absolute top-4 left-4 bg-[#2d4a35] border border-[#7ecfb8]/30 px-3 py-1.5">
                  <span className="text-[#7ecfb8] text-[9px] tracking-[0.3em] uppercase font-display">
                    {producto.presentacion}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-3">
                    {producto.nombre}
                  </h2>
                  <p className="text-white/65 text-base leading-relaxed font-body">
                    {producto.descripcion}
                  </p>
                </div>

                {/* Contiene */}
                <div>
                  <span className="text-[#7ecfb8] text-[10px] tracking-[0.3em] uppercase font-display font-semibold block mb-3">
                    Contiene
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {producto.contiene.map(ingrediente => (
                      <span
                        key={ingrediente}
                        className="border border-white/15 text-white/60 text-[10px] tracking-[0.1em] uppercase font-display px-3 py-1.5"
                      >
                        {ingrediente}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Uso recomendado */}
                <div className="border-l-2 border-[#7ecfb8]/30 pl-4">
                  <span className="text-[#7ecfb8] text-[10px] tracking-[0.3em] uppercase font-display font-semibold block mb-1">
                    Uso recomendado
                  </span>
                  <p className="text-white/60 text-sm font-body">
                    {producto.usoRecomendado}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/51917705184"
                  target="_blank"
                  rel="noreferrer"
                  className="self-start border border-[#7ecfb8] text-[#7ecfb8] px-8 py-3 text-xs tracking-[0.25em] uppercase font-display font-semibold hover:bg-[#7ecfb8] hover:text-[#2d4a35] transition-all duration-200 no-underline"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}