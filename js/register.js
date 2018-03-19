function register() {
    var Pseudo = document.getElementById('pseudo').value;
    var MonMdp = document.getElementById('Password').value;
    var city = document.getElementById('City').value;
    var name = document.getElementById('Name').value;
    var firstName = document.getElementById('FirstName').value;
    var mail = document.getElementById('Mail').value;
    var mailConfirm = document.getElementById('MailConfirm').value;
    var passwordConfirm = document.getElementById('PasswordConfirm').value;
    if(Pseudo.length >= 5 && MonMdp.length >= 7 && city !== "" && name !== "" && firstName !== "" && mail !== "" && mailConfirm !== "" && mail === mailConfirm && MonMdp === passwordConfirm){
        var MonInscription = {};
        MonInscription.Type = 'Inscription';
        MonInscription.Name = name;
        MonInscription.FirstName = firstName;
        MonInscription.City = city;
        MonInscription.Mail = mail;
        MonInscription.Pseudo = Pseudo;
        MonInscription.Password = MonMdp;
        var toSend = JSON.stringify(MonInscription);
        console.log(toSend);
        alert('go in console');
        server.send(toSend);
    }
    else{
        alert('An Error has occured');
    }
}
function logging(){
    var MaConnexion = {};
    MaConnexion.Type = 'Connexion';
    MaConnexion.Mail = document.getElementById('connectMail').value;
    MaConnexion.Password = document.getElementById('connectPassword').value;
    var toSend = JSON.stringify(MaConnexion);
    console.log(toSend);
    alert('go in console');
    Receve(toSend);
}
function Receve(MaReception) {
    var Translated = JSON.parse(MaReception);
    console.log(Translated.Mail);
    alert('go in console');
}