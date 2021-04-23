import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import '../components/main.css'
import {Main} from "../components/Main";
import {Cart} from "../components/Cart";
import {NavbarClient} from "../components/NavbarClient";
import {Sales} from "../components/Sales";

export const UserRoutes = () => {
    return(
        <>
            <NavbarClient/>
            <div className="container sm-3">
                <Switch>

                    <Route exact path="/main/home" component={Main}/>
                    <Route exact path="/main/cart" component={Cart}/>
                    <Route exact path="/main/sales" component={Sales}/>

                    <Redirect to="/main/home"/>
                </Switch>

            </div>
        </>
    );
}