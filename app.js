function sendMessage() {

    let input = document.getElementById("user-input");
    let message = input.value.toLowerCase();

    if (message.trim() === "") {
        return;
    }

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `
    <div class="user-message">
        👤 ${input.value}
    </div>
    `;

    let response = getBiblicalAnswer(message);

    chatBox.innerHTML += `
    <div class="bot-message">
        📖 ${response}
    </div>
    `;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}


function getBiblicalAnswer(question) {


    if (question.includes("moises")) {

        return `
        <b>Moisés:</b><br>
        Dios escogió a Moisés para liberar al pueblo de Israel de Egipto.
        Aunque se sentía incapaz, el Señor le dio fuerza para cumplir su misión.<br><br>

        📜 Éxodo 3:10<br>
        "Ven, por tanto, ahora, y te enviaré a Faraón..."<br><br>

        ✨ Reflexión:<br>
        Dios puede usar personas comunes para realizar grandes propósitos.
        `;
    }


    if (question.includes("jesus") || question.includes("cristo")) {

        return `
        <b>Jesucristo:</b><br>
        Jesús vino al mundo para enseñarnos el amor de Dios,
        salvarnos y mostrarnos el camino hacia la vida eterna.<br><br>

        📜 Juan 14:6<br>
        "Yo soy el camino, y la verdad, y la vida..."<br><br>

        ✨ Reflexión:<br>
        Al acercarnos a Cristo encontramos esperanza y paz.
        `;
    }


    if (question.includes("fe")) {

        return `
        <b>La fe:</b><br>
        La fe es confiar en Dios aun cuando no vemos todas las respuestas.<br><br>

        📜 Hebreos 11:1<br>
        "Es, pues, la fe la certeza de lo que se espera..."<br><br>

        ✨ Reflexión:<br>
        La fe crece cuando oramos, estudiamos las Escrituras y seguimos a Dios.
        `;
    }


    if (question.includes("perdon")) {

        return `
        <b>El perdón:</b><br>
        Jesucristo enseñó que debemos perdonar a los demás
        como Dios nos perdona a nosotros.<br><br>

        📜 Mateo 6:14<br>
        "Porque si perdonáis a los hombres sus ofensas,
        os perdonará también a vosotros vuestro Padre celestial."<br><br>

        ✨ Reflexión:<br>
        El perdón trae paz al corazón.
        `;
    }


    return `
    🙏 Gracias por tu pregunta.<br><br>
    Todavía estoy aprendiendo más historias bíblicas.
    Intenta preguntar sobre Moisés, Jesús, la fe o el perdón.
    `;
}
