import React from "react";
import { Navigate } from "react-router";

const Logout = () => {

    window.localStorage.removeItem('token');
    console.log("Halo ini adalah logout system");
    return <Navigate to="/Login"/>

}

export default Logout

