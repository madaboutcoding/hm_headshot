// Custom modules
//Write a program which will do add,sub,mul,div and modulo on
//given set of numbers
// //This is demo of single custom module import & export
const add=require('./add')
const num1=100;
const num2=3;

console.log("Addition: "+add(num1,num2))
////This is demo of >1 custom module import & export
const calc=require('./calc');
console.log("Add: "+calc.add(num1,num2))//103
console.log("Sub: "+calc.sub(num1,num2))//97
console.log("Mul: "+calc.mul(num1,num2))//300
console.log("Div: "+calc.div(num1,num2))//3.33
console.log("Mod: "+calc.mod(num1,num2))//1




