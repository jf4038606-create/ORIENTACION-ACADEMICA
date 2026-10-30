"use strict";

/* ================================================================
   01. ELEMENTOS DEL DOCUMENTO
================================================================ */

const pantallaInicio = document.getElementById("pantalla-inicio");
const panelPreguntas = document.getElementById("panel-preguntas");
const panelResultados = document.getElementById("panel-resultados");

const botonComenzar = document.getElementById("boton-comenzar");
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");
const botonRepetir = document.getElementById("boton-repetir");

const contadorPregunta = document.getElementById("contador-pregunta");
const porcentajeProgreso = document.getElementById("porcentaje-progreso");
const contenedorBarraProgreso = document.getElementById(
    "contenedor-barra-progreso"
);
const rellenoProgreso = document.getElementById("relleno-progreso");

const numeroGrande = document.getElementById("numero-grande");
const categoriaPregunta = document.getElementById("categoria-pregunta");
const tituloPregunta = document.getElementById("titulo-pregunta");
const ayudaPregunta = document.getElementById("ayuda-pregunta");
const opcionesRespuesta = document.getElementById("opciones-respuesta");
const avisoSeleccion = document.getElementById("aviso-seleccion");

const textoBotonSiguiente = document.getElementById(
    "texto-boton-siguiente"
);

const puntuacionResultado = document.getElementById(
    "puntuacion-resultado"
);
const circuloResultado = document.getElementById("circulo-resultado");

const tituloResultado = document.getElementById("titulo-resultado");
const descripcionResultado = document.getElementById(
    "descripcion-resultado"
);
const nivelResultado = document.getElementById("nivel-resultado");
const subtituloResultado = document.getElementById("subtitulo-resultado");
const detalleResultado = document.getElementById("detalle-resultado");

const listaAreas = document.getElementById("lista-areas");
const anioTest = document.getElementById("anio-test");


/* ================================================================
   02. DATOS DEL TEST
================================================================ */

/*
   Cada pregunta corresponde a un área científica.
   Hay dos preguntas por área.

   Los puntos expresan interés declarado:
   3 = Me interesa mucho.
   2 = Me interesa.
   1 = Me interesa poco.
   0 = No me interesa por ahora.
*/

const preguntas = [
    {
        categoria: "VIDA Y ORGANISMOS",
        titulo: "¿Te gustaría conocer cómo funcionan los seres vivos?",
        ayuda:
            "Piensa en plantas, animales, microorganismos y en los procesos que hacen posible la vida.",
        area: "vida"
    },
    {
        categoria: "MATERIA Y QUÍMICA",
        titulo: "¿Te da curiosidad saber por qué las sustancias cambian?",
        ayuda:
            "Por ejemplo, cómo se transforman los materiales, por qué ocurren ciertas reacciones o qué compone los objetos.",
        area: "materia"
    },
    {
        categoria: "FÍSICA Y FENÓMENOS NATURALES",
        titulo: "¿Te interesa descubrir por qué ocurren los fenómenos físicos?",
        ayuda:
            "Puedes pensar en la luz, el sonido, la electricidad, el movimiento o las fuerzas.",
        area: "fisica"
    },
    {
        categoria: "INVESTIGACIÓN CIENTÍFICA",
        titulo: "Cuando algo te causa curiosidad, ¿te gusta investigar para encontrar una explicación?",
        ayuda:
            "Considera si disfrutas formular preguntas, buscar información y contrastar diferentes explicaciones.",
        area: "investigacion"
    },
    {
        categoria: "AMBIENTE Y NATURALEZA",
        titulo: "¿Te interesa comprender cómo funcionan los ecosistemas y cómo proteger la naturaleza?",
        ayuda:
            "Piensa en la biodiversidad, el agua, el suelo, el clima y el cuidado de los recursos naturales.",
        area: "ambiente"
    },
    {
        categoria: "VIDA Y SALUD",
        titulo: "¿Te llama la atención aprender cómo funciona el cuerpo humano y cómo se cuida la salud?",
        ayuda:
            "Por ejemplo, conocer los órganos, los hábitos saludables y las bases científicas de la salud.",
        area: "vida"
    },
    {
        categoria: "FÍSICA Y RAZONAMIENTO",
        titulo: "¿Disfrutas analizar situaciones y buscar relaciones lógicas para comprenderlas?",
        ayuda:
            "Puedes pensar en reconocer patrones, comparar datos, interpretar gráficos o resolver problemas.",
        area: "fisica"
    },
    {
        categoria: "INVESTIGACIÓN Y EXPERIMENTACIÓN",
        titulo: "¿Te gustaría realizar experimentos y comparar los resultados obtenidos?",
        ayuda:
            "La experimentación puede ayudarte a observar diferencias, comprobar ideas e interpretar evidencias.",
        area: "investigacion"
    },
    {
        categoria: "MATERIA Y QUÍMICA COTIDIANA",
        titulo: "¿Te gustaría saber qué sustancias forman los alimentos y los materiales que utilizamos a diario?",
        ayuda:
            "Por ejemplo, conocer propiedades de los materiales, componentes de una mezcla y transformaciones químicas.",
        area: "materia"
    },
    {
        categoria: "AMBIENTE Y TIERRA",
        titulo: "¿Te interesa investigar fenómenos como el clima, la contaminación o los cambios del planeta?",
        ayuda:
            "Considera si te gustaría comprender las causas de estos fenómenos y sus efectos sobre los seres vivos.",
        area: "ambiente"
    }
];


