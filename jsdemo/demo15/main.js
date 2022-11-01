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


const colors=["red","green","blue"];
console.log("Using for in");
for(let i in colors){
    console.log(colors[i]);
}
// for/of Loop
console.log("Using for/of ");
for(let color of colors){
    console.log(color);
}

// 
const colors_map=new Map([
    ["ff0000","RED"],
    ["00ff00","GREEN"],
    ["0000ff","BLUE"]
]);
console.log("Line 52"+colors_map[0]);
console.log("Line 53"+colors_map.get("ff0000"));
console.log("Line 54"+colors_map.get("00ff00"));
console.log("Line 55"+colors_map.get("0000ff"));

const colors_map1=new Map([
    ["RED"  ,"ff0000"],
    ["GREEN","00ff00"],
    ["BLUE" ,"0000ff"],
    ["BLUE" ,"00ffff"]
]);

console.log("colors_map1.get('RED')= "+colors_map1.get("RED"));
console.log("colors_map1.get('red')= "+colors_map1.get("red"));

console.log("colors_map1.get('BLUE')= "+colors_map1.get("BLUE"));


const oddNumbers=new Set();
oddNumbers.add(11);
oddNumbers.add(11);
oddNumbers.add(13);
oddNumbers.add(15);
oddNumbers.add(17);
console.log(oddNumbers);
