 export  default class Product{
    constructor(pid,pName,unitPrice){
        this.pid=pid;
        this.pName=pName;
        this.unitPrice=unitPrice;
    }
    displayProduct(){
        return "{ pid:"+pid+", pName:"+pname+", unitPrice:"+this.unitPrice+"}";
    }

}


