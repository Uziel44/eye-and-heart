/* ==========================================================================
   EYE & HEART · contadores de historias
   Único archivo de JavaScript.

   QUÉ HACE ESTE ARCHIVO
   1. Abre y cierra el menú en celular
   2. Marca el header cuando bajás en la página
   3. Visor de fotos (lightbox) de las historias
   4. Escribe el año actual en el footer

   No hay código dentro del HTML: todo el comportamiento vive acá.
   ========================================================================== */

(function () {
  "use strict";


  /* ------------------------------------------------------------------------
     1. MENÚ MÓVIL
     ------------------------------------------------------------------------ */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navMenu");

  if (burger && nav) {

    const setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      // Bloquea el scroll del fondo mientras el menú está abierto
      document.body.style.overflow = open ? "hidden" : "";
    };

    burger.addEventListener("click", function () {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    // Al tocar cualquier enlace, el menú se cierra
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    // Si se agranda la ventana, volvemos al menú de escritorio
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }


  /* ------------------------------------------------------------------------
     2. HEADER AL BAJAR
     Agrega la clase is-stuck, que en el CSS le pone fondo claro.
     ------------------------------------------------------------------------ */
  const header = document.getElementById("siteHeader");

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }


  /* ------------------------------------------------------------------------
     3. VISOR DE FOTOS (LIGHTBOX)

     Junta todas las fotos de las historias en una lista y permite
     recorrerlas con los botones o con las flechas del teclado.
     ------------------------------------------------------------------------ */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  // Todas las fotos que se pueden ampliar
  const fotos = Array.prototype.slice.call(
    document.querySelectorAll(".story__fig img")
  );

  if (lb && lbImg && fotos.length) {

    let actual = 0;
    let ultimoFoco = null;

    const mostrar = function (indice) {
      // Si se pasa del final vuelve al principio, y al revés
      actual = (indice + fotos.length) % fotos.length;
      lbImg.src = fotos[actual].src;
      lbImg.alt = fotos[actual].alt;
    };

    const abrir = function (indice) {
      ultimoFoco = document.activeElement;
      mostrar(indice);
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      lbClose.focus();
    };

    const cerrar = function () {
      lb.hidden = true;
      lbImg.src = "";
      document.body.style.overflow = "";
      if (ultimoFoco) ultimoFoco.focus();
    };

    // Cada foto abre el visor en su posición
    fotos.forEach(function (foto, i) {
      foto.setAttribute("tabindex", "0");
      foto.setAttribute("role", "button");

      foto.addEventListener("click", function () {
        abrir(i);
      });

      foto.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          abrir(i);
        }
      });
    });

    lbClose.addEventListener("click", cerrar);
    lbPrev.addEventListener("click", function () { mostrar(actual - 1); });
    lbNext.addEventListener("click", function () { mostrar(actual + 1); });

    // Clic en el fondo negro también cierra
    lb.addEventListener("click", function (e) {
      if (e.target === lb) cerrar();
    });

    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") mostrar(actual - 1);
      if (e.key === "ArrowRight") mostrar(actual + 1);
    });

    // Deslizar con el dedo en celular
    let inicioX = null;

    lb.addEventListener("touchstart", function (e) {
      inicioX = e.changedTouches[0].clientX;
    }, { passive: true });

    lb.addEventListener("touchend", function (e) {
      if (inicioX === null) return;
      const recorrido = e.changedTouches[0].clientX - inicioX;
      if (Math.abs(recorrido) > 50) {
        mostrar(recorrido > 0 ? actual - 1 : actual + 1);
      }
      inicioX = null;
    }, { passive: true });
  }


  /* ------------------------------------------------------------------------
     4. AÑO EN EL FOOTER
     ------------------------------------------------------------------------ */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

})();
