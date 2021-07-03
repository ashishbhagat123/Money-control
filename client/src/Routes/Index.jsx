import React, { useContext } from "react";
import { Switch, Route } from "react-router";
import Layout from "../Component/Layout/Index";
import PrivateRoute from "./PrivateRoutes/Index";
import {AuthContext} from "../Context/Auth/Index"

const Router = () => {
    const {isAuthenticated } = useContext(AuthContext)


    return (    
        <div>
            <Switch>
                <Route exact path="/signup">
                    <Layout
                        pageName={"Signup"}
                        header={false}
                        sidebar={false}
                    />
                </Route>
                <Route exact path="/login">
                    <Layout pageName={"LogIn"} header={false} sidebar={false} />
                </Route>
                <PrivateRoute isAuth = {isAuthenticated}  exact path="/">
                    <Layout
                        pageName={"Dashboard"}
                        header={true}
                        sidebar={true}
                    />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default Router;
