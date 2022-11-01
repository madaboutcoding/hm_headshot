class Product{

	constructor(){
		this.pid="";
		this.pname="";
		this.unitPrice=0.0;
	}
	getPid(){
		return this.pid;
	}
	getPname(){
		return this.pname;
	}
	getUnitPrice(){
		return this.unitPrice;
	}
	setPid(pid){
		this.pid=pid;
	}
	setPname(pname){
		this.pname=pname;
	}
	setUnitPrice(unitPrice){
		this.unitPrice=unitPrice;
	}
	
}

const p1=new Product();
console.log(p1);
p1.setPid("p1001");
p1.setPname("Limca");
p1.setUnitPrice(45.00);
console.log(p1);
console.log(p1.getPid());
console.log(p1.getPname());
console.log(p1.getUnitPrice());