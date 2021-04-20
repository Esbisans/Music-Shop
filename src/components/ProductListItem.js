import React from 'react';

export const ProductListItem = ({product, index, handleDelete}) => {
    return (
        <li
            key={product.id}
            className="list-group-item"
        >
            <p>
                {index+1}. {product.name}
            </p>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(product.id)}
            >
                Eliminar
            </button>

        </li>
    );
};


