class Product{
    // constructor(){
    //     console.log("default constructor");
    // }
    constructor(pid,pname,unitPrice){
        this.pid=pid;
        this.pname=pname;
        this.unitPrice=unitPrice;
    }   
    toString(){
        return this.pid+" "+this.pname+" "+this.unitPrice;
    }
}
// const p1=new Product();
console.log("call toString()");

const p2=new Product("P1002","Maaza",30.00);
console.log(p2.toString());

const p3=new Product("P1002","Maaza",30.00);
console.log(p2.toString());





