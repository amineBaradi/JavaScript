//commenter sur un seul line



/*
-
commenter sur plusieure line
-
*/



alert("تمت العملية بالنجاح")
console.log("تمت العملية بالنجاح")
document.write("hello brother")



var text = "amine baradi";
text=("amir aradi");//ادا اردت التعديل
alert(text);



var number1 = 100;
alert(number1 + 10);



var number2=100.56;
alert(number2);



var isworkinng = false;
var isrunning = null;
document.write(typeof(isrunning));//typeofلمعرف نوع البيانات



//الدي يمكنك استخدامها اسماء variables

var i;
var Name;
var name;
var _name;
var $name;
var my_name_is;
var TheNumberisVeryBig;

//امثلة عن اسماء غير ممكنة

// var 12year 







var content=document.getElementById("content");
content.innerText = "<p>amine baradi</p>";
content.innerHTML = "<p>baradi7 amine</p>";
//document.getElementById("content").innerHTML = "<h1> baziggar </h1>" اعطاءه قيمة جديدة
alert(content.innerText);



function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}



var  header = document.querySelector("header12");
Header.innerHTML = "<h1>hamid nombre one</h1>";
var header = document.querySelector("#header12");



var myElements =document.querySelectorAll("header12") 
for( var counter = 0;counter<=myElements.length;++counter){
myElements[counter].innerHTML = " i love my name";
}



var titles =
document.getElementsByClassName("title")[0];
titles.innerHTML+="hada";
for(var counter=0;counter<=titles.length;){
titles[counter].style.backround="red";
titles[counter].style.color="black";
}



let title = document.title;
document.title ="je suis reche";
alert(title);
document.head.innerHTML +="<style> body{backround:black;}</style>";
document.body.onload =()=>{
    alert("لقد تم كل شيء على ما يرام")
};



// let header = document.getElementById("header");
// alert(header.outerHTML);
// let header1 = document.getElementById("header");
// alert(header1.innerHTML);
// let header2 = document.getElementById("header");
// alert(header2.outerText);
// let header3 = document.getElementById("header");
// header3.innerText="<h1>لا شيء يدل على شيء";



// function
function run_codes(){
    alert("aller ");
}
run_codes();

function plus(){
    return "<h1>amine baradi<h1/>"
}
plus();
console.log(plus());



//javascribt object
//لاضافة المزيد من البيانات كل ما عليك فعله هو القيا بوضع فاصلة ثم key:value
var data = {name:"amine baradi"
,age:19
,working:"true"
, language:["HTML","CSS","javascript"], myfunction:function(){
    return 10*10
}};
data.age=18//لتعديل على قيمة ما انضر للاسفل 
data.age//لعرض بيانات objectكل ما عليك فعله هو تحديد اسم object,ثم نقوم بوضع نقطة ثم اسم key الدي تريد عرض بياناته
delete data.age;//ادا اردت حدف قيمة
alert(data);//لتتعرف على جميع بياناتobject
data.color="green";//لاضافة عنصر جديد
alert(data["age"]);//الطريقة الثانية لعرض البيانات
alert(data.language[0]);//لعرض البيانات الي توجد ضمنها arrays نقوم بتحديد key الدي يوجد ضمنها arrays ,ثم نقوم بعرض تمركز العنصر الدي نريد عرض بياناته
alert(data.myfunction())//نقوم بتحديد اسم key ثم نضع الاقواس بهده الطريقة نقوم باستدعاء function وسيقوم باعادة القيمة التي يعيدهاfunction



var users = {//كيف تنشىء اكثر من object في object واحد
    users1:{email:"radi123@gmail.com",password:"hamid"},
    users2:{name:"amine"},
    users3:{prenom:"amir"},
}
alert(users.users1.email);//لعرض البيانات نقوم بتحديد  object ثم نقطة ثم تحديد key ثم نقطة ثم نوع البيانات
alert(users["users2"]["name"]);//الطريقة الثانية 



function changer()
{
    var image=document.getElementById("para");
}
// les evenement js

