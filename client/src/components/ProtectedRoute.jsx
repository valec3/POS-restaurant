/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
    }) => {
    if (!isAllowed) {
        // If the user is not allowed, redirect them.
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
};


export default ProtectedRoute