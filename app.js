// ===============================
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

return `

🙏 <b>La Fe</b><br><br>

La fe es confiar en Dios aun cuando no vemos
todas las respuestas.

<br><br>

📜 <b>Hebreos 11:1</b><br>

"Es, pues, la fe la certeza de lo que se espera..."

<br><br>

✨ <b>Reflexión:</b><br>

La fe crece cuando buscamos a Dios diariamente.

`;

}




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

`;

}function mostrarSeccion(seccion){

    alert("Próximamente: " + seccion);

}console.log("VozDeFeAAP funcionando");
