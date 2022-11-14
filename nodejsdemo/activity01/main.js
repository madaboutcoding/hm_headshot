// Activity 1: Create a product.js
// 			Define the product pid,pname,unitprice
// ES6=> import export statements 
import {Product} from './product.js';

const p1=new Product(1001,"Pepsi 500ml",30.0);
const p2=new Product(1002,"Maaza 500ml",30.0);
const p3=new Product(1003,"Limca 500ml",30.0);

const products=[]
products.push(p1);
products.push(p2);
products.push(p3);

products.forEach(p=>console.log(p));