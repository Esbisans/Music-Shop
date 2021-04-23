import React, { useState, useEffect } from 'react';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";
import { FaMinus, FaPlus } from 'react-icons/fa';
import {Sales} from "./Sales";

export const Main = ({history}) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        handleListProduct();
    }, []);

    const handleListProduct = () => {
        APIInvoker.invokeGET('/products/showproduct', data => {
            setProductos(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })
    }

    const handleSales = (product) => {
        history.push(
            {
                pathname: '/main/sales',
                state: product
            }
        );
    }

    return (
        <>
            <div className="container">
                <div className="col mt-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            productos.map((product) => (
                                <div className="col " key={product.idProducto}>
                                    <div className="card text-white bg-dark h-100" >
                                        <div className="card-header"><h3>{product.nombre}</h3></div>
                                        <div className="card-body">
                                            <h6 className="card-title">Precio: ${product.precio}</h6>
                                            <h6 className="card-text">Cantidad: {product.cantidadExistente}</h6>
                                            <p className="card-text">{product.descripcion}</p>
                                        </div>
                                        <div className="card-footer">


                                                <button
                                                    className="btn btn btn-outline-warning me-3 my-sm-2 "
                                                    onClick={() => handleSales(product)}
                                                >
                                                    Comprar
                                                </button>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}