## Secciones

| Sección | Estado |
|---|---|
| Navbar | ✅ Listo |
| Hero | ✅ Listo |
| Nosotros | ✅ Listo |
| Productos | 🔲 Pendiente |
| FAQ | 🔲 Pendiente |
| Medios | 🔲 Pendiente |
| Galería | 🔲 Pendiente |
| Aliados | 🔲 Pendiente |
| Footer | 🔲 Pendiente |

## Cómo correr el proyecto

### Requisitos
- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/arakura.git
cd arakura

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
```

### Build para producción

```bash
npm run build
```

> El build comprime automáticamente todas las imágenes en `public/assets/`.

## Deploy

El proyecto está configurado para deploy automático en **Vercel**.

1. Subir cambios a GitHub (`main` branch)
2. Vercel detecta el push y hace deploy automático
3. No requiere configuración adicional — Vite es compatible por defecto

## Escalabilidad hacia e-commerce

La estructura está pensada para agregar ventas sin rehacer el proyecto:

- Los productos viven en `src/data/productos.js` — fácil de conectar a una API
- El componente `Productos.jsx` tendrá cards individuales — fácil agregar botón de compra
- Integración futura: **MercadoPago** o **Stripe** + carrito en estado global (Zustand)

## Contacto de la marca

- Instagram: [@arakura.csb.ja](https://instagram.com/arakura.csb.ja)
- TikTok: [@.arakura](https://tiktok.com/@.arakura)
- WhatsApp: +51 917 705 184
- Email: contactoarakura@gmail.com