var lista = [
    'https://ebd.cda.pl/620x368/597166477'
   
  
  ];
function przypinka(){lista_strona=document.getElementById("lista").style.display,"none"==lista_strona?document.getElementById("lista").style.display="block":document.getElementById("lista").style.display="none",stream=document.getElementById("streamokno").style.display}function screenmax(){var e=document.getElementById("myRange");"block"==e.style.display?e.style.display="none":e.style.display="block"}function ep(){document.getElementById("animo").src=lista[0]}function info(e){document.getElementById("info").innerHTML="Film"+e}function infoclear(){document.getElementById("info").innerHTML=""}function author(){document.getElementById("info").innerHTML="&#169"}function size(){document.getElementById("info").innerHTML="Rozmiar"}function options(){document.getElementById("info").innerHTML="Widok"}function flushed(){document.getElementById("info").innerHTML="&#128072; &#128556;	";console.log("x")}function slider(){var e=document.getElementById("myRange").value;document.getElementById("streamokno").style.width=e+"px",document.getElementById("streamokno").style.height=e/3.2+"%"}
