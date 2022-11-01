// arrow function
// es5 
const x=10;
const square=function(x){
    return x*x;
}
console.log("Square of "+x+" is "+square(x));

// ES6 Arrow function
console.log("Type of function is ");
console.log((x)=>{return x*x});
const sqr=(x)=>{return x*x};
console.log("Square of "+x+" is "+sqr(x));

//Closure === classes implementing intefaces 
const function1=(function(){
    this.outF1=()=>{console.log("f1 called");};
    this.outF2=()=>{console.log("f2 called");};
    this.outF3=()=>{console.log("f3 called");};

    // this.outF1=f1;
    // this.outF2=f2;
    // this.outF3=f3;
    // function f1(){console.log("f1 called");}
    // function f2(){console.log("f2 called");}
    // function f3(){console.log("f3 called");}
});

const obj1=new function1();
obj1.outF1();
obj1.outF2();
obj1.outF3();