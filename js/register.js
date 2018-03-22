function register() {
    var Pseudo = document.getElementById('pseudo').value;
    var MonMdp = document.getElementById('Password').value;
    var city = document.getElementById('City').value;
    var name = document.getElementById('Name').value;
    var firstName = document.getElementById('FirstName').value;
    var mail = document.getElementById('Mail').value;
    var mailConfirm = document.getElementById('MailConfirm').value;
    var passwordConfirm = document.getElementById('PasswordConfirm').value;
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(Pseudo.length >= 5){
        if(MonMdp.length >= 7 && MonMdp === passwordConfirm){
            if(mail === mailConfirm && regex.test(mail)){
                if(name && firstName && city) {
                    var MonInscription = {};
                    MonInscription.Type = 'Inscription';
                    MonInscription.Name = name;
                    MonInscription.FirstName = firstName;
                    MonInscription.City = city;
                    MonInscription.Email = mail;
                    MonInscription.Username = Pseudo;
                    MonInscription.Password = MonMdp;
                    var toSend = JSON.stringify(MonInscription);
                    console.log(toSend);
                    alert('go in console');
                    server.send(toSend);
                }else{
                    alert('Please try again');
                    return false;
                }
            }else{
                alert('Invalid Mail');
            }
        }else{
            alert('Invalid Password')
        }
    }else{
        alert('Error on pseudo')
    }
}

function login(){
    var MaConnexion = {};
    MaConnexion.Type = 'Connexion';
    MaConnexion.Email = document.getElementById('connectMail').value;
    MaConnexion.Password = document.getElementById('connectPassword').value;
    console.log(MaConnexion);
    var toSend = JSON.stringify(MaConnexion);
    if(MaConnexion.Email === toReceved.Email) {
        if (MaConnexion.Password === toReceved.Password) {
            server.send(toSend);
            alert('I\'m logged');
        } else {
            alert('Error on Password. Please try again');
        }
    }else {
        alert('Mail Error');
    }
}

function Receve(MaReception) {
    var Translated = JSON.parse(MaReception);
    alert('go in console');
    return Translated;
}
