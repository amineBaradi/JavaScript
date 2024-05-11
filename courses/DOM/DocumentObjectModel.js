/*
What Is DOM 
Find Element By Id
Find Element By Tag Name
Find Element By Class Name
Find Element By CSS Selector
Find Element By Collection
--------Title
--------Body
--------images
--------forms
--------links
*/ 
// let myIdElement = document.getElementById("my-div");
// console.log(myIdElement);

// let myTagElements = document.getElementsByTagName("p");
// console.log(myTagElements);
// console.log(myTagElements[1]);
// myTagElements[1].innerHTML ="Amine Mobile Developer";

// let myClassElement = document.getElementsByClassName("p");
// console.log(myClassElement);
// console.log(myClassElement[1]);


// let myQueryElement = document.querySelector(".my-span");
// console.log(myQueryElement);

// let myQueryAllElement = document.querySelectorAll(".my-span.special");
// console.log(myQueryAllElement);

// let myQueryAllElement = document.querySelectorAll(".my-span");
// console.log(myQueryAllElement);


// console.log(document.title);
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// ==================================================================================================================================
/*
DOM [Get / Set Elements Content And Attributes]
-innerHTML
-textContent
-Change Attributes Directly
-change Attributes With Methods
---getAttribute
---setAttribute

Search 
-innerText
*/ 
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = "Text From <span>Main.js</span>File"
// myElement.textContent = "Text From <span>Main.js</span>File"
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);



// document.images[0].src=""
// document.images[0].alt="Rien"
// document.images[0].title="Picture"
// document.images[0].id="Pic"
// document.images[0].className="img"

// let myLink = document.querySelector(".link");
// console.log(myLink);
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));


// myLink.setAttribute("href","https://twitter.com");
// myLink.setAttribute("title","twitter")

// ==================================================================================================================================
/*
DOM [Check Attributes]
-Element.attributes
-Element.hasAttribute
-Element.hasAttributes
--Element.removeAttribute
*/ 

// console.log(document.getElementsByTagName("p")[0].attributes);


// let myP = document.getElementsByTagName("p")[0];
// if(myP.hasAttribute("data-src")){
// console.log("Found");
// if(myP.getAttribute("data-src")===""){
// myP.removeAttribute("data-src");
// }else {
// myP.setAttribute("data-src","New Value");

// }
// }else {
//     console.log(`Not Found`);
// }


// if(document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log(`has Attributes`);
// }else {
//     console.log(`Div Has No Attributes `);
// }

// ==================================================================================================================================
/*
DOM [Create Elements]
-createElement
-createComment
-createTextNode
-createAttribute
-appendChild
*/ 
// let myElement = document.createElement("div");

// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");

// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test","testing");

//Append Text To Element
// myElement.appendChild(myText);

//Append Comment To Element
// myElement.appendChild(myComment);

// Append Element to body 
// document.body.appendChild(myElement);


// console.log(myElement);

// ============= 
/*
DOM [Create Elements]
-Practice Product With Heading And Paragraph
*/
// let myMainElement = document.createElement("div");
// let myHeading =Document.createElement("h2");
// let myParagraph =Document.createElement("p");


// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

//Add Heading Text
// myHeading.appendChild(myHeadingText);

//Add Heading To Main Element
// myMainElement.appendChild(myHeading);

//Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

//Add  Paragraph To Main  Element
// myMainElement.appendChild(myParagraph)


// myMainElement.className = 'product';


// document.body.appendChild(myMainElement);


// ==================================================================================================================================
/*
DOM [Deal With Childrens]
-children
-firstChild
-lastChild 
-firstElementChild
-lastElementChild
*/ 

// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.firstElementChild);

// console.log(myElement.lastChild);
// console.log(myElement.lastElementChild);

// ==================================================================================================================================
/*
DOM [Events]

-Use Events On HTML
-Use Events On JS

---onclick
---oncontextmenu
---onmouseenter
---onmouseleave


---onload
---onblur
---onsubmit

*/

// let myBtn = document.getElementById("btn");
// myBtn.onclick = function(){
//     console.log("Clicked"); 
// }

// window.onscroll = function () {
//     console.log("Scroll");
// };

// ==================================================================================================================================
/*
DOM [Events]
-Validate Form Practice 
-Prevent Default
*/ 
// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// document.forms[0].onsubmit = function (e) {
// let userValid = false;
// let ageValid = false;

// console.log(userInput.value);
// console.log(userInput.value.length);

// if(userInput.value !== "" && userInput.value.length <= 10){
// userValid = true ;
// }
// if(ageInput.value !== "" ){
// ageValid = true ;
// }
// if(userValid ===false || ageValid===false){
//     e.preventDefault();
// };

// };



// document.links[0].onmouseenter = function (event){
//     console.log(event);
//     // event.preventDefault();
// };

// ==================================================================================================================================
/*
DOM [Events Simulation]
-click
-focus
-blur
*/
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function (){
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// };


// ==================================================================================================================================
/*
DOM [class List]
-classList
---length
---contains
---item(index)
---add
---remove
---toggle
*/ 

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log( element.classList.contains("show"));
// console.log( element.classList.contains("amine"));
// console.log( element.classList.item("3"));

// element.onclick = function () {
// element.classList.add("add-one" , "add-two");
// element.classList.remove("add-one" , "add-two");   
// element.classList.toggle("show");   
// }
// ==================================================================================================================================
/*
DOM [CSS]
-style
-cssText
-removeProperty(propertyName) [Inline,Stylesheet]
-StylePropertyMap(propertyName,value,priority)
*/ 
let element = document.getElementById("myCss-div");
element.style.color = "red";
element.style.fontWeight ="bold";
element.style.backgroundColor = "yellow";
// console.log(element);

element.style.cssText = "font-weight : bold; color:green ; opacity:0.9"
element.style.removeProperty("color");
element.style.setProperty("font-size","40px","important");

console.log(document.styleSheets[0].cssRules[0].style.removeProperty("line-height"));
console.log(document.styleSheets[0].cssRules[0].style.setPropertyProperty("background-color","red","important"));
// ==================================================================================================================================
/*
DOM [Deal With Elements]
-before [Element || String]
-after [Element || String]
-append [Element || String]
-prepend [Element || String]
-remove
*/ 

let element = document.getElementById("-div");
let createP = document.createElement("p");
element.before(createP);
element.append("Hello From Js");
element.prepend("Hello From Js");
// ==================================================================================================================================
/*
DOM[Traversing]
-nextSibling
-previousSibling
-nextElementSibling
-previousElementSibling
-parentElement
*/ 

// ==================================================================================================================================
/*DOM [Cloning]
- cloneNode(Deep)
*/
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");
myP.id = `${myP.id}-clone`;
console.log(myP);
myDiv.appendChild(myP);
// ==================================================================================================================================
/*
DOM [Add Event Listener]
-addEventListener
-Use Without On
-Attach Multiple Events
-Error Test

Search 
-Capture & Bubbling JavaScript
-removeEventListener
*/ 