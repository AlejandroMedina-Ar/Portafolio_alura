export function validarInputs() {
    const formInputs = document.querySelectorAll(".contacto__campo-form");
    formInputs.forEach((formInput) => {
        formInput.addEventListener("blur", (formInput) => {
            valida(formInput.target);
        })
    });
}

function valida(formInput) {
    const tipoDeformInput = formInput.dataset.tipo;
    
    if (formInput.validity.valid) {
        formInput.parentElement.classList.remove("datos__erroneos");
        formInput.parentElement.querySelector(".campo__error").innerHTML = "";
    }else {
        formInput.parentElement.classList.add("datos__erroneos");
        formInput.parentElement.querySelector(".campo__error").innerHTML =
        mostrarMensajeDeError(tipoDeformInput, formInput);
    }
}

function mostrarMensajeDeError(tipoDeformInput, formInput) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (formInput.validity[error]) {
            mensaje = mensajesDeError[tipoDeformInput][error];
        }
    });
    return mensaje;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"
];

const mensajesDeError = {
    name: {
        valueMissing: "Ingresa Tu Nombre",
    },
    lastname: {
        valueMissing: "Ingresa Tu Apellido",
    },
    email: {
        valueMissing: "Ingresa Tu Correo Electrónico",
        typeMismatch: "El Correo Electrónico no es válido",
    },
    subject: {
        valueMissing: "Ingresa un Asunto a tratar",
    },
    message: {
        valueMissing: "Por favor escribe un breve mensaje",
    }
}