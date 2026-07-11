// ===============================
// VOZDEFEAPP - APP.JS
// ===============================

// MENÚ
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.style.display =
            menu.style.display === "flex" ? "none" : "flex";
    });
}


// CHAT BÍBLICO
const enviarBtn = document.getElementById("send-btn");
const pregunta = document.getElementById("user-input");
const respuesta = document.getElementById("chat-box");
    enviarBtn.addEventListener("click", () => {

        const texto = pregunta.value.toLowerCase();

        if (texto.includes("moisés")) {

            respuesta.innerHTML =
            "📖 Moisés fue escogido por Dios para liberar a Israel. Puedes leer Éxodo 3.";

        } else if (texto.includes("jesús")) {

            respuesta.innerHTML =
            "✝️ Jesús es el camino, la verdad y la vida. Juan 14:6.";

        } else if (texto.includes("noé")) {

            respuesta.innerHTML =
            "🌈 Noé obedeció a Dios y construyó el arca por fe. Génesis 6.";

        } else if (texto.includes("fe")) {

            respuesta.innerHTML =
            "🙏 La fe es la certeza de lo que se espera y la convicción de lo que no se ve. Hebreos 11:1.";

        } else {

            respuesta.innerHTML =
            "📖 Gracias por tu pregunta. Continúa aprendiendo la Palabra de Dios.";

        }

    });

}


// NAVEGACIÓN
function mostrarSeccion(seccion){

    const elemento = document.getElementById(seccion);

    if(elemento){

        elemento.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        alert("Esta sección estará disponible próximamente.");

    }

}


console.log("VozDeFeApp funcionando");
