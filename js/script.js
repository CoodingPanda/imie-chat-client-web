jQuery(function(){

  $('#post').submit(function(){
      var message = $('#message').val();
      var fini = message.trim();
      if(fini !== ""){
          $('.afficher').append("<p>"+message+"</p>")
          $('#message').val('')
      } else {
        alert('erreur')
      }
      return false



  });
});

function messager() {

    alert('go in console');
    var Message = document.getElementById('message').value;

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
