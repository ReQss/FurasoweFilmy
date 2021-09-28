//Miejsce dodawania i zmiany odcinków        
var lista = [
  'https://ebd.cda.pl/620x368/7193824cd',
  'https://www.youtube.com/embed/C9alPYoF5v4'
];
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
	if (stream == 'none'){
        document.getElementById("streamokno").style.display = 'block'
    	}
    else{
        document.getElementById("streamokno").style.display = 'none';
    	}
}

function screenmax(){
    document.getElementById('stream').style.height='100%';
    document.getElementById('streamokno').style.width='100%';

    }

