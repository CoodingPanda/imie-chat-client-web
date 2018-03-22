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

    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if(Message !== ""){
      document.getElementById('afficher').append("[" + heure + ":" + minutes + "]: " + Message, document.createElement('div'));
      messager(heure, minutes);

      document.getElementById('message').value = '';


      } else {
        alert('erreur');
      }
      return false;

  }



// Envoie de message au serveur

function messager(heure, minutes)  {


    var Message = document.getElementById('message').value;
    if (Message.length <= 600) {
        var MonMessage = {};
        MonMessage.Type = 'Message';
        MonMessage.Username = '';
        MonMessage.MessageCapacity = Message;
        MonMessage.dateHours = heure;
        MonMessage.dateMinutes = minutes;
        var toSend = JSON.stringify(MonMessage);
        console.log(toSend);
        alert('go in console');
        server.send(toSend);



    } else {
        alert ('error');
    }
}