/* ================================================================
   03. OPCIONES
================================================================ */

const opciones = [
    {
        texto: "Me interesa mucho",
        puntuacion: 3,
        icono: "fa-solid fa-star"
    },
    {
        texto: "Me interesa",
        puntuacion: 2,
        icono: "fa-solid fa-seedling"
    },
    {
        texto: "Me interesa poco",
        puntuacion: 1,
        icono: "fa-regular fa-compass"
    },
    {
        texto: "No me interesa por ahora",
        puntuacion: 0,
        icono: "fa-solid fa-minus"
    }
];


/* ================================================================
   04. DESCRIPCIONES DE LAS ÁREAS
================================================================ */

const informacionAreas = {
    vida: {
        titulo: "Biología y ciencias de la salud",
        icono: "fa-solid fa-leaf",
        descripcion:
            "Podrías explorar cómo funcionan los organismos, la biodiversidad, el cuerpo humano y los procesos relacionados con la vida."
    },

    materia: {
        titulo: "Química y estudio de los materiales",
        icono: "fa-solid fa-flask",
        descripcion:
            "Podrías explorar las propiedades de la materia, las sustancias, sus cambios y las reacciones químicas."
    },

    fisica: {
        titulo: "Física y razonamiento",
        icono: "fa-solid fa-atom",
        descripcion:
            "Podrías profundizar en la energía, el movimiento, las fuerzas y la explicación de los fenómenos naturales."
    },

    investigacion: {
        titulo: "Investigación científica",
        icono: "fa-solid fa-microscope",
        descripcion:
            "Podrías disfrutar la observación, los experimentos, la búsqueda de evidencias y la interpretación de resultados."
    },

    ambiente: {
        titulo: "Ciencias ambientales y de la Tierra",
        icono: "fa-solid fa-seedling",
        descripcion:
            "Podrías explorar los ecosistemas, la biodiversidad, el clima y las formas de comprender y cuidar el entorno."
    }
};


/* ================================================================
   05. ESTADO DEL TEST
================================================================ */

let indiceActual = 0;

/*
   Cada posición contiene:
   null, si todavía no ha sido respondida, o
   { puntuacion: número, area: identificador }
*/

let respuestas = Array(preguntas.length).fill(null);

let testIniciado = false;


/* ================================================================
   06. INICIO DEL TEST
================================================================ */

