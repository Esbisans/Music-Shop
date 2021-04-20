import React from 'react';
import {ProductListItem} from "./ProductListItem";

export const ProductList = ({products, handleDeleteProduct}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                products.map((product, i) => (
                    <ProductListItem
                        key={product.id}
                        product={product}
                        index={i}
                        handleDelete={handleDeleteProduct}
                    />
                ))
            }
        </ul>
    );
};

