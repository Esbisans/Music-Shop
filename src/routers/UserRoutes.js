import React from 'react';
import {Navbar} from "../components/Navbar";
import {Roles} from "../components/Roles";
import {Productos} from "../components/Productos";
import {Home} from "../components/Home";
import {Route, Switch, Redirect} from "react-router-dom";
import '../components/main.css'
import {Main} from "../components/Main";
import {Cart} from "../components/Cart";
import {NavbarClient} from "../components/NavbarClient";

export const UserRoutes = () => {
    return(
        <>
            <NavbarClient/>
            <div className="container sm-3">
                <Switch>

                    <Route exact path="/main/home" component={Main}/>
                    <Route exact path="/main/cart" component={Cart}/>

                    <Redirect to="/main/home"/>
                </Switch>

            </div>
        </>
    );
}