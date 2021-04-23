import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import {HiOutlineLogout} from "react-icons/hi";
import APIInvoker from "../components/utils/APIInvoker";
import {useForm} from "../hooks/useForm";
import Swal from "sweetalert2";

export const NavbarClient = ({props}) => {

    const {history, location} = props

    const [formValues, handleInputChange] = useForm({
        navbar: ''
    });

    const {navbar} = formValues;

    const search = (e) => {
        e.preventDefault();
        APIInvoker.invokeGET(`/products/Search/${navbar}`, data => {
            console.log(data.data)
            console.log(history)
            console.log(location)
            history.push(
                {
                    pathname: '/main/home',
                    state: data.data
                }
            )
        },err =>{
            Swal.fire({
                    title: err.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })
    }

    const handleS = () => {

    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
            <div className="container-fluid">

                <Link
                    className="navbar-brand"
                    to="/main"
                >
                    <img
                        src={`../assets/shop2.png`}
                        width="30" height="30"
                        alt="logo"
                        id="image"
                        className="me-2"
                    />
                    MusicShop
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent" >

                    <form className="d-flex flex-fill mx-5">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            autoComplete="off"
                            aria-label="Search"
                            name="navbar"
                            value={navbar}
                            onChange={handleInputChange}
                        />
                            <button className="btn btn-outline-light" type="submit" onClick={search} >Search</button>
                    </form>

                    <div className="d-flex ms-auto text-end">
                        <div className="navbar-nav ">
                            <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Logout <HiOutlineLogout /></NavLink>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}