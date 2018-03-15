function register() {
    var MonPseudo = document.getElementById('Pseudo').value;
    var MonMdp = document.getElementById('Password').value;
    alert('GG bro');
    if(MonPseudo.length >= 5 && MonMdp.length >= 5 ){
        alert('GG bro'+ MonMdp + '+' + MonPseudo);
    }
    else{
        alert(MonPseudo + 'you\' bad');
    }
}
