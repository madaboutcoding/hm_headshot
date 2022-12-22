import React from 'react';
import './ProductDetail.css'
import Product from '../product.model';

function ProductDetail(){
    const product=new Product(1001,"Pepsi 500ml",35,"./img1.jpg");
    return (
    <div className="ProductDetail">
        <h3>{product.pname}</h3>
        <h3>{product.unitPrice}</h3>
        <img src={product.imgUrl} alt={product.imgUrl} />
    </div>        

    );
}

export default ProductDetail;