function comenzarTest() {
    testIniciado = true;

    indiceActual = 0;
    respuestas = Array(preguntas.length).fill(null);

    pantallaInicio.classList.add("oculto");
    panelResultados.classList.add("oculto");
    panelPreguntas.classList.remove("oculto");

    renderizarPregunta();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================================================
   07. MOSTRAR UNA PREGUNTA
================================================================ */

function renderizarPregunta() {
    const pregunta = preguntas[indiceActual];
    const respuestaActual = respuestas[indiceActual];

    const numeroVisible = indiceActual + 1;

    contadorPregunta.textContent =
        `Pregunta ${numeroVisible} de ${preguntas.length}`;

    numeroGrande.textContent = String(numeroVisible).padStart(2, "0");

    categoriaPregunta.textContent = pregunta.categoria;

    tituloPregunta.textContent = pregunta.titulo;
    ayudaPregunta.textContent = pregunta.ayuda;

    /*
       El progreso refleja las preguntas ya respondidas.
       En el resultado final llegará al 100 %.
    */

    const preguntasRespondidas = respuestas.filter(
        respuesta => respuesta !== null
    ).length;

    const progreso = Math.round(
        (preguntasRespondidas / preguntas.length) * 100
    );

    porcentajeProgreso.textContent = `${progreso}%`;

    rellenoProgreso.style.width = `${progreso}%`;

    contenedorBarraProgreso.setAttribute(
        "aria-valuenow",
        String(progreso)
    );

    /*
       Crear las cuatro opciones.
    */

    opcionesRespuesta.innerHTML = "";

    opciones.forEach((opcion, indiceOpcion) => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "opcion-respuesta";

        const estaSeleccionada =
            respuestaActual !== null &&
            respuestaActual.puntuacion === opcion.puntuacion;

        if (estaSeleccionada) {
            boton.classList.add("seleccionada");
        }

        boton.setAttribute(
            "aria-pressed",
            estaSeleccionada ? "true" : "false"
        );

        boton.innerHTML = `
            <span class="icono-opcion" aria-hidden="true">
                <i class="${opcion.icono}"></i>
            </span>

            <span class="texto-opcion">
                ${opcion.texto}
            </span>

            <span class="marca-opcion" aria-hidden="true">
                <i class="fa-solid fa-check"></i>
            </span>
        `;

        boton.addEventListener("click", () => {
            seleccionarRespuesta(opcion, boton);
        });

        opcionesRespuesta.appendChild(boton);
    });

    /*
       Gestionar los botones de navegación.
    */

    botonAnterior.disabled = false;
    botonAnterior.style.visibility =
        indiceActual === 0 ? "hidden" : "visible";

    const esUltimaPregunta =
        indiceActual === preguntas.length - 1;

    textoBotonSiguiente.textContent =
        esUltimaPregunta ? "Ver resultados" : "Siguiente";

    botonSiguiente.innerHTML = `
        <span id="texto-boton-siguiente">
            ${esUltimaPregunta ? "Ver resultados" : "Siguiente"}
        </span>

        <i class="fa-solid ${
            esUltimaPregunta ? "fa-chart-simple" : "fa-arrow-right"
        }" aria-hidden="true"></i>
    `;

    botonSiguiente.disabled = respuestaActual === null;

    actualizarAviso(respuestaActual);

    /*
       Reiniciar la animación visual al cambiar de pregunta.
    */

    tarjetaPreguntaAnimar();

    /*
       Enfocar el título tras cambiar de pregunta.
       No se desplaza toda la página automáticamente.
    */

    tituloPregunta.setAttribute("tabindex", "-1");
}


/* ================================================================
   08. ANIMACIÓN DE LA TARJETA
================================================================ */

function tarjetaPreguntaAnimar() {
    const tarjeta = document.getElementById("tarjeta-pregunta");

    tarjeta.classList.remove("animar-pregunta");

    /*
       Forzar un nuevo ciclo de animación.
    */

    void tarjeta.offsetWidth;

    tarjeta.classList.add("animar-pregunta");
}


/* ================================================================
   09. SELECCIÓN DE RESPUESTA
================================================================ */

function seleccionarRespuesta(opcionSeleccionada, botonSeleccionado) {
    const pregunta = preguntas[indiceActual];

    respuestas[indiceActual] = {
        puntuacion: opcionSeleccionada.puntuacion,
        area: pregunta.area
    };

    /*
       Actualizar el diseño de las opciones seleccionadas.
    */

    const todosLosBotones = opcionesRespuesta.querySelectorAll(
        ".opcion-respuesta"
    );

    todosLosBotones.forEach(boton => {
        boton.classList.remove("seleccionada");
        boton.setAttribute("aria-pressed", "false");
    });

    botonSeleccionado.classList.add("seleccionada");

    botonSeleccionado.setAttribute("aria-pressed", "true");

    botonSiguiente.disabled = false;

    actualizarAviso(respuestas[indiceActual]);

    /*
       Refrescar el progreso después de responder.
    */

    const preguntasRespondidas = respuestas.filter(
        respuesta => respuesta !== null
    ).length;

    const progreso = Math.round(
        (preguntasRespondidas / preguntas.length) * 100
    );

    porcentajeProgreso.textContent = `${progreso}%`;

    rellenoProgreso.style.width = `${progreso}%`;

    contenedorBarraProgreso.setAttribute(
        "aria-valuenow",
        String(progreso)
    );
}


