function podmiana(odcinek){
    document.getElementById("animo").src= lista[odcinek];
    
    }
    function przypinka(){
        lista_strona = document.getElementById("lista").style.display;
        
        if (lista_strona == 'none'){
            document.getElementById("lista").style.display = 'block'
            }
        else{
            document.getElementById("lista").style.display = 'none';
            }
        stream = document.getElementById("streamokno").style.display;
        /*if (stream == 'none'){
            document.getElementById("streamokno").style.display = 'block'
            }
        else{
            document.getElementById("streamokno").style.display = 'none';
            }*/
    }
function screenmax(){var t=document.getElementById("streamokno");"90%"!=t.style.height?(t.style.height="90%",t.style.width="250px"):(t.style.height="100%",t.style.width="320px")}

function ep(){
    document.getElementById("animo").src= lista[0];
}

function change1() {
    var  change = document.getElementById("info").innerHTML = "Film 1";
}

function change11() {
    var  change = document.getElementById("info").innerHTML = "";
}

function change2() {
    var  change = document.getElementById("info").innerHTML = "Film 2";
}

function change22() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change3() {
    var  change = document.getElementById("info").innerHTML = "Film 3";
}

function change33() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change4() {
    var  change = document.getElementById("info").innerHTML = "Film 4";
}

function change44() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change5() {
    var  change = document.getElementById("info").innerHTML = "Film 5";
}

function change55() {
    var  change = document.getElementById("info").innerHTML = "";
}
function change6() {
    var  change = document.getElementById("info").innerHTML = "Film 6";
}
function change66() {
    var  change = document.getElementById("info").innerHTML = "";
}

function author() {
    var  change = document.getElementById("info").innerHTML = "®";
}
function author2() {
    var  change = document.getElementById("info").innerHTML = "";
}
function size() {
    var  change = document.getElementById("info").innerHTML = "Zmniejsz/Powieksz";
}
function size2() {
    var  change = document.getElementById("info").innerHTML = "";
}


function options() {
    var  change = document.getElementById("info").innerHTML = "Pokaż/Ukryj ";
}
function options2() {
    var  change = document.getElementById("info").innerHTML = "";
}



















