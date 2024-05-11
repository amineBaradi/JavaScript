// let ant=document.getElementById("antiques")
// alert(ant.innerHTML)
// let ex=document.getElementsByClassName("existe");
// for(let i=0;i<ex.length;i++)
// alert(ex[i].innerHTML);



// let exAnt=ant.getElementsByClassName("existe");
// for(let i=0;i<exAnt.length;i++)
// alert(exAnt[i].innerHTML);



// //let para=document.getElementsByid("countenu").getElementsByTagName("p");
// let para=contenu.getElementsByTagName("p");
// for(let i=0;i<para.length;i++)
// alert(para[i].innerHTML);



// let pex=document.querySelector("p.existe");
// alert(pex.innerHTML);



// let lespex=document.querySelectorAll("p.existe");
// for(let i=0;i<lespex.length;i++)
// alert(lespex[i].innerHTML);



// let para1=contenu.querySelector("p");
// alert(para1.innerHTML)



// let x=document.querySelectorAll("ul li");
// for(let i=0;i<x.length;i++)
// alert(x[i].innerHTML);



// let y=document.querySelectorAll("ul > li:first-child");
// for(let i=0;i<x.length;i++)
// alert(x[i].innerHTML);



// alert(nouvelles.childNodes.length);
// alert(nouvelles.children.length);



// let a=document.getElementById("antiques");
// alert(a.nodeName);
// alert(a.nodeType);
// alert(a.nodeValue);



// let para1=document.getElementById("para").childNodes[0];
// alert(para1.nodeName);
// alert(para1.nodeType);
// alert(para1.nodeValue);



// alert(document.body.innerHTML);
// alert(contenu.innerHTML);
// alert(contenu.outerHTML)
// alert(contenu.textContent)
// alert(contenu.innerText)



// let now=document.getElementById("nouvelles");
// now.innerHTML+="<li>mosque hassan II</li>"
// now.innerHTML="<li>mosque hassan II</li>"+now.innerHTML



// contenu.queryCommandValue("P").innerHTML+=
// "<h3>titre de niveau 3</h3>"



// para.textContent="texte modifiè";
// contenu.outerHTML+="<h2>titre de 2 </h2>";



// let h=contenu.querySelector("h2");
// alert(h.hasAttribute("class"))
// alert(h.hasAttribute("style"))
// alert(nouvlles.hasAttributes());
// alert(document.querySelector("h1").hasAttributes());




// if(antique.hasAttributes())
// {
//     let str="";
//     let attAnt=antique.attributes;
//     for(let i=0;i<attAnt.length;i++)
//     str+=attAnt[i].name+"="+attAnt[i].value+"/n";




// alert(str);
// }

// let nomAtt=antique.getAttributeNames();
// for(let i=0;i<nomAtt.length;i++)
// alert(nomAtt[i]+"="+antique.getAttribute(nomAtt[i]))



let liens=document.links;
liens[0].href="http://google.ma";





//faire une page html contenent une div la div contien un titre h2 et deux paragraphe le premmietre paragraphe contient un lien avec href =#
//modifier href    par coure dom html 
//ajouter a la diV la class div1  
//ajouter a la deusieme paraghraphe la classe et le style 
//lister tous les enfants de la div chacun avec ses attributs et leurs valeurs 



// let para=document.getElementById("contenu").document.getElementByTagName("p");
// para.style.color="blue";


let p = document.querySelectorAll("div p");
for (let i = 0; i < p.length; i++) {
    p[i].Style.color ="green" ;
    p[i].Style.fontSise ="1.5em" ;
}
alert(antique.Style.color);
alert(document.querySelector("div p").Style.color)
//alert(document.querySelector("h2").style.color);
let h2=document.querySelector("h2");
let styleH2=window.getComputedStyle(h2);
alert(styleH2.color)



// cree un fichier html contenenet para 
// premier deuxiem troisieme
// ajouter un lien a avec href = # et un text qlique ici difinir la color
//  de deuxiem paraghraphe dans la balise il meme avec javascript 
//  ajouter a troisiem paraghraph le id para dans une balise style
//   difinir les proprietaire color de fond el la   
//   en js difinir de premier paraghraf a blue 