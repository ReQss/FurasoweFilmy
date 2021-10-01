//Miejsce dodawania i zmiany odcinków        
var lista = [
  'https://upstream.to/embed-vxvgzh32m61q.html',
  'https://upstream.to/embed-0u1b2st8fsfv.html'
 

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
     var streamwindow = document.getElementById('streamokno');
    if(streamwindow.style.height!='90%'){
    streamwindow.style.height='90%';
    streamwindow.style.width='250px';}
    else{
        streamwindow.style.height='100%';
        streamwindow.style.width='320px';
    }
    }