/* ================================================================
   10. MENSAJE DE SELECCIÓN
================================================================ */

function actualizarAviso(respuesta) {
    if (respuesta === null) {
        avisoSeleccion.innerHTML = `
            <i class="fa-regular fa-circle-check" aria-hidden="true"></i>
            Selecciona una respuesta para continuar.
        `;

        return;
    }

    avisoSeleccion.innerHTML = `
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        Respuesta seleccionada. Puedes continuar o cambiarla.
    `;
}


/* ================================================================
   11. CAMBIAR DE PREGUNTA
================================================================ */

function irSiguiente() {
    if (respuestas[indiceActual] === null) {
        return;
    }

    if (indiceActual < preguntas.length - 1) {
        indiceActual += 1;

        renderizarPregunta();

        return;
    }

    mostrarResultados();
}


function irAnterior() {
    if (indiceActual <= 0) {
        return;
    }

    indiceActual -= 1;

    renderizarPregunta();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================================================
   12. CALCULAR EL RESULTADO GENERAL
================================================================ */

function calcularPuntuacion() {
    return respuestas.reduce((total, respuesta) => {
        if (respuesta === null) {
            return total;
        }

        return total + respuesta.puntuacion;
    }, 0);
}


function obtenerPorcentajeAfinidad(puntuacion) {
    const puntuacionMaxima = preguntas.length * 3;

    return Math.round(
        (puntuacion / puntuacionMaxima) * 100
    );
}


/* ================================================================
   13. CALCULAR PREFERENCIAS POR ÁREA
================================================================ */

function calcularAreas() {
    const areas = {
        vida: {
            total: 0,
            cantidad: 0
        },

        materia: {
            total: 0,
            cantidad: 0
        },

        fisica: {
            total: 0,
            cantidad: 0
        },

        investigacion: {
            total: 0,
            cantidad: 0
        },

        ambiente: {
            total: 0,
            cantidad: 0
        }
    };

    respuestas.forEach(respuesta => {
        if (respuesta === null) {
            return;
        }

        const area = areas[respuesta.area];

        area.total += respuesta.puntuacion;
        area.cantidad += 1;
    });

    /*
       Usar el promedio permite comparar áreas con el mismo peso.
    */

    return Object.entries(areas)
        .map(([clave, datos]) => {
            const promedio = datos.cantidad > 0
                ? datos.total / datos.cantidad
                : 0;

            return {
                clave,
                promedio,
                porcentaje: Math.round((promedio / 3) * 100),
                ...informacionAreas[clave]
            };
        })
        .sort((a, b) => b.promedio - a.promedio);
}


/* ================================================================
   14. TEXTOS SEGÚN EL RESULTADO
================================================================ */

function obtenerNivel(porcentaje) {
    if (porcentaje >= 75) {
        return {
            etiqueta: "ALTO INTERÉS CIENTÍFICO",

            titulo: "Tu curiosidad científica destaca.",

            descripcion:
                "Tus respuestas muestran un interés elevado por las actividades y los temas relacionados con las ciencias. Podrías disfrutar explorando diferentes áreas científicas, realizando investigaciones y aprendiendo cómo se explican los fenómenos naturales."
        };
    }

    if (porcentaje >= 43) {
        return {
            etiqueta: "INTERÉS CIENTÍFICO EN EXPLORACIÓN",

            titulo: "Hay áreas científicas que podrían interesarte.",

            descripcion:
                "Tus respuestas reflejan un interés variable por los temas científicos. Explorar experimentos, actividades prácticas y diferentes ramas de las ciencias puede ayudarte a reconocer qué contenidos despiertan más tu curiosidad."
        };
    }

    return {
        etiqueta: "ETAPA DE DESCUBRIMIENTO",

        titulo: "Todavía puedes descubrir nuevos intereses.",

        descripcion:
            "Tus respuestas indican que, por ahora, varios de los temas planteados no llaman mucho tu atención. Eso no significa que no puedas aprender ciencias. Puedes comenzar por cuestiones cotidianas, actividades visuales o temas que ya te generen curiosidad."
    };
}


/* ================================================================
   15. MOSTRAR RESULTADOS
================================================================ */

function mostrarResultados() {
    /*
       No mostrar resultados si queda alguna pregunta sin responder.
    */

    const incompletas = respuestas.some(
        respuesta => respuesta === null
    );

    if (incompletas) {
        return;
    }

    panelPreguntas.classList.add("oculto");
    pantallaInicio.classList.add("oculto");
    panelResultados.classList.remove("oculto");

    const puntuacion = calcularPuntuacion();
    const porcentaje = obtenerPorcentajeAfinidad(puntuacion);

    const nivel = obtenerNivel(porcentaje);
    const areas = calcularAreas();

    /*
       Resultado general.
    */

    tituloResultado.textContent = "Tus intereses científicos";

    descripcionResultado.textContent =
        "Este resultado resume el interés que expresaste en el test. " +
        "Utilízalo como punto de partida para conocer las diferentes " +
        "áreas de las ciencias.";

    nivelResultado.textContent = nivel.etiqueta;

    subtituloResultado.textContent = nivel.titulo;

    detalleResultado.textContent =
        `${nivel.descripcion} Este test es orientativo y no evalúa ` +
        `tu inteligencia, tus conocimientos ni tu capacidad para ` +
        `estudiar una especialidad.`;

    puntuacionResultado.textContent = `${porcentaje}%`;

    /*
       Construir el círculo del porcentaje.
    */

    const grados = (porcentaje / 100) * 360;

    circuloResultado.style.background = `
        conic-gradient(
            var(--esmeralda) 0deg,
            var(--esmeralda) ${grados}deg,
            rgba(32, 86, 66, 0.09) ${grados}deg,
            rgba(32, 86, 66, 0.09) 360deg
        )
    `;

    /*
       Construir las tarjetas de preferencias.
    */

    listaAreas.innerHTML = "";

    areas.forEach((area, indice) => {
        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta-area-resultado";

        if (indice === 0) {
            tarjeta.classList.add("especial");
        }

        const insignia = indice === 0
            ? `<span class="etiqueta-preferencia">MAYOR INTERÉS</span>`
            : "";

        tarjeta.innerHTML = `
            <div class="icono-area-resultado" aria-hidden="true">
                <i class="${area.icono}"></i>
            </div>

            <div class="contenido-area-resultado">

                <div class="fila-titulo-area">
                    <h3>${area.titulo}</h3>
                    ${insignia}
                </div>

                <p class="texto-area-resultado">
                    ${area.descripcion}
                </p>

                <div
                    class="fondo-barra-area"
                    role="progressbar"
                    aria-label="Interés declarado en ${area.titulo}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="${area.porcentaje}"
                >
                    <div
                        class="relleno-barra-area"
                        style="width: ${area.porcentaje}%"
                    ></div>
                </div>

            </div>
        `;

        listaAreas.appendChild(tarjeta);
    });

    /*
       Mostrar el progreso completo.
    */

    porcentajeProgreso.textContent = "100%";
    rellenoProgreso.style.width = "100%";

    contenedorBarraProgreso.setAttribute(
        "aria-valuenow",
        "100"
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================================================
   16. REPETIR EL TEST
================================================================ */

function repetirTest() {
    respuestas = Array(preguntas.length).fill(null);

    indiceActual = 0;
    testIniciado = false;

    panelResultados.classList.add("oculto");
    panelPreguntas.classList.add("oculto");
    pantallaInicio.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================================================
   17. EVENTOS
================================================================ */

botonComenzar.addEventListener("click", comenzarTest);

botonAnterior.addEventListener("click", irAnterior);

botonSiguiente.addEventListener("click", irSiguiente);

botonRepetir.addEventListener("click", repetirTest);


/* ================================================================
   18. AÑO DEL PIE DE PÁGINA
================================================================ */

if (anioTest) {
    anioTest.textContent = new Date().getFullYear();
}