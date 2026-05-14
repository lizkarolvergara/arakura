const medios = [
  {
    id: 1,
    fuente: "Gobierno Regional San Martín",
    descripcion: "La Dirección Regional de Educación (DRE-SM) llevó a cabo con éxito la etapa regional del concurso educativo Crea y Emprende 2025, evento que reunió a estudiantes de las diez UGEL de la región en la Institución Educativa Germán Tejada Vela de Moyobamba. Durante esta jornada, los participantes presentaron un total de 43 proyectos escolares orientados al emprendimiento sostenible, la innovación y la mejora de la calidad de vida en las comunidades sanmartinenses.",
    etiqueta: "Crea y Emprende 2025",
    qr: "/assets/qr-dre.png",
  },
  {
    id: 2,
    fuente: "I.E. Simón Bolívar",
    descripcion: "El estudiante Mauricio Viena presenta el proyecto \"Elaboración de Jamón Amazónico Nutritivo a Base de Paiche\", una propuesta que promueve el aprovechamiento sostenible de los recursos de nuestra Amazonía.",
    etiqueta: "#CreaYEmprende",
    imagen: "/assets/medios-csb.jpeg",
  },
]

export default function Medios() {
  return (
    <main className="min-h-screen bg-[#2d4a35] pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase font-display font-light">
            Prensa y apariciones
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
            Medios
            <span className="block text-[#7ecfb8] italic font-normal">
              y cobertura
            </span>
          </h1>
        </div>

        {/* Artículos */}
        <div className="flex flex-col gap-16">
          {medios.map((medio, index) => (
            <div
              key={medio.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Texto */}
              <div className="flex flex-col gap-5">
                <span className="text-[#7ecfb8] text-[10px] tracking-[0.3em] uppercase font-display font-semibold">
                  {medio.etiqueta}
                </span>
                <h2 className="font-serif text-2xl text-white leading-snug">
                  {medio.fuente}
                </h2>
                <p className="text-white/65 text-sm leading-relaxed font-body">
                  {medio.descripcion}
                </p>
              </div>

              {/* Imagen o QR */}
              <div className="bg-[#3d6147] aspect-video flex items-center justify-center overflow-hidden">
                {medio.qr && (
                  <img
                    src={medio.qr}
                    alt="QR nota de prensa"
                    className="w-40 h-40 object-contain opacity-90"
                    onError={e => e.target.style.display = "none"}
                  />
                )}
                {medio.imagen && (
                  <img
                    src={medio.imagen}
                    alt={medio.fuente}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                    onError={e => e.target.style.display = "none"}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}