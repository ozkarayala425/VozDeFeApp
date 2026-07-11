the// ===============================
// VOZDEFEAAP - APP.JS
// ===============================


// MENÚ

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if(menuBtn){

menuBtn.addEventListener("click", () => {

    if(menu.style.display === "none"){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }

});

}



// CHAT BÍBLICO

function sendMessage(){

let input = document.getElementById("user-input");
let question = input.value.trim();


if(question === ""){
    return;
}


let chatBox = document.getElementById("chat-box");


// Mensaje usuario

chatBox.innerHTML += `

<div class="user-message">

👤 ${question}

</div>

`;


// Respuesta

let answer = biblicalAnswer(question.toLowerCase());


chatBox.innerHTML += `

<div class="bot-message">

${answer}

</div>

`;


input.value="";

chatBox.scrollTop = chatBox.scrollHeight;

}



// BASE BÍBLICA

function biblicalAnswer(question){



if(question.includes("moises")){

return `

📖 <b>Moisés</b><br><br>

Dios llamó a Moisés para liberar al pueblo de Israel
de Egipto. Aunque tenía temor, el Señor le dio poder
para cumplir su misión.

<br><br>

📜 <b>Éxodo 3:10</b><br>

"Ven, por tanto, ahora, y te enviaré a Faraón..."

<br><br>

✨ <b>Reflexión:</b><br>

Dios puede usar personas comunes para realizar
grandes propósitos.

`;

}



if(question.includes("jesus") || question.includes("cristo")){

return `

✝️ <b>Jesucristo</b><br><br>

Jesús vino al mundo para enseñar el amor de Dios,
perdonar pecados y mostrar el camino de salvación.

<br><br>

📜 <b>Juan 14:6</b><br>

"Yo soy el camino, y la verdad, y la vida..."

<br><br>

✨ <b>Reflexión:</b><br>

Al acercarnos a Cristo encontramos esperanza y paz.

`;

}




if(question.includes("noe")){

return `

🌈 <b>Noé</b><br><br>

Noé obedeció a Dios y construyó el arca por fe,
aunque otros no entendían su misión.

<br><br>

📜 <b>Génesis 6:22</b><br>

"Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó."

<br><br>

✨ <b>Reflexión:</b><br>

La obediencia a Dios trae bendiciones.

`;

}




if(question.includes("fe")){

if(question.includes("dios") || question.includes("creador")){

return `

🙏 <b>Dios</b><br><br>

Dios es el Creador de los cielos y la tierra. Él es eterno,
amoroso y desea tener una relación con nosotros.

<br><br>

📜 <b>Génesis 1:1</b><br>

"En el principio creó Dios los cielos y la tierra."

<br><br>

✨ <b>Comentario bíblico:</b><br>

Reconocer a Dios como nuestro Creador nos ayuda a vivir
con propósito y confianza.

`;

}


if(question.includes("oracion") || question.includes("orar")){

return `

🙏 <b>La Oración</b><br><br>

La oración es una conversación con Dios. Por medio de ella
expresamos nuestra gratitud, necesidades y buscamos su guía.

<br><br>

📜 <b>Filipenses 4:6</b><br>

"Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios."

<br><br>

✨ <b>Comentario bíblico:</b><br>

Dios escucha a quienes se acercan a Él con un corazón sincero.

`;

}


if(question.includes("biblia") || question.includes("palabra de dios")){

return `

📖 <b>La Biblia</b><br><br>

La Biblia es la Palabra de Dios y contiene enseñanzas para
guiar nuestra vida.

<br><br>

📜 <b>2 Timoteo 3:16</b><br>

"Toda la Escritura es inspirada por Dios..."

<br><br>

✨ <b>Comentario bíblico:</b><br>

Leer la Biblia fortalece nuestra fe y nos acerca más a Dios.

`;

}

Todavía estoy creciendo en conocimiento bíblico.

Puedes preguntar sobre:

📖 Moisés<br>
✝️ Jesús<br>
🌈 Noé<br>
🙏 Fe<br>
❤️ Perdón

`;

}


// MENÚ DE SECCIONES

function mostrarSeccion(seccion){

    const elemento = document.getElementById(seccion);

    if(elemento){

        elemento.scrollIntoView({
            behavior:"smooth"
        });

    } else {

        alert("Esta sección estará disponible próximamente.");

    }

}


// CONFIRMACIÓN

console.log("VozDeFeApp funcionando");

if(question.includes("perdon")){

return `

❤️ <b>El Perdón</b><br><br>

Jesucristo enseñó que debemos perdonar así como
Dios nos perdona.

<br><br>

📜 <b>Mateo 6:14</b><br>

"Porque si perdonáis a los hombres sus ofensas,
os perdonará también a vosotros vuestro Padre celestial."

<br><br>

✨ <b>Reflexión:</b><br>

El perdón trae paz al corazón.

`;

}




return `

🙏 Gracias por tu pregunta.

Todavía estoy creciendo en conocimiento bíblico.

Puedes preguntar sobre:

📖 Moisés<br>
✝️ Jesús<br>
🌈 Noé<br>
🙏 Fe<br>
❤️ Perdón

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

}console.log("VozDeFeAAP funcionando");
