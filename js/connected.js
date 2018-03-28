alert("Salut "+localStorage.getItem('username'));

if(localStorage.getItem('keysession')){
    document.getElementById('leTitre').innerHTML = "Bienvenue " + localStorage.getItem('username');
    setTimeout(nullifierSession, 360000*3);
    document.getElementById('Redirection').innerHTML = "Déconnection";
    document.getElementById("Redirection").addEventListener("click", function(e) {
        localStorage.clear();
        window.location = "index.html";
    });
}else{
    document.getElementById('leTitre').innerHTML = "Bienvenue sur Tchat";
    document.getElementById('Redirection').innerHTML = "Connection/Inscription";
    document.getElementById("Redirection").addEventListener("click", function(e) {
        window.location = "login.html";
    });
}

function nullifierSession(){
    localStorage.clear();
}