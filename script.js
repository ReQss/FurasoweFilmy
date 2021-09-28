//Miejsce dodawania i zmiany odcinków        
var lista = [
  'https://player.twitch.tv/?channel=mamm0n&parent=reqss.github.io',
  'https://player.twitch.tv/?channel=mamm0n&parent=reqss.github.io',
  'https://player.twitch.tv/?channel=mamm0n&parent=reqss.github.io'

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
	/*if (stream == 'none'){
        document.getElementById("streamokno").style.display = 'block'
    	}
    else{
        document.getElementById("streamokno").style.display = 'none';
    	}*/
}

function screenmax(){
    document.getElementById('stream').style.height='100%';
    document.getElementById('streamokno').style.width='100%';

    }

