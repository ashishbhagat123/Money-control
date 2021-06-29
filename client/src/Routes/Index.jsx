import React from "react";
import { Switch, Route } from "react-router";
import Layout from "../Component/Layout/Index";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="">
                    <Layout
                        pageName={"Dashboard"}
                        header={true}
                        sidebar={true}
                    />
                </Route>
            </Switch>
        </div>
    );
};

export default Router;
