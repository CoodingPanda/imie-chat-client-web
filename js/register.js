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
                    server.send(toSend);
                    alert('go in console');
                }else{
                    alert('Please try again');
                    return false;
                }
            }else{
                alert('Invalid Mail');
                return false;
            }
        }else{
            alert('Invalid Password');
            return false;
        }
    }else{
        alert('Error on pseudo');
        return false;
    }
}

function login(){
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
}
