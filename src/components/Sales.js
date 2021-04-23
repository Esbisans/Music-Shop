import React, { useState, useEffect } from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";
import {useForm} from "../hooks/useForm";
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";

export const Sales = ({history, location}) => {
    const product = location.state

    const [formValues, handleInputChange] = useForm({
        cantidad: '1',
        direccion: '',
        telefono: '',
        postal: ''
    })

    const {cantidad, direccion, telefono, postal} = formValues

    const handleSale = () => {

        let venta = {
            idProducto: product.idProducto,
            cantidadVender: cantidad
        }

        let address = {
            direccion: direccion,
            numeroContacto: telefono,
            codigoPostal: postal
        }

        let registroVentas = {
            total: cantidad * product.precio
        }

        APIInvoker.invokePUT('/sales/sale', venta, data => {

            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }
            );


            history.replace('main/home')
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })

        APIInvoker.invokePOST('/sales/address', address, data => {
            /*
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }
            );

             */
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })

        APIInvoker.invokePOST('/registry/registrySales', registroVentas, data => {
            /*
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }
            );

             */
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })
    }

    return (
        <div className="container mt-4">
            <div className="card text-white bg-dark">
                <div className="card-header">
                    <h1>
                        {product.nombre}
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
                                    min="1"
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

                    <div className="row my-3">
                        <form className="d-flex">
                            <h3>
                                Telefono
                            </h3>

                            <input
                                className="form-control mx-4"
                                type="number"
                                min="0"
                                name="telefono"
                                value={telefono}
                                onChange={handleInputChange}
                            />

                        </form>
                    </div>

                    <div className="row my-3">
                        <form className="d-flex">
                            <h3>
                                Postal
                            </h3>

                            <input
                                className="form-control mx-4"
                                type="number"
                                min="0"
                                name="postal"
                                value={postal}
                                onChange={handleInputChange}
                            />

                        </form>
                    </div>

                    <button className="btn btn-light my-3" type="submit" onClick={handleSale}>
                        Comprar
                    </button>

                </div>

            </div>
        </div>
    );
}