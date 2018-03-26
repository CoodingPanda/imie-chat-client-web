server.onmessage = function(event) {
    var message = JSON.parse(event.data);
    console.log(message);
    alert('');
    switch (message.type) {
        case "Message":
            console.log(message.Message);
            break;
        case "Connexion":
            localStorage.setItem('keysession', message.key_session);
            localStorage.setItem('username', message.Username);
            console.log("I'm already connected");
            window.location = "index.html";
            break;
        case "ServerMessage":
            console.log("je suis sur le serveur");
            afficher(message.textMsg,message.username);
            break;
    }
};
