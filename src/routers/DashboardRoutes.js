import React from 'react';
import {Navbar} from "../components/Navbar";
import {Roles} from "../components/Roles";
import {Productos} from "../components/Productos";
import {Home} from "../components/Home";
import {Route, Switch, Redirect} from "react-router-dom";
import '../components/main.css'

export const DashboardRoutes = () => {
    return(
        <>
            <Navbar />
            <div className="container sm-3">
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/roles" component={Roles}/>
                    <Route exact path="/productos" component={Productos}/>

                    <Redirect to="/home"/>
                </Switch>

            </div>
        </>
    );
}