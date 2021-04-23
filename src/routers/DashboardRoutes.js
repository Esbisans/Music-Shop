import React from 'react';
import {Navbar} from "../components/Navbar";
import {Roles} from "../components/Roles";
import {Productos} from "../components/Productos";
import {Home} from "../components/Home";
import {Route, Switch, Redirect} from "react-router-dom";
import '../components/main.css'
import {Registry} from "../components/Registry";

export const DashboardRoutes = () => {
    return(
        <>
            <Navbar />
            <div className="container sm-3">
                <Switch>
                    <Route exact path="/root/home" component={Home}/>
                    <Route exact path="/root/roles" component={Roles}/>
                    <Route exact path="/root/productos" component={Productos}/>
                    <Route exact path="/root/registry" component={Registry}/>

                    <Redirect to="/root/home"/>
                </Switch>

            </div>
        </>
    );
}