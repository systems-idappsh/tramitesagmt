# SAGMT Web

Sitio web estatico modular para SAGMT, preparado para captacion, SEO, PWA, contacto directo y medicion de conversiones.

## Estructura

- `index.html`: home con hero, slider, servicios principales y CTA.
- `servicios.html`: detalle de servicios con anchors por tramite.
- `contacto.html`: WhatsApp, llamada, correos, mapa temporal, quienes somos y FAQ.
- `redes.html`: redes oficiales con enlaces directos.
- `aviso-privacidad.html` y `terminos-condiciones.html`: documentos legales temporales.
- `assets/css/`: estilos separados por base, layout, componentes, paginas y responsive.
- `assets/js/`: comportamiento modular del sitio.
- `components/`: header, footer, CTA y WhatsApp flotante.
- `assets/data/schema/`: JSON-LD base para buscadores.

## Valores temporales antes de produccion

- Dominio: `https://dominio.com/`.
- Google Tag Manager: `GTM-XXXXXXX`.
- Mapa: Mexico.
- PWA: nombre `SAGMT`, color principal `#0f172a`, fondo `#ffffff`.
- Imagenes: se integraron recursos JPG/PNG provistos para prueba visual. Deben reemplazarse por versiones finales optimizadas `.webp` o `.avif`.
- Legal: aviso de privacidad y terminos son base temporal y requieren aprobacion.
- Pais base, direccion real y coordenadas: pendientes.

## Contacto configurado

- WhatsApp y llamada: `+51 977 786 260`.
- Correo oficial: `tramitesagmt@gmail.com`.
- Correo de contacto: `contacto.sagmt@gmail.com`.

## Validacion recomendada

Servir la carpeta con un servidor estatico para que la carga de componentes por `fetch()` funcione correctamente.
