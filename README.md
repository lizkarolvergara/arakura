Aquí va el README completo y actualizado:
markdown# ARAKURA — Charcutería Amazónica

Sitio web oficial de **ARAKURA**, marca de charcutería amazónica de Tarapoto, Perú.
Proyecto escolar — Crea y Emprende 2025.

---

## Stack

- **React 19** — UI por componentes
- **Vite 6** — bundler y dev server
- **Tailwind CSS 4** — estilos utilitarios
- **React Router DOM** — navegación multi-page (SPA)
- **vite-plugin-image-optimizer + sharp** — compresión automática de imágenes en build

## Fuentes

- `Josefin Sans` — navegación, labels, botones (Google Fonts)
- `Raleway` — cuerpo de texto (Google Fonts)
- `Playfair Display` — títulos principales (Google Fonts)

> Las fuentes originales de marca (Akt Nuvo, ANANIAS, Leafy, LOUbag, Adlery Blockletter,
> Six Hands Brush) se integrarán cuando el cliente provea los archivos .ttf/.otf.
> Se colocarán en `public/fonts/` y se declararán en `src/index.css` con `@font-face`.

## Estructura
arakura/
├── public/
│   └── assets/
│       ├── hero.jpeg
│       ├── jamon-paiche.jpeg
│       ├── chorizo-paiche.jpeg
│       ├── qr-dre.png
│       ├── medios-csb.jpeg
│       └── galeria/
│           ├── plaza-01.jpeg … plaza-05.jpeg
│           ├── produce-01.jpeg … produce-05.jpeg
│           ├── ugel-01.jpeg … ugel-05.jpeg
│           ├── dre-01.jpeg … dre-05.jpeg
│           ├── vimalu-01.jpeg … vimalu-05.jpeg
│           └── produccion-01.jpeg … produccion-05.jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ✅
│   │   └── Footer.jsx        ✅
│   ├── pages/
│   │   ├── Home.jsx          ✅ (Hero)
│   │   ├── Nosotros.jsx      ✅
│   │   ├── Productos.jsx     ✅
│   │   ├── FAQ.jsx           ✅
│   │   ├── Medios.jsx        ✅
│   │   └── Galeria.jsx       ✅
│   ├── data/
│   │   └── productos.js      ✅
│   ├── index.css
│   └── App.jsx
├── vite.config.js
├── tailwind.config.js
└── README.md

## Rutas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home (Hero) | ✅ |
| `/nosotros` | Nosotros | ✅ |
| `/productos` | Productos | ✅ |
| `/preguntas` | FAQ acordeón | ✅ |
| `/medios` | Medios y prensa | ✅ |
| `/galeria` | Galería por activación | ✅ |

## Pendientes

- [ ] Agregar todas las imágenes a `public/assets/` (ver listado abajo)
- [ ] Integrar fuentes de marca cuando el cliente provea los archivos
- [ ] Verificar deploy en Vercel (hubo error de build, pendiente confirmar)
- [ ] Página 404 personalizada
- [ ] Sección Aliados en Home o página propia
- [ ] Precios cuando el cliente los defina
- [ ] Carrito de compras (fase 2) con MercadoPago o Stripe + Zustand

## Listado completo de imágenes pendientes

### `public/assets/`
hero.jpeg
jamon-paiche.jpeg
chorizo-paiche.jpeg
qr-dre.png
medios-csb.jpeg

### `public/assets/galeria/`
plaza-01.jpeg … plaza-05.jpeg         (Activación Plaza de Armas Tarapoto)
produce-01.jpeg … produce-05.jpeg     (Feria Perú Produce 2025)
ugel-01.jpeg … ugel-05.jpeg           (Feria Crea y Emprende UGEL)
dre-01.jpeg … dre-05.jpeg             (Feria Crea y Emprende DRE)
vimalu-01.jpeg … vimalu-05.jpeg       (Activación Vimalu)
produccion-01.jpeg … produccion-05.jpeg (Producción y Equipo)

**Total: 35 imágenes**

## Paleta de colores

| Variable | Hex | Uso |
|---|---|---|
| Verde oscuro | `#2d4a35` | Fondo principal |
| Verde medio | `#3d6147` | Cards, fondos secundarios |
| Verde oscuro bg | `#1e3528` | Footer |
| Verde menta | `#7ecfb8` | Acentos, títulos, CTAs |
| Blanco cálido | `#f5f0e8` | Texto principal |

## Cómo correr el proyecto

### Requisitos
- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
git clone https://github.com/lizkarolvergara/arakura.git
cd arakura
npm install
npm run dev
```

### Build para producción

```bash
npm run build
```

> El build comprime automáticamente todas las imágenes via `sharp`.

## Deploy

- Plataforma: **Vercel**
- Deploy automático desde rama `main`
- Framework preset: **Vite**
- Sin variables de entorno por ahora

## Escalabilidad hacia e-commerce

- Productos en `src/data/productos.js` → fácil conectar a API o CMS
- Cada producto puede tener ruta propia `/productos/:id`
- Carrito futuro con **Zustand** + pasarela **MercadoPago** o **Stripe**

## Contacto de la marca

- Instagram: [@arakura.csb.ja](https://instagram.com/arakura.csb.ja)
- TikTok: [@.arakura](https://tiktok.com/@.arakura)
- Facebook: [AraKura](https://facebook.com/AraKura)
- WhatsApp: +51 917 705 184
- Email: contactoarakura@gmail.com