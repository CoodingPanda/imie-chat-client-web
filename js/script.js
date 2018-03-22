function Affichage() {
    var Message = document.getElementById('message').value;
    if(!Message){
        document.getElementById('liste-msg').append(Message,document.createElement('div'));
    }
}

function messager() {


    var Message = document.getElementById('message').value;
    alert('go in console');
    if (Message.length <= 600) {

        var MonMessage = {};
        MonMessage.Type = 'Message';
        MonMessage.Message = Message;
        var toSend = JSON.stringify(MonMessage);
        console.log(toSend);
        alert('go in console');
        server.send(toSend);


    } else {
        alert ('error');
    }
}
