// jQuery(function(){
//
//   $('#post').submit(function(){
//       var message = $('#message').val();
//       var fini = message.trim();
//       if(fini !== ""){
//           $('.afficher').append("<div>"+message+"</div>")
//           $('#message').val('')
//       } else {
//         alert('erreur')
//       }
//       return false
//
//
//
//   });
// });


// Affichage de message sur le site

function afficher(){


    var Message = document.getElementById('message').value;
    if(!Message){
      document.getElementById('afficher').append(Message, document.createElement("div"));
      messager();
      document.getElementById('message').value = '';

      } else {
        alert('erreur');
      }
      return false;

  }


// Envoie de message au serveur

function messager() {


    var Message = document.getElementById('message').value;
    if (Message.length <= 600) {
        var MonMessage = {};
        MonMessage.Type = 'Message';
        MonMessage.Pseudo = 'Michel';
        MonMessage.Message = Message;
        var toSend = JSON.stringify(MonMessage);
        console.log(toSend);
        alert('go in console');
        server.send(toSend);



    } else {
        alert ('error');
    }
}
