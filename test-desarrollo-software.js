/* =========================================
   TEST VOCACIONAL - DESARROLLO DE SOFTWARE
   Cuestionario, puntuación e intereses
   Unidad Educativa Fiscal Dolores Sucre
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // 1. ELEMENTOS HTML
    // =====================================

    const bienvenida = document.getElementById("bienvenida");
    const pantallaPreguntas = document.getElementById("pantalla-preguntas");
    const pantallaResultados = document.getElementById("pantalla-resultados");

    const botonComenzar = document.getElementById("comenzar");
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");
    const botonRepetir = document.getElementById("repetir");

    const numeroPregunta = document.getElementById("numero-pregunta");
    const textoProgreso = document.getElementById("texto-progreso");
    const barraProgreso = document.getElementById("barra-progreso");
    const progresoActual = document.getElementById("progreso-actual");

    const categoriaPregunta = document.getElementById("categoria-pregunta");
    const textoPregunta = document.getElementById("texto-pregunta");
    const opcionesContenedor = document.getElementById("opciones");
    const tarjetaPregunta = document.querySelector(".tarjeta-pregunta");
    const mensajeError = document.getElementById("mensaje-error");

    const puntuacion = document.getElementById("puntuacion");
    const barraResultado = document.getElementById("barra-resultado");
    const progresoResultado = document.getElementById("progreso-resultado");
    const tituloResultado = document.getElementById("titulo-resultado");
    const descripcionPerfil = document.getElementById("descripcion-perfil");
    const listaRecomendaciones = document.getElementById("lista-recomendaciones");

    // Nuevos elementos de la sección de intereses
    const listaIntereses = document.getElementById("lista-intereses");
    const textoIntereses = document.getElementById("texto-intereses");


    // =====================================
    // 2. PREGUNTAS DEL TEST
    // =====================================

    const preguntas = [

        {
            categoria: "LÓGICA Y RAZONAMIENTO",
            pregunta: "¿Cómo te sientes al resolver un problema que requiere pensar paso a paso?",
            opciones: [
                {
                    texto: "Me gusta analizarlo y encontrar una solución.",
                    valor: 3
                },
                {
                    texto: "Lo intento, aunque a veces necesito orientación.",
                    valor: 2
                },
                {
                    texto: "Prefiero actividades que no requieran tanto razonamiento.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "TECNOLOGÍA",
            pregunta: "Cuando utilizas una aplicación o un videojuego, ¿te da curiosidad saber cómo funciona?",
            opciones: [
                {
                    texto: "Sí, me interesa descubrir cómo está hecho.",
                    valor: 3
                },
                {
                    texto: "A veces me pregunto cómo funciona.",
                    valor: 2
                },
                {
                    texto: "Me interesa más utilizarlo que conocer su funcionamiento.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "CREATIVIDAD",
            pregunta: "¿Qué te parecería crear una página web con tus propias ideas?",
            opciones: [
                {
                    texto: "Me entusiasma diseñarla y probar diferentes ideas.",
                    valor: 3
                },
                {
                    texto: "Me gustaría intentarlo para aprender.",
                    valor: 2
                },
                {
                    texto: "Por ahora prefiero otras actividades.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "RESOLUCIÓN DE PROBLEMAS",
            pregunta: "Si un programa no funciona como esperabas, ¿qué harías?",
            opciones: [
                {
                    texto: "Buscaría el error e intentaría solucionarlo.",
                    valor: 3
                },
                {
                    texto: "Pediría ayuda y trataría de entender la solución.",
                    valor: 2
                },
                {
                    texto: "Me resultaría difícil mantener el interés en el problema.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "APRENDIZAJE",
            pregunta: "¿Cómo te sentirías aprendiendo un lenguaje de programación desde cero?",
            opciones: [
                {
                    texto: "Con ganas de practicar y descubrir qué puedo crear.",
                    valor: 3
                },
                {
                    texto: "Con curiosidad, aunque necesitaría acompañamiento.",
                    valor: 2
                },
                {
                    texto: "No es algo que me interese mucho actualmente.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "ATENCIÓN AL DETALLE",
            pregunta: "Cuando realizas una tarea, ¿cómo te llevas con revisar los detalles para encontrar errores?",
            opciones: [
                {
                    texto: "Me gusta revisar y corregir lo que haga falta.",
                    valor: 3
                },
                {
                    texto: "Lo hago cuando es necesario, aunque me cuesta un poco.",
                    valor: 2
                },
                {
                    texto: "Prefiero tareas en las que no tenga que revisar tantos detalles.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "TRABAJO EN EQUIPO",
            pregunta: "¿Qué opinas de colaborar con otras personas para crear una aplicación o un sitio web?",
            opciones: [
                {
                    texto: "Me gusta compartir ideas y construir algo en equipo.",
                    valor: 3
                },
                {
                    texto: "Podría hacerlo si nos organizamos bien.",
                    valor: 2
                },
                {
                    texto: "Prefiero realizar otro tipo de actividades.",
                    valor: 1
                }
            ]
        },

        {
            categoria: "INTERESES PERSONALES",
            pregunta: "¿Qué tan interesado estarías en crear herramientas digitales que ayuden a resolver necesidades reales?",
            opciones: [
                {
                    texto: "Mucho; me gustaría crear soluciones útiles.",
                    valor: 3
                },
                {
                    texto: "Me interesaría conocer más sobre esa posibilidad.",
                    valor: 2
                },
                {
                    texto: "Por ahora no es un tema que me llame la atención.",
                    valor: 1
                }
            ]
        }

    ];


    // =====================================
    // 3. DATOS DE LOS RECUADROS DE INTERÉS
    // =====================================

    // Cada recuadro corresponde a una pregunta.
    // El orden numérico coincide con el orden de las preguntas.

    const categoriasInteres = [

        {
            nombre: "Lógica y razonamiento",
            icono: "💡",
            descripcion:
                "Analizar situaciones, reconocer patrones y encontrar soluciones paso a paso."
        },

        {
            nombre: "Curiosidad tecnológica",
            icono: "💻",
            descripcion:
                "Descubrir cómo funcionan las aplicaciones, los videojuegos y otras tecnologías."
        },

        {
            nombre: "Diseño y creatividad",
            icono: "🎨",
            descripcion:
                "Imaginar páginas web, organizar sus elementos y convertir ideas en diseños digitales."
        },

        {
            nombre: "Resolución de problemas",
            icono: "🧩",
            descripcion:
                "Investigar errores, comprender qué sucede e intentar encontrar una solución."
        },

        {
            nombre: "Aprendizaje de programación",
            icono: "⌨️",
            descripcion:
                "Aprender lenguajes de programación y experimentar con pequeños proyectos."
        },

        {
            nombre: "Atención al detalle",
            icono: "🔎",
            descripcion:
                "Revisar el código, detectar errores y mejorar los detalles de un proyecto."
        },

        {
            nombre: "Trabajo en equipo",
            icono: "🤝",
            descripcion:
                "Compartir ideas, organizar tareas y colaborar en la creación de proyectos digitales."
        },

        {
            nombre: "Creación de soluciones digitales",
            icono: "🌐",
            descripcion:
                "Desarrollar sitios web o aplicaciones que respondan a necesidades reales."
        }

    ];


    // =====================================
    // 4. ESTADO DEL TEST
    // =====================================

    let preguntaActual = 0;
    let respuestas = new Array(preguntas.length).fill(null);


    // =====================================
    // 5. MOSTRAR UNA PANTALLA
    // =====================================

    function mostrarPantalla(pantalla) {

        bienvenida.hidden = true;
        pantallaPreguntas.hidden = true;
        pantallaResultados.hidden = true;

        pantalla.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // =====================================
    // 6. COMENZAR EL TEST
    // =====================================

    function comenzarTest() {

        preguntaActual = 0;
        respuestas = new Array(preguntas.length).fill(null);

        mostrarPantalla(pantallaPreguntas);
        mostrarPregunta();
    }


    // =====================================
    // 7. MOSTRAR LA PREGUNTA ACTUAL
    // =====================================

    function mostrarPregunta() {

        const pregunta = preguntas[preguntaActual];

        const numeroVisible = String(preguntaActual + 1).padStart(2, "0");
        const totalVisible = String(preguntas.length).padStart(2, "0");

        numeroPregunta.textContent =
            `${numeroVisible} / ${totalVisible}`;

        categoriaPregunta.textContent = pregunta.categoria;
        textoPregunta.textContent = pregunta.pregunta;

        opcionesContenedor.replaceChildren();
        mensajeError.hidden = true;

        pregunta.opciones.forEach((opcion, indice) => {

            const boton = document.createElement("button");

            boton.type = "button";
            boton.className = "opcion";

            const seleccionada = respuestas[preguntaActual] === indice;

            boton.setAttribute(
                "aria-pressed",
                seleccionada ? "true" : "false"
            );

            const marcador = document.createElement("span");

            marcador.className = "marcador-opcion";
            marcador.setAttribute("aria-hidden", "true");
            marcador.textContent = seleccionada
                ? "✓"
                : String.fromCharCode(65 + indice);

            const texto = document.createElement("span");

            texto.className = "texto-opcion";
            texto.textContent = opcion.texto;

            boton.append(marcador, texto);

            if (seleccionada) {
                boton.classList.add("seleccionada");
            }

            boton.addEventListener("click", () => {
                seleccionarOpcion(indice);
            });

            opcionesContenedor.appendChild(boton);

        });

        actualizarProgreso();

        // Reiniciar la animación de la tarjeta
        tarjetaPregunta.classList.remove("animar-pregunta");
        void tarjetaPregunta.offsetWidth;
        tarjetaPregunta.classList.add("animar-pregunta");

        // Facilitar la navegación con teclado
        textoPregunta.setAttribute("tabindex", "-1");
        textoPregunta.focus({ preventScroll: true });

        botonAnterior.disabled = preguntaActual === 0;

        if (preguntaActual === preguntas.length - 1) {
            botonSiguiente.innerHTML =
                'Ver resultado <span aria-hidden="true">→</span>';
        } else {
            botonSiguiente.innerHTML =
                'Siguiente <span aria-hidden="true">→</span>';
        }
    }


    // =====================================
    // 8. SELECCIONAR UNA RESPUESTA
    // =====================================

    function seleccionarOpcion(indice) {

        respuestas[preguntaActual] = indice;
        mensajeError.hidden = true;

        const botones = opcionesContenedor.querySelectorAll(".opcion");

        botones.forEach((boton, posicion) => {

            const seleccionada = posicion === indice;

            boton.classList.toggle("seleccionada", seleccionada);

            boton.setAttribute(
                "aria-pressed",
                seleccionada ? "true" : "false"
            );

            const marcador = boton.querySelector(".marcador-opcion");

            marcador.textContent = seleccionada
                ? "✓"
                : String.fromCharCode(65 + posicion);

        });
    }


    // =====================================
    // 9. ACTUALIZAR EL PROGRESO
    // =====================================

    function actualizarProgreso() {

        const porcentaje = Math.round(
            ((preguntaActual + 1) / preguntas.length) * 100
        );

        progresoActual.style.width = `${porcentaje}%`;
        textoProgreso.textContent = `${porcentaje}% completado`;

        barraProgreso.setAttribute("aria-valuenow", porcentaje);
    }


    // =====================================
    // 10. SIGUIENTE PREGUNTA
    // =====================================

    function siguientePregunta() {

        if (respuestas[preguntaActual] === null) {
            mensajeError.hidden = false;
            return;
        }

        if (preguntaActual < preguntas.length - 1) {

            preguntaActual++;
            mostrarPregunta();

        } else {

            mostrarResultados();

        }
    }


    // =====================================
    // 11. PREGUNTA ANTERIOR
    // =====================================

    function anteriorPregunta() {

        if (preguntaActual > 0) {
            preguntaActual--;
            mostrarPregunta();
        }
    }


    // =====================================
    // 12. CALCULAR LA PUNTUACIÓN GENERAL
    // =====================================

    function calcularPuntuacion() {

        const suma = respuestas.reduce((total, indice, posicion) => {

            return total + preguntas[posicion].opciones[indice].valor;

        }, 0);

        const minimo = preguntas.length;
        const maximo = preguntas.length * 3;

        return Math.round(
            ((suma - minimo) / (maximo - minimo)) * 100
        );
    }


    // =====================================
    // 13. CALCULAR EL INTERÉS POR CATEGORÍA
    // =====================================

    function calcularIntereses() {

        return categoriasInteres.map((categoria, indice) => {

            const respuestaSeleccionada = respuestas[indice];

            // Obtener el valor de la respuesta elegida.
            const valor = preguntas[indice]
                .opciones[respuestaSeleccionada]
                .valor;

            // Convertir:
            // Valor 1 = 0 %
            // Valor 2 = 50 %
            // Valor 3 = 100 %

            const porcentaje = Math.round(
                ((valor - 1) / 2) * 100
            );

            let nivel;

            if (porcentaje === 100) {
                nivel = "alto";
            } else if (porcentaje === 50) {
                nivel = "moderado";
            } else {
                nivel = "bajo";
            }

            return {
                ...categoria,
                indice,
                porcentaje,
                nivel
            };
        }).sort((a, b) => {

            // Ordenar de mayor a menor porcentaje.
            // Si hay empate, conservar el orden de las preguntas.

            return b.porcentaje - a.porcentaje ||
                   a.indice - b.indice;

        });
    }


    // =====================================
    // 14. CREAR UN RECUADRO DE INTERÉS
    // =====================================

    function crearTarjetaInteres(interes, porcentajeMaximo, posicion) {

        const tarjeta = document.createElement("article");

        tarjeta.className = `tarjeta-interes nivel-${interes.nivel}`;
        tarjeta.style.animationDelay = `${posicion * 65}ms`;

        const esDestacado =
            interes.porcentaje === porcentajeMaximo &&
            porcentajeMaximo > 0;

        if (esDestacado) {
            tarjeta.classList.add("destacado");
        }

        // Cabecera
        const cabecera = document.createElement("div");
        cabecera.className = "cabecera-interes";

        const icono = document.createElement("span");
        icono.className = "icono-interes";
        icono.textContent = interes.icono;
        icono.setAttribute("aria-hidden", "true");

        const contenedorTitulo = document.createElement("div");
        contenedorTitulo.className = "titulo-interes-contenedor";

        const titulo = document.createElement("h3");
        titulo.className = "titulo-interes";
        titulo.textContent = interes.nombre;

        contenedorTitulo.appendChild(titulo);

        // Etiqueta para los intereses más altos
        if (esDestacado) {

            const etiqueta = document.createElement("span");

            etiqueta.className = "etiqueta-destacado";
            etiqueta.textContent = "★ INTERÉS DESTACADO";

            contenedorTitulo.appendChild(etiqueta);
        }

        cabecera.append(icono, contenedorTitulo);

        // Descripción de la categoría
        const descripcion = document.createElement("p");

        descripcion.className = "descripcion-interes";
        descripcion.textContent = interes.descripcion;

        // Nivel de interés y porcentaje
        const datos = document.createElement("div");
        datos.className = "datos-interes";

        const nivel = document.createElement("span");
        nivel.className = "nivel-interes";

        if (interes.porcentaje === 100) {
            nivel.textContent = "Interés alto";
        } else if (interes.porcentaje === 50) {
            nivel.textContent = "Interés moderado";
        } else {
            nivel.textContent = "Interés bajo por ahora";
        }

        const porcentaje = document.createElement("strong");

        porcentaje.className = "porcentaje-interes";
        porcentaje.textContent = `${interes.porcentaje}%`;

        datos.append(nivel, porcentaje);

        // Barra visual
        const barra = document.createElement("div");

        barra.className = "barra-interes";
        barra.setAttribute("role", "progressbar");
        barra.setAttribute(
            "aria-label",
            `Afinidad expresada con ${interes.nombre}`
        );
        barra.setAttribute("aria-valuemin", "0");
        barra.setAttribute("aria-valuemax", "100");
        barra.setAttribute("aria-valuenow", interes.porcentaje);

        const progreso = document.createElement("div");

        progreso.className = "progreso-interes";
        progreso.style.width = "0%";

        barra.appendChild(progreso);

        tarjeta.append(
            cabecera,
            descripcion,
            datos,
            barra
        );

        // Animar la barra una vez insertada la tarjeta
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                progreso.style.width = `${interes.porcentaje}%`;
            });
        });

        return tarjeta;
    }


    // =====================================
    // 15. MOSTRAR TODOS LOS RECUADROS
    // =====================================

    function mostrarIntereses() {

        const intereses = calcularIntereses();

        listaIntereses.replaceChildren();

        const porcentajeMaximo = Math.max(
            ...intereses.map(interes => interes.porcentaje)
        );

        intereses.forEach((interes, posicion) => {

            const tarjeta = crearTarjetaInteres(
                interes,
                porcentajeMaximo,
                posicion
            );

            listaIntereses.appendChild(tarjeta);
        });

        mostrarResumenIntereses(intereses, porcentajeMaximo);
    }


    // =====================================
    // 16. RESUMEN DE LOS INTERESES
    // =====================================

    function mostrarResumenIntereses(intereses, porcentajeMaximo) {

        textoIntereses.replaceChildren();

        const parrafo = document.createElement("p");
        parrafo.style.margin = "0";

        // Caso 1: todos los intereses aparecen bajos
        if (porcentajeMaximo === 0) {

            const mensaje = document.createElement("strong");
            mensaje.textContent = "Tus preferencias están por descubrir. ";

            parrafo.append(
                mensaje,
                document.createTextNode(
                    "Tus respuestas indican que, por ahora, estas actividades " +
                    "no son tus principales intereses. Puedes explorarlas " +
                    "sin presión y descubrir si alguna despierta tu curiosidad."
                )
            );

            textoIntereses.appendChild(parrafo);
            return;
        }

        // Identificar todas las categorías con el porcentaje más alto
        const destacados = intereses.filter(
            interes => interes.porcentaje === porcentajeMaximo
        );

        const nombres = destacados.map(interes => interes.nombre);

        const mensaje = document.createElement("strong");

        if (nombres.length === 1) {
            mensaje.textContent =
                `La parte que más te interesó es ${nombres[0]}. `;
        } else {
            mensaje.textContent =
                `Tus partes más destacadas son ${nombres.join(", ")}. `;
        }

        let explicacion;

        if (porcentajeMaximo === 100) {

            explicacion =
                "Tus respuestas reflejan un interés alto en " +
                (nombres.length === 1
                    ? "esta actividad. "
                    : "estas actividades. ") +
                "Podrías probar un proyecto sencillo relacionado con ellas.";

        } else {

            explicacion =
                "Tus respuestas reflejan curiosidad inicial por " +
                (nombres.length === 1
                    ? "esta actividad. "
                    : "estas actividades. ") +
                "Experimentar con ejemplos sencillos puede ayudarte a " +
                "descubrir si deseas conocerlas mejor.";
        }

        parrafo.append(
            mensaje,
            document.createTextNode(explicacion)
        );

        textoIntereses.appendChild(parrafo);
    }


    // =====================================
    // 17. MOSTRAR RECOMENDACIONES
    // =====================================

    function mostrarRecomendaciones(recomendaciones) {

        listaRecomendaciones.replaceChildren();

        recomendaciones.forEach(recomendacion => {

            const elemento = document.createElement("li");

            elemento.textContent = recomendacion;
            listaRecomendaciones.appendChild(elemento);
        });
    }


    // =====================================
    // 18. MOSTRAR EL RESULTADO GENERAL
    // =====================================

    function mostrarResultados() {

        const resultado = calcularPuntuacion();

        puntuacion.textContent = resultado;

        progresoResultado.style.width = `${resultado}%`;

        barraResultado.setAttribute(
            "aria-valuenow",
            resultado
        );

        let titulo;
        let descripcion;
        let recomendaciones;

        if (resultado >= 70) {

            titulo = "Tus intereses conectan con el área";

            descripcion =
                "Tus respuestas muestran interés por varias actividades " +
                "relacionadas con el Desarrollo de Software. Podría ser " +
                "interesante que explores la programación, la creación " +
                "de páginas web y la resolución de problemas digitales.";

            recomendaciones = [
                "Prueba crear una página web sencilla con HTML y CSS.",
                "Explora ejercicios básicos de lógica y programación.",
                "Participa en pequeños proyectos tecnológicos, por tu cuenta o en equipo."
            ];

        } else if (resultado >= 40) {

            titulo = "Hay intereses que puedes seguir explorando";

            descripcion =
                "Tus respuestas muestran curiosidad o preferencias " +
                "parciales por algunas actividades del área. No necesitas " +
                "tener experiencia previa: puedes explorar la programación " +
                "con ejercicios sencillos y descubrir qué te gusta.";

            recomendaciones = [
                "Conoce cómo se construye una página web.",
                "Prueba un ejercicio sencillo de programación para principiantes.",
                "Identifica qué actividades tecnológicas te resultan más interesantes."
            ];

        } else {

            titulo = "Es una oportunidad para descubrir tus preferencias";

            descripcion =
                "Tus respuestas indican que, actualmente, otras actividades " +
                "podrían llamar más tu atención. Esto no significa que no " +
                "puedas aprender programación ni que esta especialización " +
                "no sea para ti. Puedes conocerla antes de tomar una decisión.";

            recomendaciones = [
                "Explora ejemplos de aplicaciones y páginas web.",
                "Conoce las asignaturas y actividades de la especialización.",
                "Habla con docentes o estudiantes para conocer cómo es el área."
            ];
        }

        tituloResultado.textContent = titulo;
        descripcionPerfil.textContent = descripcion;

        mostrarRecomendaciones(recomendaciones);

        // Generar los ocho recuadros antes de mostrar la pantalla
        mostrarIntereses();

        mostrarPantalla(pantallaResultados);
    }


    // =====================================
    // 19. REPETIR EL TEST
    // =====================================

    function repetirTest() {

        preguntaActual = 0;
        respuestas = new Array(preguntas.length).fill(null);

        // Limpiar los resultados anteriores
        listaIntereses.replaceChildren();
        textoIntereses.replaceChildren();

        mostrarPantalla(bienvenida);
    }


    // =====================================
    // 20. EVENTOS DE LOS BOTONES
    // =====================================

    botonComenzar.addEventListener("click", comenzarTest);

    botonSiguiente.addEventListener("click", siguientePregunta);

    botonAnterior.addEventListener("click", anteriorPregunta);

    botonRepetir.addEventListener("click", repetirTest);

});