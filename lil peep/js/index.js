document.addEventListener("DOMContentLoaded", function () {
  const enlacesImagenes = document.querySelectorAll("a[data-img]");

  enlacesImagenes.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      event.preventDefault();

      // Obtiene el valor del atributo data-image (nombre de la imagen)
      const imagenSeleccionada = enlace.getAttribute("data-img");

      // Guarda la imagen seleccionada en el LocalStorage
      localStorage.setItem("imagenSeleccionada", imagenSeleccionada);

      // Redirige a la página secundaria
      window.location.href = enlace.getAttribute("href");
    });
  });
});
