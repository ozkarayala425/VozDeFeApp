body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    margin: 0;
    text-align: center;
}

header {
    background: #1b4d89;
    color: white;
    padding: 20px;
}

header h1 {
    margin: 0;
}

.chat-container {
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    background: white;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 10px #ccc;
}

#chat-box {
    height: 400px;
    overflow-y: auto;
    text-align: left;
    padding: 10px;
}

.bot-message,
.user-message {
    padding: 12px;
    margin: 10px;
    border-radius: 10px;
}

.bot-message {
    background: #e8f1ff;
}

.user-message {
    background: #d4f8d4;
}

.input-area {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 12px;
    font-size: 16px;
}

button {
    padding: 12px 20px;
    background: #1b4d89;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

footer {
    margin-top: 20px;
    font-weight: bold;
}
