import { Navigate } from "react-router-dom";
import { getLoggedCustomer } from "../http-utils/customer-requests";
;


export const AuthenticatedRoute = ({ children }) => {
    const customer = getLoggedCustomer();

    if (!customer) {
        return <Navigate to='/login' />;
    }

    return children;
}