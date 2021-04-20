import React, { useEffect, useReducer } from 'react';
import {productReducer} from "./productReducer";
import {ProductList} from "./ProductList";
import {ProductAdd} from "./ProductAdd";


const init = () => {
    return JSON.parse(localStorage.getItem('products')) || [];
}

export const Products = () => {

    const [products, dispatch] = useReducer(productReducer, [], init);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    },[products])

    const handleDeleteProduct = (productId) => {
        const action = {
            type: 'delete',
            payload: productId
        }
        dispatch(action);
    }
    const handleAddProduct = (newProduct) => {
        dispatch({
           type: 'add',
           payload: newProduct
        });
    }

    return(
        <>
            <h1>
                Products: {products.length}
            </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ProductList
                        products={products}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                </div>

                <div className="col-5">
                    <ProductAdd handleAddProduct={handleAddProduct}/>
                </div>

            </div>
        </>
    );
}


