import React from 'react';
import {useForm} from "../hooks/useForm";
import '../styles/Login.css'
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Swal from 'sweetalert2'
import APIInvoker from "../components/utils/APIInvoker";

export const Login = ({history}) => {

    const [formValues, handleInputChange] = useForm({
       user: '',
       password: '',
    });

    const {user, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    const iniciarSesion = () => {


        let users = {
            username: user,
            password: password
        }


        APIInvoker.invokePOST('/users/login',users,data => {

                window.localStorage.setItem('token', data.token)
                //window.location= '/'
                     const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: false,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: data.message
                    })
                history.push('/home')
        }, error => {
                Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Reintentar"
                    }
                );
            }
        )
    }

    return (
        <>

            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img
                                src={`./assets/shop.jpg`}
                                alt="logo"
                            />
                        </div>
                        <form className="container" onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <div className="row">
                                <div className="input-group mt-3">
                                    <span className="input-group-text"> <FaUserAlt color="#2C3E50" /> </span>
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
                                <div className="input-group mt-4">
                                    <span className="input-group-text"> <FaLock color="#2C3E50" /> </span>
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
                                <div className="col d-grid gap-2">
                                    <button className="btn btn-primary mt-4 mb-2" onClick={iniciarSesion}> <i className="fas fa-sign-in-alt"></i>  Iniciar Sesión
                                    </button>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col d-grid gap-2">
                                    <button className="btn btn-outline-dark mb-4" onClick={() => {
                                        history.push('/signupclient')
                                    }}> Crear cuenta
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};
