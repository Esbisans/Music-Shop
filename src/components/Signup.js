import React, {useState, useEffect} from 'react';
import {useForm} from "../hooks/useForm";
import { FaHome } from 'react-icons/fa';
import {ImUserPlus} from 'react-icons/im';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";
export const Signup = ({history}) => {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        handleListRol();
    }, []);

    const handleListRol = () => {
        APIInvoker.invokeGET('/roles/showRol', data => {
            setRoles(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })
    }

    const [formValues, handleInputChange] = useForm({
        user: '',
        password: '',
        correo: '',
        nombre:'',
        apellido:'',
        rol: ''
    });

    const {user, password, correo, nombre, apellido, rol} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    const handleAdd = () => {

        let newUser = {
            username: user,
            password: password,
            correo: correo,
            nombre: nombre,
            apellido: apellido,
            idRol: rol
        }

        APIInvoker.invokePOST('/users/signupadmin', newUser, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }
            );
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
        <>
            <div className="modal-dialog text-center" >
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img
                                src={`./assets/shop.jpg`}
                                alt="logo"
                            />
                        </div>
                        <h1>Sign up</h1>
                        <hr/>
                        <form className="container" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group mt-3">

                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Usuario"
                                        name="user"
                                        value={user}
                                        onChange={handleInputChange}

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Contraseña"
                                        autoComplete="off"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre"
                                        name="nombre"
                                        value={nombre}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Apellido"
                                        name="apellido"
                                        value={apellido}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Correo Electronico"
                                        name="correo"
                                        value={correo}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group mt-3">
                                        <select
                                            className="form-select"
                                            name="rol"
                                            value={rol}
                                            onChange={handleInputChange}
                                        >
                                            <option value={-1} >Seleccione un rol</option>
                                            {
                                                roles.map((rol, i) => (
                                                    <option key={rol.idRol} value={rol.idRol} >
                                                        {rol.nombre}
                                                    </option>
                                                ))
                                            }

                                        </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <button className="btn btn-outline-dark my-4" onClick={() => {
                                        history.push('/home')
                                    }}>
                                        <FaHome />
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary my-4" onClick={handleAdd}><ImUserPlus />  Registrarse
                                    </button>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </>
    );

}
