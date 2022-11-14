
import Order, { OrderItem } from "./order.js";
import Product from "./product.js";

const p1=new Product(1001,"Pepsi 500ml",30.0);
const p2=new Product(1002,"Maaza 500ml",30.0);
const p3=new Product(1003,"Limca 500ml",30.0);

// const products=[]
// products.push(p1);
// products.push(p2);
// products.push(p3);
// products.forEach(p=>console.log(p));

const orderItem1=new OrderItem(1,p1,5);
const orderItem2=new OrderItem(2,p2,10);
const orderItem3=new OrderItem(3,p3,15);

const orderItems=[orderItem1,orderItem2,orderItem3]

const order=new Order("O1001",orderItems);
console.log("Before");
console.log(order.displayOrder());

console.log(order.orderItems.pop());
console.log("After");
console.log(order.displayOrder());
console.log("find product p2 and udpate the unitprice ");
order.orderItems.find((oi)=>{
    if(oi.product.pid==1002){
        oi.product.unitPrice=40.0;
    }
})

console.log("After update");
console.log(order.displayOrder());