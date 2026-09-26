# eye &amp; heart · contadores de historias

Landing page estática. Tres archivos, sin frameworks ni dependencias.

---

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La estructura y todo el texto de la página |
| `index.css` | Todos los estilos, incluida la paleta |
| `index.js` | Menú móvil, header, visor de fotos y año del footer |
| `img/` | Las fotos. Leé `img/LEEME.txt` para los nombres y tamaños exactos |
| `robots.txt` | Le dice a Google que puede indexar el sitio |
| `sitemap.xml` | Lista de páginas para Google |
| `.nojekyll` | Necesario para GitHub Pages |

Misma filosofía que Betty e Ilha Grande: nada de Tailwind por CDN, CSS
escrito a mano y comentado, para que puedas leerlo mientras aprendés.

---

## Cómo probarla

Abrí `index.html` con doble clic. Funciona directo desde el disco.

Para verla en celular: clic derecho → Inspeccionar → ícono de teléfono
arriba a la izquierda del panel.

---

## Antes de publicar

Nueve cosas, todas marcadas como `COMENTARIO REEMPLAZO` en el HTML.

1. **Número de WhatsApp.** Puse `5493512345678` de ejemplo, en **6 lugares**.
   Buscá con `Ctrl+H` en VSCode y reemplazá todos de una.

2. **Email.** `hola@eyeandheart.com` es un marcador, está en 4 lugares.

3. **Las fotos.** Poné las reales en `img/` con los nombres de
   `img/LEEME.txt`. Ahora se ven bloques de color en su lugar.
   **Ojo:** la primera foto de cada historia tiene que ser vertical.

4. **El logo.** `img/logo.png` es un dibujo provisional. Pedile a
   Lilen y Gabriel el archivo original del ojo con alas, en SVG o PNG
   con fondo transparente.

5. **El dorado.** El `--dorado: #B99C6B` del CSS es una lectura
   aproximada de su pieza de Instagram, no el color oficial.
   Pediles el código exacto.

6. **Las dos historias.** Nombres, lugares y textos son de ejemplo.
   Hay que reemplazarlos por bodas reales. Si querés una tercera,
   copiá el bloque `<article class="story wrap">` entero.

7. **Las tres cifras** de la sección oscura (12 años, 200+ bodas,
   2 países) son inventadas. Preguntales las reales.

8. **Los testimonios.** Están basados en reseñas públicas suyas, pero
   **pediles autorización** antes de publicarlos, y confirmá los nombres.

9. **La URL.** En el `<head>` hay 3 lugares con `https://eyeandheart.com`,
   más `robots.txt` y `sitemap.xml`. Cambialos cuando definan el dominio.

---

## Cómo cambiar los colores

Todo está en `index.css`, en el bloque `:root` de arriba de todo.

```css
--papel:    #FDFCFA;   /* fondo de toda la web */
--tinta:    #2B2B2B;   /* titulares y texto */
--dorado:   #B99C6B;   /* marca: wordmark, detalles */
--dorado-2: #8C7549;   /* botones y franjas de color */
--oscuro:   #1A1815;   /* la sección "La preboda" */
```

Hay un motivo para tener dos dorados: el `--dorado` de marca sobre
fondo blanco tiene poco contraste y no se lee bien como texto. Por eso
los botones y las franjas usan `--dorado-2`, que sí cumple contraste.
**No los intercambies.**

---

## Las decisiones de diseño, y por qué

**Una sola sección oscura: "La preboda".** Es la que explica el método
que los diferencia, y es lo que las parejas destacan en sus reseñas. Si
agregás más fondos oscuros, deja de destacarse.

**Dos franjas de color pleno como máximo**, además de la oscura: "Cómo
trabajamos" y el CTA final. Ya están las dos usadas.

**Las historias no son una galería.** Son bodas completas, con nombre,
lugar y arco narrativo. Es lo que sostiene la bajada "contadores de
historias" — una grilla de fotos sueltas la contradiría. Además mete
nombres de salones y localidades reales en el texto, que es justo lo
que Google necesita para mostrarlos en búsquedas locales.

**El titular del hero es de ellos**, sale de su propia pieza de
Instagram: "La historia de tu boda comienza aquí". No lo cambies por
uno inventado.

---

## Sobre el idioma

Está hecha en español, que es el idioma de sus clientes tanto en
Córdoba como entre los latinos de Miami.

Si más adelante quieren versión en inglés, la forma más simple sin
complicar el proyecto es duplicar `index.html` como `en/index.html`,
traducir los textos, y agregar un selector `ES / EN` en el header. Los
archivos `index.css` e `index.js` se comparten entre las dos: no hay
que duplicarlos.

---

## SEO

El `<h1>` es "La historia de tu boda comienza aquí" — bueno de marca
pero sin palabras de búsqueda. Eso se compensa a propósito en dos
lugares que ya están escritos:

- El **subtítulo del hero** dice "fotografía de bodas en Miami y Córdoba".
- El **`<title>`** de la pestaña incluye "bodas y casamientos".

En Argentina la gente busca más "casamiento" que "boda", pero ellos
dicen "boda". Por eso los textos visibles usan su palabra y el `title`
lleva las dos.

Falta hacer, después de publicar: Google Business Profile (es
imprescindible en este rubro), Google Search Console y Analytics.

---

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo.
2. Subí los archivos manteniendo la estructura, con `index.html` en la raíz.
3. Settings → Pages → Source: Deploy from a branch → main → /(root).
4. Esperá dos minutos.

---

## Cosas que evité a propósito

- **Nada de `onclick` en el HTML.** Todo el comportamiento en `index.js`.
- **Ningún `<style>` dentro del HTML.** Todo en `index.css`.
- **Sin precios**, como en Betty: cada consulta va a WhatsApp.
- **Sin FAQ**, como pediste. Las dudas prácticas se resuelven en
  "La cobertura" y "Cómo trabajamos".
- **Sin carrusel automático** en el hero: pesa, distrae y nadie espera
  a la tercera foto.
- **Sin formulario largo.** El contacto es WhatsApp con la consulta ya
  escrita.
- **Todas las imágenes locales**, nada servido desde dominios ajenos.

---

## Detalles útiles

**El mensaje de WhatsApp va precargado.** Cuando alguien toca
"Consultar fecha", se abre el chat con el texto ya escrito. Eso le baja
la fricción a la pareja y a ellos les llega una consulta ya encaminada.

**El visor de fotos funciona con teclado y con el dedo.** Flechas
izquierda y derecha para pasar, `Escape` para cerrar, y en celular se
desliza. Está en la sección 3 de `index.js` si querés ver cómo.

**Las fotos tienen `width` y `height` en el HTML.** Sin eso la página
salta mientras cargan las imágenes y se siente rota. Si agregás fotos,
poneles siempre esos dos atributos.
