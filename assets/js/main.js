import { libAOS } from '/assets/js/lib/aos.js';
import { validarInputs } from "/assets/js/validaciones.js";
import { mensajeForm } from "/assets/js/formulario.js";





document.addEventListener('DOMContentLoaded', ()=>{
    libAOS();
    mensajeForm(); 
    validarInputs();

})

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































