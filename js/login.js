document.querySelector("#login").addEventListener("submit", function(e){
    e.preventDefault();
    var MaConnexion = {};
    MaConnexion.Type = 'Connexion';
    MaConnexion.Email = document.getElementById('connectMail').value;
    MaConnexion.Password = document.getElementById('connectPassword').value;
    var toSend = JSON.stringify(MaConnexion);
    if(MaConnexion.Email !== "") {
        if (MaConnexion.Password !== "") {
            server.send(toSend);
        } else {
            alert('Error on Password. Please try again');
        }
    }else {
        alert('Mail Error');
    }
});
