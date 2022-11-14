export class Product{

    constructor(pid,pname,unitPrice){
        this.pid=pid;
        this.pname=pname;
        this.unitPrice=unitPrice;
    }

    toString(){
        return "{pid: "+pid
                +"pname: "+pname
                +"unitPrice: "+unitPrice+"}";
    }
}