var server = new WebSocket("ws://localhost:8083");
jQuery(function(){

  $('#post').submit(function(){
      var message = $('#message').val()
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
