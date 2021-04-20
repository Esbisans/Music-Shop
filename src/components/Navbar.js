import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { FaUserTag, FaBoxes, FaUserPlus } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img
                        src={`./assets/shop2.png`}
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

                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="/roles" className="nav-item nav-link"><FaUserTag />  Roles</NavLink>
                        <NavLink exact activeClassName="active" to="/productos" className="nav-item nav-link"><FaBoxes/> Productos</NavLink>
                        <NavLink exact activeClassName="active" to="/signup" className="nav-item nav-link"><FaUserPlus/> Sign-up</NavLink>
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