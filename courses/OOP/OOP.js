/*
Constructor Function

*/ 
// Syntax Constructor Function
// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary + 1000;
//     }
// }
// let UserOne = new User(100,"Amine",10000000000);
// let UserTwo = new User(10,"Amir",10000000000);
// let UserThree = new User(1,"Hamid",10000000000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.id);
// console.log(userThree.username);
// console.log(userThree.salary);
// ============================
// const userOne = {
// id : 100 ,
// username : "Elzero",
// salary: 5000,
// };

// const userTwo = {
// id : 100 ,
// username : "Hassan",
// salary: 6000,
// };

// const userThree = {
// id : 102 ,
// username : "Sayed",
// salary: 7000,
// };
// ================================================================================================================
/*
Constructor Function
- New Syntax
*/ 

// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary + 1000;
//     }
// }

// let userOne1 = new User(100,"Elzero",5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne1 instanceof User);
// console.log(userOne1.constructor ===User);

// ===============
/*
Constructor Function
-Deal With Properties And Methods
*/
// class User {

//     constructor(id, username, salary) {
//         // Properties
//         this.i = id;
//         this.u = username || "Unknown";
//         this.s = salary < 1000 ? salary +500:false;
//         this.msg = function(){
//         return `Hello ${this.u} Your Salary Is ${this.s}` 
//         };
//     }

// // Methods 
// WriteMsg(){
// return `Hello ${this.u} Your Salary Is ${this.s}` 
// }


// }

// let userOne2 = new User(100,"Elzero",5000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne2.msg());
// console.log(userOne2.WriteMsg());


// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne2.msg);//Native Code
// ===============
/*
Constructor Function
-Update Properties
-Build In Constructor
*/
// class User {

//     constructor(id, username, salary) {
//         // Properties
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//     }
//     updateName(newName){
//     this.u = newName;
//     }
// }
// let userOne2 = new User(100,"Elzero",5000);

// console.log(userOne2.u);
// userOne2.updateName("Amine");
// console.log(userOne2.u);

// let strOne = "Elzero";
// let strTwo =new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

// ===============
/*
Class
-Static Properties And Methods
*/
// class User {
//     //Static Property
//     count = 0;
//     // static count = 0;
//     constructor(id, username, salary) {
//         // Properties
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//         User.count++
//     }
//     //Static Method
//     static sayHello(){
//         return `Hello From Class`;
//     }
//     static countMembers(){
//         return `${this.count}Members Created`;
//     }
// }
// let userOne = new User(100,"Elzero",5000);
// let userTwo = new User(101,"Ahmed",50000);

// console.log(userOne.u);
// console.log(userOne.u);
// console.log(User.count);
// console.log(userOne.count);
// console.log(User.sayHello());
// console.log(User.countMembers());
// ===============
/*
-Class Inheritance
*/ 

// Parent Class
// class User{
//     constructor(id,username){
//         this.i = id;
//         this.u=username;
//     }
//     sayHello(){
//         return `Hello ${this.u}`;
//     }
// }
// Derived Class
// class Admin extends User{
//     constructor(id,username,permission){
//         super(1,"Amine");
//         this.p=permission;
//     }
//     sayHello(){
//         return `Hello ${this.u}`;
//     }
// }

// class SuperMan extends Admin{
//     constructor(id,username,permission,ability){
//         super(id,username,permission);
//         this.a=ability;
//     }
// }

// let userOne3 = new User(100,"Elzero");
// let userAdmin = new Admin(1,"Amine","Good");
// userAdmin.

// console.log(userOne.u);
// console.log(userOne.sayHello);
// ===============
/*
Encapsulation
-Class Fields Are Public By Default
-Guards The Data Against Illegal Access.
-Helps To Achieve The Target Without Revealing Its Complex Details.
-Will Reduce Human Errors.
-Make The App More Flexible And Manageable.
-Simplifies The App
*/
// class User{
//     // Private Property
//     #e;
//     constructor(id,username,eSalary){
//         this.i = id;
//         this.u=username;
//         this.#e=eSalary;
//     }
//     getSalary(){
//         return parseInt(this.#e);
//     }
// }
// let userOne1 = new User(100,"Elzero","5000 Gneh");

// console.log(userOne1.u);
// // console.log(userOne1.#e);
// console.log(userOne1.getSalary() * 0.3);

// CTRL + k + i
// ===============
/*
Prototype 
-Introduction 
-Prototype are the mechanism by which JavaScript object
-inherit features from one another
*/ 
// class User{
//     constructor(id,username){
//         this.i = id;
//         this.u=username;
//     }
//     getSalary(){
//         return parseInt(this.u);
//     }
// }
// let userOne = new User(100,"Elzero");
// console.log(userOne.u);
// console.log(User.prototype);

// let strOne = "Elzero";
// console.log(String.prototype);
// strOne.

// ===============
/*
Prototype
-Add To Prototype Chain
-Extend Built In Constructors Features
*/ 
class User{
    constructor(id,username){
        this.i = id;
        this.u=username;
    }
    getSalary(){
        return parseInt(this.u);
    }
}
let userOne = new User(100,"Elzero");
console.log(userOne.u);
console.log(User.prototype);

console.log(userOne);

User.prototype.sayWelcome = function (){
    return `Welcome ${this.u}`;
}

Object.prototype.love="Elzero";

String.prototype.addDotBeforeAndAfter = function (val){
return `.${this}.`;
};
let myString = "Elzero0";
// ===============
/*
Object Meta Data And Descriptor
-Writable
-enumerable
-configurable [Cannot Delete Or Reconfigure]
*/ 
const myObject = {
a:1,
b:2,
};

Object.defineProperty(myObject,"c",{
    writable : true ,
    enumerable : true,
    configurable : true ,
    value : 3 ,
});

Object.defineProperty(myObject,"c",{
    writable : true ,
    enumerable : true,
    configurable : true ,
    value : 300 ,
});


myObject.c = 100;
// console.log(delete myObject.c);

for(let prop in myObject){
    console.log(prop,myObject[prop]);
}
console.log(delete myObject.c);
console.log(myObject);

// ===============
/*
Object Meta Data And Descriptor
-Define Multiple Properties
-Check Descriptors
*/ 

const myObject = {
    a:1,
    b:2,
};

Object.defineProperties(myObject,{
    c:{
    configurable : true ,
    values : 3 ,
    },
    d:{
    configurable : true ,
    values : 4 ,
    },
    c:{
    configurable : true ,
    values : 5 ,
    },
})
console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject,"d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
