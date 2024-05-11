//alert("test");

let b1=document.getElementById("cpt");
let b2=document.getElementById("arret");
let b3=document.getElementById("rep");
let b4=document.getElementById("Annul");
let sp=document.getElementById("demo");
let info=document.getElementById("info")

window.addEventListener("load",function(){
	alert("bienvenue");
b3.style.display="none";
sp.textContent=0;
});
function compter()
{
	sp.textContent=parseInt(sp.textContent)+1;
}

b1.addEventListener("click",compter);

b2.addEventListener("click",function(){b1.removeEventListener("click",compter); b2.style.display="none"; b3.style.display="inline";});

b3.addEventListener("click",function(){b1.addEventListener("click",compter); b3.style.display="none"; b2.style.display="inline";});

b4.addEventListener("click",function(){sp.textContent=0; b3.style.display="none"; b2.style.display="inline"; b1.addEventListener("click",compter);});
 











window.addEventListener("keypress",function(e){alert("vous avez appuyez sur une touche clavier suite à l'evt "+ e.type+"  "+e.target); });
 
window.addEventListener("keypress",function(e){alert("touche utilisée a pour code "+e.keyCode)});
window.addEventListener("keypress",function(e){alert("touche utilisée  "+String.fromCharCode(e.keyCode))});
 
 
 
