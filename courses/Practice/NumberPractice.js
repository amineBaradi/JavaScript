/*
Number Challenge

*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//find Smallest Number in All Variable And Return Integer
console.log(parseInt(Math.min(a,b,c,d)));

//Use Variable a + d One Time To Get The Needed Output
console.log();  //100000


//Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Number.parseInt(d));
console.log(d.toFixed(0));
console.log(Math.floor(d));
//Use Variable b + d To Get This Values
console.log(); //66.67 => String
console.log();  //67 => Number