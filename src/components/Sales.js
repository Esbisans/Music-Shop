import React, { useState, useEffect } from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";
import {useForm} from "../hooks/useForm";

export const Sales = ({location}) => {
    const product = location.state

    const [formValues, handleInputChange] = useForm({
        cantidad: '1',
        direccion: ''
    })

    const {cantidad, direccion} = formValues

    return (
        <div className="container mt-4">
            <div className="card text-white bg-dark">
                <div className="card-header">
                    <h1>
                        {location.state.nombre}
                    </h1>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Precio: ${product.precio}</h4>
                    <h4 className="card-text">Cantidad en stock: {product.cantidadExistente}</h4>
                    <p className="card-text">Descripción: {product.descripcion}</p>
                </div>
                <div className="card-footer">

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">


                            <form className="d-flex">
                                <h3>
                                    Cantidad
                                </h3>

                                <input
                                    className="form-control mx-4"
                                    type="number"
                                    name="cantidad"
                                    value={cantidad}
                                    onChange={handleInputChange}
                                />

                            </form>
                        </div>

                        <div className="col-12 col-md-6 col-lg-7">
                            <h3>
                                Total:
                                ${
                                cantidad * product.precio
                            }
                            </h3>
                        </div>
                    </div>

                    <div className="row my-3">
                        <form className="d-flex">
                            <h3>
                                Dirección
                            </h3>

                            <input
                                className="form-control mx-4"
                                type="text"
                                name="direccion"
                                value={direccion}
                                onChange={handleInputChange}
                            />

                        </form>
                    </div>

                    <button className="btn btn-light my-3">
                        Comprar
                    </button>

                </div>

            </div>
        </div>
    );
}