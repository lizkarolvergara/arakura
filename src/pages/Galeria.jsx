const activaciones = [
  {
    id: "plaza-armas",
    titulo: "Activación Plaza de Armas de Tarapoto",
    fotos: [
      "/assets/galeria/plaza-01.jpeg",
      "/assets/galeria/plaza-02.jpeg",
      "/assets/galeria/plaza-03.jpeg",
      "/assets/galeria/plaza-04.jpeg",
      "/assets/galeria/plaza-05.jpeg",
    ],
  },
  {
    id: "peru-produce",
    titulo: "Activación Feria Perú Produce 2025",
    fotos: [
      "/assets/galeria/produce-01.jpeg",
      "/assets/galeria/produce-02.jpeg",
      "/assets/galeria/produce-03.jpeg",
      "/assets/galeria/produce-04.jpeg",
      "/assets/galeria/produce-05.jpeg",
    ],
  },
  {
    id: "crea-emprende-ugel",
    titulo: "Feria Crea y Emprende UGEL",
    fotos: [
      "/assets/galeria/ugel-01.jpeg",
      "/assets/galeria/ugel-02.jpeg",
      "/assets/galeria/ugel-03.jpeg",
      "/assets/galeria/ugel-04.jpeg",
      "/assets/galeria/ugel-05.jpeg",
    ],
  },
  {
    id: "crea-emprende-dre",
    titulo: "Feria Crea y Emprende DRE",
    fotos: [
      "/assets/galeria/dre-01.jpeg",
      "/assets/galeria/dre-02.jpeg",
      "/assets/galeria/dre-03.jpeg",
      "/assets/galeria/dre-04.jpeg",
      "/assets/galeria/dre-05.jpeg",
    ],
  },
  {
    id: "vimalu",
    titulo: "Activación Vimalu",
    fotos: [
      "/assets/galeria/vimalu-01.jpeg",
      "/assets/galeria/vimalu-02.jpeg",
      "/assets/galeria/vimalu-03.jpeg",
      "/assets/galeria/vimalu-04.jpeg",
      "/assets/galeria/vimalu-05.jpeg",
    ],
  },
  {
    id: "produccion",
    titulo: "Producción y Equipo",
    fotos: [
      "/assets/galeria/produccion-01.jpeg",
      "/assets/galeria/produccion-02.jpeg",
      "/assets/galeria/produccion-03.jpeg",
      "/assets/galeria/produccion-04.jpeg",
      "/assets/galeria/produccion-05.jpeg",
    ],
  },
]

export default function Galeria() {
  return (
    <main className="min-h-screen bg-[#2d4a35] pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-[#7ecfb8] text-[10px] tracking-[0.4em] uppercase font-display font-light">
            Nuestra trayectoria
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
            Galería
            <span className="block text-[#7ecfb8] italic font-normal">
              de activaciones
            </span>
          </h1>
        </div>

        {/* Secciones */}
        <div className="flex flex-col gap-20">
          {activaciones.map(activacion => (
            <div key={activacion.id}>

              {/* Título de sección */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-display">
                  {activacion.titulo}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Grid de fotos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {activacion.fotos.map((foto, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-[#3d6147] overflow-hidden group"
                  >
                    <img
                      src={foto}
                      alt={`${activacion.titulo} ${index + 1}`}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      onError={e => e.target.style.display = "none"}
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  )
}