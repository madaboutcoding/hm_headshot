const greeting=function (){
    return "Greeting() called ";
}
const greet=function (msg){
    return msg==undefined?"Greet() called":msg;
}
console.log(greeting());
console.log(greet("Welcome to function programming"));
console.log(greet());