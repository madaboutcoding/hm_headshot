import React from 'react';
import ProductDetail from './product-detail.component';
// import PRODUCTS from '../products';

function ProductList(){
    return(
        <div className="ProductList">
           <ul> 
            <li> <ProductDetail></ProductDetail></li>
            <li> <ProductDetail></ProductDetail></li>
            <li> <ProductDetail></ProductDetail></li>
           </ul>
        </div>
    )
}

export default ProductList;
