import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Login} from "../components/Login";
import {DashboardRoutes} from "./DashboardRoutes";
import {Signup} from "../components/Signup";
import {SignupClient} from "../components/SignupClient";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/signupclient" component={SignupClient}/>
                        <Route path="/" component={DashboardRoutes}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

