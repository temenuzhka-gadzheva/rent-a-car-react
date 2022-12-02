// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom"
// import { AuthContext } from "../../../../context/auth-context";
// import { getVehicleById } from "../../../../utils/http-utils/vehicle-requests";
// import './VehicleInfo.scss'
// export function VehicleInfo() {
//     const [vehicle, setVehicle] = useState({});
//     const params = useParams();
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);

//     useEffect(() => {
//         getVehicleById(params.id).then(response => {
//             setVehicle(response.data);
//         })
//     }, []);
//     const editVehicle = () => {
//         navigate(`/vehicle-list/edit/${vehicle.id}`);
//     }


//     return (
//         <div className="vehicle-info">
//             <div className="info">
//                 <div className="text">
//                     <h2>{vehicle.brand} {vehicle.model}</h2>
//                     <p>Construction year: {vehicle.year}</p>
//                     <p>Fuel type: {vehicle.fuelType}</p>
//                     <p>Number of seats: {vehicle.numberOfSeats}</p>
//                     <p>Price/day: {vehicle.pricePerDay}</p>
//                     <p>Available: {vehicle.count}</p>
//                     {user && user.role === 'admin' &&
//                         <button onClick={editVehicle}>Edit</button>
//                     }
//                 </div>
//                 <img src={vehicle.picture} alt="None" />
//             </div>
//         </div>

//     )
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getLoggedCustomer } from "../../interceptors/http-utils/customer-requests";
import { getVehicleById, deleteVehicle } from "../../interceptors/http-utils/vehicle-requests";

export function VehicleDetails() {


    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const loggedCustomer = getLoggedCustomer();

    useEffect(() => {
        getVehicleById(params.id).then(response => {
            setVehicle(response.data);
        })
    }, []);

    const editVehicle = () => {
        navigate(`/vehicle-list/edit/${vehicle.id}`);
    }


    const onDeleteHandler = async (id) => {
        let vehicle = await getVehicleById(id);
        await deleteVehicle(vehicle);

        setVehicle(prevVehicles => {
            return prevVehicles.filter(vehicle => vehicle.id !== id);
        });
    }
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>{vehicle.brand} {vehicle.model}</h1>
            <p className="img"><img src={vehicle.picture} alt="something wrong!" /></p>
            <ul class="other-movies-list">

                <div class="movie-information">
                    <p>Construction year: {vehicle.year}</p>
                    <p>Fuel type: {vehicle.fuelType}</p>
                    <p>Number of seats: {vehicle.numberOfSeats}</p>
                    <p>Price/day: {vehicle.pricePerDay}</p>
                    <p>Available: {vehicle.count}</p>
                    {loggedCustomer && loggedCustomer.role === 'admin' &&
                        <button onClick={editVehicle} variant="primary" className="button submit">Edit</button> && 
                        <button onClick={onDeleteHandler} variant="primary" className="button submit">Delete</button>
                    }
                </div>

            </ul>
        </section>

    )
}