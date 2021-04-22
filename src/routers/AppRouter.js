import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import {Login} from "../components/Login";
import {DashboardRoutes} from "./DashboardRoutes";
import {Signup} from "../components/Signup";
import {SignupClient} from "../components/SignupClient";
import {UserRoutes} from "./UserRoutes";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/signupclient" component={SignupClient}/>
                        <Route path="/main" component={UserRoutes}/>
                        <Route path="/root" component={DashboardRoutes}/>

                        <Redirect to="/main"/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

