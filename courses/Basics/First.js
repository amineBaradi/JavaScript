/* Multiple Line Comment*/
// Single Line Comment
document.querySelector('h1').style.color="grey";
window.onload = function (){
document.querySelector('h1').style.color="blue"
document.querySelector("h1").style.color = "red";
}
// ============================================
// export let a = 10 ;
// export let arr = [1,2,3,4];
// export function saySomething(){
// return `Something`;
// }  
//OR
// export{
// a , arr , saySomething
// };
// ============================================
let a = 10 ;
let arr = [1,2,3,4];
function saySomething(){
return `Something`;
} 
export{a as myNumber , arr as myArray , saySomething};

export default function sayHello(){
return `Hello`;
};
