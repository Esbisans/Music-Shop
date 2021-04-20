import React,  { useState, useEffect } from 'react';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";
import {useForm} from "../hooks/useForm";

export const Roles = () => {

    const [roles, setRoles] = useState([]);
    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
    });
    const {nombre} = formValues;



    useEffect(() => {
        handleList();
    }, []);

    const handleList = () => {
        APIInvoker.invokeGET('/roles/showRol', data => {
            setRoles(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })
    }

    const handleAdd = (e) => {
        e.preventDefault();

        let rol = {
            nombre: nombre
        }

        APIInvoker.invokePOST('/roles/createRol', rol, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Ok"
                }
            );
            handleList();
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );

        })
        reset();

    }

    const handleDelete = (id, e) => {
        e.preventDefault();

        let rol = {
            idRol: id
        }

        APIInvoker.invokeDELETE('/roles/deleteRol', rol, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Ok",
                }
            );
            handleList();
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })



    }

    const handleEdit = (id, e) => {
        e.preventDefault();
/*
        let rol = {
            idRol: id,
            nombre: ''
        }
*/
        Swal.fire({
            title: 'Editar Rol',
            input: 'text',
            inputPlaceholder: 'Nombre del rol',
            confirmButtonText: "Aceptar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed){

                APIInvoker.invokePUT('/roles/updateRol', {idRol: id, nombre: result.value}, data => {
                    Swal.fire({
                            title: data.message,
                            icon: "success",
                            confirmButtonText: "Ok",
                        }
                    );
                    //console.log(result.value)
                    //console.log(rol.Nombre)
                    handleList();
                }, error => {
                    Swal.fire({
                            title: error.message,
                            icon: "error",
                            confirmButtonText: "Ok"
                        }
                    );
                    handleList();
                })
            }
        })
    }
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-7">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Id
                                    </th>
                                    <th scope="col">
                                        Rol
                                    </th>
                                    <th>
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                roles.length > 0 ?
                                roles.map((rol) => (
                                    <tr key={rol.idRol}>
                                        <th >{rol.idRol}</th>
                                        <td >{rol.nombre}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary me-3"
                                                onClick={(e) => handleEdit(rol.idRol, e)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={ (e) => handleDelete(rol.idRol, e)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                        <tr>
                                            <td>
                                                No existen roles
                                            </td>
                                        </tr>
                                    )
                            }

                            </tbody>
                        </table>
                    </div>

                    <div className="col-5">
                        <h4>Agregar Rol</h4>
                        <hr />

                        <form className="d-grid gap-2" onSubmit={handleAdd}>
                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                className="form-control"
                                placeholder="Rol nuevo"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
