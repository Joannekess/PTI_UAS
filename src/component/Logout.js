import React from "react";
import { Navigate } from "react-router";

const Logout = () => {

    window.localStorage.removeItem('token');
    console.log("Halo ini adalah logout system");
    window.location.href = "/Login" // untuk meng refresh halaman dan juga menuju ke halaman yang di inginkan
    // return <Navigate to="/Login"/> // ini hanya menuju ke halaman yang di inginkan

}

export default Logout

