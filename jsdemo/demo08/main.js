const greeting=function (){
    console.log("Welcome to the Function Programming");
}
greeting();
// Anonymous function with params

const greet=function(msg){
    // Way 1
    // if(msg==undefined){
    //     console.log("Greet is called");
    // }else{
    //     console.log(msg);
    // }
    // Way 2
    // if(msg==undefined){
    //     msg="Greet is called";
    // }
    // console.log(msg);
    // Way 3
    console.log(msg==undefined?"Greet is called":msg);
}

greet("Anonymous function with params");
greet();