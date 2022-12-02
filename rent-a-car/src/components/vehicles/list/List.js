// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../context/auth-context";
// import { deleteVehicleById, getVehicles } from "../../../utils/http-utils/vehicle-requests";
// import { VehicleCard } from "./VehicleCard/VehicleCard";

// export function VehicleList() {

//   const [vehicles, setVehicles] = useState([]);
//   const {user} = useContext(AuthContext);

//   useEffect(() => {

//     getVehicles().then(response => {
//       setVehicles(response.data);
//     })

//   }, []);
//   //document.querySelector("[href='/vehicle-list']").classList.add('bg-red');

//   const onDeleteHandler = async (id) => {
//     await deleteVehicleById(id);
//     setVehicles(prevVehicles => {
//       return prevVehicles.filter(vehicle => vehicle.id !== id);
//     });
//   }




//   return (
//     <div className="vehicle-list" >
//       {user &&
//         <div className="link-container">
//           <Link to="/vehicle-list/add" className="add">
//             Add vehicle
//           </Link>
//         </div>}
//       {vehicles.map(vehicle => {
//         return <VehicleCard key={vehicle.id}
//           vehicle={vehicle}
//           deleteVehicle={onDeleteHandler} />
//       })}

//     </div>
//   );
// }

import { useEffect, useState } from "react";
// import { getLoggedCustomer } from "../../interceptors/http-utils/customer-requests";
import { deleteVehicle, getAllVehicles, getVehicleById } from "../../interceptors/http-utils/vehicle-requests";
import { VehicleCard } from "../card/Card";
import './List.scss';

export function VehicleList() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {

        getAllVehicles().then(response => {
            setVehicles(response.data);
        })

    }, []);

    const onDeleteHandler = async (id) => {
        let vehicle = await getVehicleById(id);
        await deleteVehicle(vehicle);

        setVehicles(prevVehicles => {
            return prevVehicles.filter(vehicle => vehicle.id !== id);
        });
    }

    return (

        <section id="dashboard-page" className="dashboard" display="inline-flex">
            <h1>Welcome to rent a car system</h1>
            <ul className="other-movies-list">
                {vehicles.map(vehicle =>
                    <VehicleCard key={vehicle.id} vehicle={vehicle} deleteVehicle={onDeleteHandler} />
                )}
            </ul>
        </section>
    );
}