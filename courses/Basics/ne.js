/* output to screen
--window.alert()
--document.write()
--console.log()
*/



// الأمثلة الآتية تُظهِر ناتج العمليات الرياضية على القيمة Infinity:
console.log(Infinity          ); // Infinity
console.log(Infinity + 1      ); // Infinity
console.log(Math.pow(10, 1000)); // Infinity
console.log(Math.log(0)       ); // -Infinity
console.log(1 / Infinity      ); // 0 //ناتج قسمة اي عدد على Infinity هو 0
/*
-null
-undefined
-NaN
*/




//wait the window to load
window.onload=function(){
document.querySelector("h1").style.Color="blue";};



//SINGLE LINE COMMENT
/*  cntrl/    */
//window.alert("hello from js file");



document.write("<h1>hello<span> page</span></h1>");



//document.createElement("")
/* 
--log
--error
--table

directive %c

*/
console.log("hello from js file");
// console.error("error");
console.table(["amine","baradi","amino"]);
console.log("hello from %cjs %cfile","color:red;font-size:40px","color:green;font-size:50px")



// "The empty string has a length of 0"
/*data types intro
--string
--number
--Array=>object
--object
--boolean
  */
console.log("amine baradi");
console.log(typeof "amine baradi");
console.log(typeof "500000");
console.log(typeof 500000);
console.log(typeof 500000.99);
console.log(typeof [15 , 16 , 19]);
console.log(typeof ["ami" , "ne" , "ba"]);
console.log(typeof {name:"amine", age:19 ,country:"mor"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);



/*variables intro
--syntax(keyword / variable name / assignment operator / variable value)
  */
var user ="amine";
var age =19

console.log(user);
console.log(user);
console.log(user);
console.log(age);
console.log(hello);
  hello.innerHTML = "action";
  


function mult(a,b)
{
    return a+"*"+b+"="+a*b;
}



function affiche(a)
{
    alert(a*a);
}
affiche(a)



let res=mult(2,4);
alert(res);
// let x=parseFloat(prompt("saisir une valeur"));
// let y=parseFloat(prompt("saisir une valeur"));
// alert(mult(x,y));




function table(){
  let ch="";
    for(let i=0;i<11;i++){
        
        ch+=mult(6,i)+"\n";
        
    }
    alert(ch);
}
table()




function table(n){
    
    let ch="";
      for(let i=0;i<11;i++){
          
          ch+=mult(n,i)+"\n";
          
      }
      alert(ch);
  }



  let x=parseFloat(prompt("saisir une valeur"));
  table(x);




  let f=function(){alert("ceci vient d une fonction anonyme")}
  f();
  (function(){alert("fct anonyme qui s auto excute")})();



let f1=function(a,b)
{return a*b;};
alert(f(3,9));



 //OBJECT LITTERAL
let pers1={nom:"baradi",prenom:"amine",age:19};
  let pers2=new Object();
  pers2.nom="baradi";
  pers2.prenom="amine"
  pers2.age=19;
  function personne (nom,prenom,age)
  {
this.nom=nom;
this.prenom=prenom;
this.age=age;
  }
  let pers3=new personne("baradi","amine",19);
  alert(pers1.nom);
  alert(pers2.prenom);
  alert(pers3.age);
  function stagaire(num,nom,fill)
  {
    this.num=num;
    this.nom=nom;
    this.fill=fill;
  
  this.affiche=function(){
    alert(this.num+""+this.nom+""+this.fill);
  }
  this.changerfilliere=chgil;
  function chgil(mvfill)
  {
    this.fill=mvfill;
  }
}
let stg=new stagaire(120,"amine","div103");
stg.affiche();
stg.changerfilliere();
stg.affiche();

let nb=Number.MAX_VALUE;
alert(nb);
alert(nb+74747474);
alert(Number.ISFINIT5(number.NEGATIVE-INFINITY))

 //faie la fonction qui calcule le nombre de jour et d heure et cole entre deux date debut et fin


function salutation()
{alert("bonjour amine")}
salutation();
