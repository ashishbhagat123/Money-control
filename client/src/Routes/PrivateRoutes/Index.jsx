import React from "react";
import Layout from "../../Component/Layout/Index";

const PrivateRoute = ({ isAuth }) => {
    return isAuth ? (
        <Layout sidebar={true} header={true} pageName="Dashboard" />
    ) : (
        <Layout sidebar={false} header={false} pagename="SignUp" />
    );
};

export default PrivateRoute;
