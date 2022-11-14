import Product from "./product.js";
export  class OrderItem{
    constructor(oid,product,quantity){
        this.oid=oid
        this.product=product,
        this.quantity=quantity;
    }
    displayOrderItem(){
        return "{oid:"+this.oid+",\titem:"+this.product.pName
        +"\tunitPrice:"+this.product.unitPrice
        +"\tquantity:"+this.quantity
        +"}";
    }

}

export default class Order{
    constructor(orderid,orderItems){
        this.orderid=orderid;
        this.orderItems=orderItems;
    }
    displayOrder(){
        const msg="Order Item:"+this.orderid;
        let order_item_string=""
        for(let orderItem of this.orderItems){
            order_item_string=order_item_string+"\t"+orderItem.displayOrderItem()+"\n";
        }
        return msg+"\n"+order_item_string;
    }
}