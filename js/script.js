function afficher(message, username) {
    var laDate = new Date();
    var minutes = laDate.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    document.getElementById('afficher').append("[" + laDate.getHours() + ":" + minutes + "]" + "(" + username + ")" + " : " + message, document.createElement("div"));
}

function envoiMessage(){
    msg = document.getElementById('message').value;
    if(msg !== "" && msg.length <= 300){
        var laDate = new Date();
        var minutes = laDate.getMinutes();
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        var MonMessage = {};
        MonMessage.Type = 'Message';
        MonMessage.Sessionkey = localStorage.getItem('keysession');
        MonMessage.Textmsg = msg;
        MonMessage.MessageDate = laDate.getHours() +":"+ minutes;
        var toSend = JSON.stringify(MonMessage);
        server.send(toSend);
        document.getElementById('message').value = '';
    }else{
        alert('Les consignes d\'envoie de message ne sont pas respectées');
    }
}