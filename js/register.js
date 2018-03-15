function register() {
    var Pseudo = document.getElementById('pseudo').value;
    var MonMdp = document.getElementById('Password').value;
    var city = document.getElementById('City').value;
    var name = document.getElementById('Name').value;
    var firstName = document.getElementById('FirstName').value;
    var mail = document.getElementById('Mail').value;
    var mailConfirm = document.getElementById('MailConfirm').value;
    var passwordConfirm = document.getElementById('PasswordConfirm').value;
    if(Pseudo.length >= 5 && MonMdp.length >= 7 && city != null && name != null && firstName != null && mail != null&& mailConfirm != null && mail === mailConfirm && MonMdp === passwordConfirm){
        var MonInscription = {};
        MonInscription.Name = name;
        MonInscription.FirstName = firstName;
        MonInscription.City = city;
        MonInscription.Mail = mail;
        MonInscription.Pseudo = Pseudo;
        MonInscription.Password = MonMdp;
    }
    else{
        alert('An Error has occured');
    }
}
function logging(){
    var MaConnexion = {};
    MaConnexion.Mail = document.getElementById('connectMail').value;
    MaConnexion.Password = document.getElementById('connectPassword').value;
}