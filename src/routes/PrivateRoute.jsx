import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

/* eslint-disable react/prop-types */

const PrivateRoute = ({ children }) => {
    const cookie = new Cookies();
    const token =  cookie.get('token', { path: '/' })
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;