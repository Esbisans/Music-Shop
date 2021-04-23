import React,  { useState, useEffect } from 'react';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";

export const Registry = () => {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        handleList();
    }, []);

    const handleList = () => {
        APIInvoker.invokeGET('/registry/showSales', data => {
            setRegistros(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })
    }

    return (
        <>
            <div className="container mt-4">
                <div className="col">
                    <table className="table table-dark table-hover">
                        <thead>
                        <tr>
                            <th scope="col">
                                IdVenta
                            </th>
                            <th scope="col">
                                Total
                            </th>
                            <th scope="col">
                                Fecha
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            registros.length > 0 ?
                                registros.map(
                                    (reg) => (
                                        <tr key={reg.idVenta}>
                                            <th>{reg.idVenta}</th>
                                            <td>{reg.total}</td>
                                            <td>{reg.fecha}</td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td>
                                            No existen registros
                                        </td>
                                    </tr>
                                )
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}