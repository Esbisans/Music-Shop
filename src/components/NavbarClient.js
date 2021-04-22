import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import {HiOutlineLogout} from "react-icons/hi";

export const NavbarClient = () => {

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
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>

                    <div className="navbar-nav d-flex">
                        <NavLink exact activeClassName="active" to="/main/cart" className="nav-item nav-link"><FaShoppingCart />  Carrito</NavLink>
                    </div>

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