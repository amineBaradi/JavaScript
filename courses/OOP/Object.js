/*
Object
-Intro and What Is Object
-Testing Window Object
-Accessing Object
*/ 

//typeof window ;   //Object
//typeof window.location ;   //Object
//typeof window.location.href ;   //String
// window.location.href ;
//window.location.assign("https://google.com");


let user = {
    //Properties
    theName : "Amine",
    theAge : 10,
    //Methods
    sayHello : function () {
        console.log(`Hello`);
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

//======================================================================================
/*
Object 
-Dig Deeper
-Dot Notation vs Bracket Notation            . vs []
Dynamic Property Name
*/ 

let user1 = {
    theName : "Osama",
    "country of": "Egypt",
};
console.log(user1["theName"]);
console.log(user1["country of"]);
//=========
let myVar = "country";

let user12 = {
    theName : "Osama",
    country : "Egypt",
};
console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar);   // user.country
console.log(user[myVar]);  // user.country  



//======================================================================================
/*
Object
-Nested Object And Training
*/ 
let available = true  ;
let use = {
    name : "Osama",
    age : 38,
    skills : ["Html","CSS","Js","Java"],
    available : false,
    addresses : {
        ksa :"Riyadh",
        egypt : {
            one : "Cairo",
            two : "Giza"
        },
    },
    checkAv : function () {
        if (user.available === true){
            return `Free For Work`
        }else {
            return `Not Free`
        }
    }
};
console.log(user.name);
console.log(user.age);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); //Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addressess"].egypt.one);
console.log(user["addressess"]["egypt"]);
console.log(user["addressess"]["egypt"]["one"]);
console.log(user.checkAv());



//======================================================================================
/*
Object
-Create With New Keyword new Object();

let user = new Object();
*/ 
let user3 = new Object({
    age:20,
});
// let user3 = {
//     age:20,
// };

console.log(user3);

user.age=20;
user["country"]="Morrcco";

console.log(user3);

user.sayHello = function(){
return `Hello`;
};

console.log(user3);
console.log(user3.age);
console.log(user3.country);
console.log(user3.sayHello());







//======================================================================================
/*
Function this Keyword
-this Introduction 
-this Inside Object Method
---When a function is called as a method of an object,
---its this is set to the object the method is called on.
-Global Object
-Test Variables WIth Window And This
-GLobal Context
-Function Context


Search 
-Strict Mode
*/ 

console.log(this);
console.log(this===window);
myVar = 100 ;
console.log(window.myVar);
console.log(this.myVar);

function sayHello(){
    console.log(this);
    return this ;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function (){
    console.log(this);
}

let user = {
    age :38,
    ageInDays : function (){
        return this.age * 365;
    },
};
console.log(user.age);
console.log(user.ageInDays());



//======================================================================================
/*
Object
-Create Object With create Method
*/ 
let user = {
    age :40,
    doubleAge : function (){
        return this.age * 2;
    },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());
//======

let obj = Object.create({});
obj.a = 100 ; 
console.log(obj);
//======
let copyObj = Object.create(user);

copyObj.age = 30;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

//======================================================================================
/*
Object
-Create Object With assign Method
*/ 

let obj1 = {
    prop1: 1 ,
    meth1 : function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2 ,
    meth1 : function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100 ,
    prop3:3,
};

let finalObject = Object.assign(targetObject,obj1);
finalObject.prop1 = 200 ;
finalObject.prop4 = 4 ;

console.log(finalObject);


let newObject = Object.assign({},obj1,{prop5:5,prop6:6});
console.log(newObject);
//======================================================================================









/*

*/ 
//======================================================================================







/*

*/ 
//======================================================================================









/*

*/ 
//======================================================================================