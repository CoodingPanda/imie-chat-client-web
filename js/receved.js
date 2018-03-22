server.onmessage=function(event) {
    var message = JSON.parse(event.data);
    switch (message.type) {
        case "Message":
            console.log(message.Message);
            break;
        case "Connexion":
            console.log("I'm already connected");
            break;
    }
};