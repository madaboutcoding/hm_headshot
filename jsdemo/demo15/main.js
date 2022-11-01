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

function sum(...numbers){
    let v_sum=0;
    for(n of numbers){
        v_sum=v_sum+n;
    }
    return v_sum;
}
console.log("Sum of first 10 numbers ");
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log("Sum of first 5 numbers ");
console.log(sum(1,2,3,4,5));
console.log("Sum of  1 number ");
console.log(sum(1));
console.log("Sum of 0 number ");
console.log(sum());

const array1=["abc",..."pqr"]
console.log(array1);

const name1=Array.from("DHANASHREE Dhanashree");
console.log(name1);


console.log(colors);
const keys=colors.keys();//index number of elements present in array
console.log(keys);
for(let k of keys){
    console.log(k);
}



const numbers=[10,20,30,40,50]
//exactly one value -> find
let numberGT35=numbers.find((v,i,a)=>{return v>35;})
console.log(numberGT35);

//list of values fullfilling the criteria=> filter
let filterNumberGt35=numbers.filter((v,i,a)=>v>35);
console.log(filterNumberGt35);

let findIndexof40=numbers.findIndex((v,i,a)=>v==40);
console.log("findIndexof40 = "+(parseInt(findIndexof40)+1));
