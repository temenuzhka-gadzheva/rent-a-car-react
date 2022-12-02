// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { rent } from "../../../rents/renting";


// export function VehicleRent() {

//     const params = useParams();
//     const  user  = localStorage.getItem('loggedUser')
//     const navigate = useNavigate();

//     const [rentalEvent, setRentalEvent] = useState({
//         vehicleId: params.id,
//         customerId: user.id,
//         startDate: '',
//         endDate: '',
//     });
//     const onInputChange = (e) => {
//         setRentalEvent({ ...rentalEvent, [e.target.name]: e.target.value });
//     }
//     const onFormSubmit = (e) => {
//         e.preventDefault();

//         rent(rentalEvent, user);
//         navigate('/rentals');
//     }

//     return (

//         <div className="vehicle-rent">
//             <form onSubmit={onFormSubmit}>
//                 <div className="row">
//                     <label htmlFor="startDate">Start date</label>
//                     <input value={rentalEvent.startDate}
//                         onChange={onInputChange} type="date"
//                         placeholder="Enter start date" name="startDate" id="startDate" required></input>
//                 </div>
//                 <div className="row">
//                     <label htmlFor="endDate">End date</label>
//                     <input value={rentalEvent.endDate}
//                         onChange={onInputChange} type="date"
//                         placeholder="Enter end date" name="endDate" id="endDate" required></input>

//                 </div>
//                 <div className="row">
//                     <button type="submit">Rent</button>
//                 </div>
//             </form>
//         </div>




//     )




// }

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLoggedCustomer } from "../../interceptors/http-utils/customer-requests";
import { renting } from "../../../rents/renting";

export function VehicleRent() {

    const params = useParams();
    const loggedCustomer = getLoggedCustomer();
    const navigate = useNavigate();

    const [rentalEvent, setRentalEvent] = useState({
        vehicleId: params.id,
        customerId: loggedCustomer.id,
        startDate: '',
        endDate: '',
    });
    const onInputChange = (e) => {
        setRentalEvent({ ...rentalEvent, [e.target.name]: e.target.value });
    }
    const onFormSubmit = (e) => {
        e.preventDefault();

        renting(rentalEvent, loggedCustomer);
        navigate('/rentals');
    }

    return (

        <div className="vehicle-rent">
            <form onSubmit={onFormSubmit}>
                <div className="row">
                    <label htmlFor="startDate">Start date</label>
                    <input value={rentalEvent.startDate}
                        onChange={onInputChange} type="date"
                        placeholder="Enter start date" name="startDate" id="startDate" required></input>
                </div>
                <div className="row">
                    <label htmlFor="endDate">End date</label>
                    <input value={rentalEvent.endDate}
                        onChange={onInputChange} type="date"
                        placeholder="Enter end date" name="endDate" id="endDate" required></input>

                </div>
                <div className="row">
                    <button variant="primary" type="submit" className="button submit">Rent</button>
                </div>
            </form>
        </div>




    )




}