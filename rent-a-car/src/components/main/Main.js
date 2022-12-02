import { Route, Routes } from "react-router-dom";
import { Customer } from "../customers/Customer";
import { Dashboard } from "../dashboard/Dashboard";
import { VehicleList } from "../vehicles/list/List";
import { Register } from "../auth/register/Register";
import { Login } from "../auth/login/Login";
import { useEffect, useState } from "react";
import { NonAuthenticatedGuard } from "../interceptors/guards/NonAuthenticatedGuard";
import { AuthenticatedRoute } from "../interceptors/guards/AuthenticatedRoute";
import { VehicleEdit } from "../vehicles/edit/Edit";
import { VehicleAdd } from "../vehicles/add/Add";
import { CustomerEdit } from "../customers/Edit/Edit";
import { VehicleRent } from "../vehicles/rent-a-car/Rent";
import { VehicleDetails } from "../vehicles/details/Details";
import { Rental } from "../rental/Rental";
import { getLoggedCustomer } from "../interceptors/http-utils/customer-requests";

function Main() {


    const loggedCustomer = getLoggedCustomer();
    const [customerName, setCustomerName] = useState(null);

    useEffect(() => {
        if (loggedCustomer) {
            setCustomerName(loggedCustomer.name);
        } else {
            setCustomerName(null);
        }

    }, [loggedCustomer]);


    return (
        <main className="main">
            <Routes>
                <Route path="/register" element={<NonAuthenticatedGuard><Register /></NonAuthenticatedGuard>} />
                <Route path="/login" element={<NonAuthenticatedGuard><Login /></NonAuthenticatedGuard>} />

                <Route path="/" element={<Customer />} />
                <Route path="/vehicle-list" element={<VehicleList />} />
                <Route path="/customers" element={<Customer />} />
                <Route path="/customers/edit/:id" element={<AuthenticatedRoute><CustomerEdit /></AuthenticatedRoute>} />
                <Route path="/vehicle-list/add" element={<AuthenticatedRoute><VehicleAdd /></AuthenticatedRoute>} />
                <Route path="/vehicle-list/:id" element={<VehicleDetails />} />
                <Route path="/vehicle-list/edit/:id" element={<AuthenticatedRoute><VehicleEdit /></AuthenticatedRoute>} />
                <Route path="/vehicle-list/rent/:id" element={<AuthenticatedRoute><VehicleRent /></AuthenticatedRoute>} />
                <Route path="/rentals" element={<AuthenticatedRoute><Rental /></AuthenticatedRoute>} />
            </Routes>
        </main>
    )
}

export default Main