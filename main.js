/* import { libAOS } from '/assets/js/lib/AnimateInit'; */
import { validarInputs } from "./validaciones.js";
import { mensajeForm } from "./formulario.js";

document.addEventListener('DOMContentLoaded', () => {

    /* libAOS(); */

    AOS.init({
      duration: 1100,
    });

    goToTop();
    mensajeForm(); 
    validarInputs();

});

const showOnPx = 1000;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }

})

const goToTop = () => {

    document.body.scrollIntoView({
      behavior: "smooth",
    });

};































