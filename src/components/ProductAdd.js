import React from 'react';
import {useForm} from "../hooks/useForm";

export const ProductAdd = ({handleAddProduct}) => {

    const [{name}, handleInputChange, reset] = useForm({
       name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: new Date().getTime(),
            name: name
        }

        handleAddProduct(newProduct);
        reset();

    }

    return (
        <>
            <h4>Agregar Producto</h4>
            <hr />
            <form
                onSubmit={handleSubmit}
                className="d-grid gap-2"
            >
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Producto nuevo"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};

