// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom"
// import { getVehicleById, updateVehicle } from "../../../../utils/http-utils/vehicle-requests";
// import './VehicleEdit.scss'
// export function VehicleEdit() {
//     const [vehicle, setVehicle] = useState({});
//     const params = useParams();
//     const navigate = useNavigate();
//     useEffect(() => {
//         getVehicleById(params.id).then(response => {
//             setVehicle(response.data);
//         })

//     }, []);
//     function onFormSubmit(е) {
//         е.preventDefault();

//         vehicle.numberOfSeats = Number(vehicle.numberOfSeats);
//         vehicle.pricePerDay = Number(vehicle.pricePerDay);
//         vehicle.year = Number(vehicle.year);
//         vehicle.count = Number(vehicle.count);

//         if (vehicle.year < 1900 || vehicle.year > 2022) {
//             alert('Year must be between 1900 and 2022');
//             return;
//         }
//         if (vehicle.numberOfSeats < 1 || vehicle.numberOfSeats > 10) {
//             alert('Number of seats must be between 1 and 10');
//             return;

//         }
//         if (vehicle.pricePerDay < 1 || vehicle.pricePerDay > 1000) {
//             alert('Price per day must be between 1 and 1000');
//             return;
//         }
//         if (vehicle.count < 0 || vehicle.count > 100) {
//             alert('Count must be between 0 and 100');
//             return;
//         }


//         updateVehicle(vehicle).then(response => {
//             navigate(`/vehicle-list/${vehicle.id}`);
//         })

//     }
//     const onInputChange = (e) => {
//         setVehicle({ ...vehicle, [e.target.name]: e.target.value });
//     }
//     const cancel = () => {
//         navigate(`/vehicle-list/${vehicle.id}`);
//     }

//     return (
//         <div className="vehicle-edit">
//             <div className="info">

//                 {/* {error && <p className="error">{error}</p>} */}

//                 <form onSubmit={onFormSubmit}>
//                     <h3>Edit Vehicle</h3>
//                     <h4>{vehicle.brand} {vehicle.model}</h4>
//                     <hr />
//                     <div className="row">
//                         <label htmlFor="year"><b>Construction year</b></label>
//                         <input value={vehicle.year} onChange={onInputChange} type="text" placeholder="Enter year" name="year" id="year" required />
//                     </div>
//                     <div className="row">
//                         <label htmlFor="fuelType"><b>Fuel type</b></label>
//                         <select value={vehicle.fuelType} onChange={onInputChange} placeholder="Enter fuel type" name="fuelType" id="fuelType" required >
//                             <option value="" selected disabled hidden>--Choose here--</option>
//                             {['Diesel', 'Electric', 'Hybrid', 'Petrol'].map((fuelType, index) => {
//                                 return <option key={index} value={fuelType}>{fuelType}</option>
//                             })}
//                         </select>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
//                         <input value={vehicle.numberOfSeats} onChange={onInputChange} type="number" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
//                     </div>
//                     <div className="row">
//                         <label htmlFor="pricePerDay"><b>Price/day</b></label>
//                         <input value={vehicle.pricePerDay} onChange={onInputChange} type="number" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
//                     </div>
//                     <div className="row">
//                         <label htmlFor="picture"><b>Image url</b></label>
//                         <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
//                     </div>
//                     <button type="submit" className="registerbtn">Save</button>
//                     <button className="registerbtn" onClick={cancel}>Cancel</button>


//                 </form>

//             </div >
//         </div >

//     )
// }
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVehicleById, updateVehicle } from "../../interceptors/http-utils/vehicle-requests";

export function VehicleEdit() {

    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getVehicleById(params.id).then(response => {
            setVehicle(response.data);
        })

    }, []);

    function onFormSubmit(е) {
        е.preventDefault();

        vehicle.numberOfSeats = Number(vehicle.numberOfSeats);
        vehicle.pricePerDay = Number(vehicle.pricePerDay);
        vehicle.year = Number(vehicle.year);
        vehicle.count = Number(vehicle.count);

        if (vehicle.numberOfSeats < 1 || vehicle.numberOfSeats > 10) return alert('Number of seats must be between 1 and 10');
        if (vehicle.year < 1900 || vehicle.year > 2022) return alert('Year must be between 1900 and 2022');

        if (vehicle.pricePerDay < 1 || vehicle.pricePerDay > 1000) return alert('Price per day must be between 1 and 1000');

        if (vehicle.count < 0 || vehicle.count > 50) return alert('Count must be between 0 and 50');


        updateVehicle(vehicle).then(response => {
            navigate(`/vehicle-list/${vehicle.id}`);
        })

    }
    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }


    return (
        <div className="vehicle-edit">
            <div className="info">

                <form onSubmit={onFormSubmit}>
                    <h3>Edit Vehicle</h3>
                    <h4>{vehicle.brand} {vehicle.model}</h4>
                    <hr />
                    <div className="row">
                        <label htmlFor="year"><b>Construction year</b></label>
                        <input value={vehicle.year} onChange={onInputChange} type="text" placeholder="Enter year" name="year" id="year" required />
                    </div>
                    <div className="row">
                        <label htmlFor="fuelType"><b>Fuel type</b></label>
                        <select value={vehicle.fuelType} onChange={onInputChange} placeholder="Enter fuel type" name="fuelType" id="fuelType" required >
                            <option value="" selected disabled hidden>--Choose here--</option>
                            {['Diesel', 'Electric', 'Hybrid', 'Petrol'].map((fuelType, index) => {
                                return <option key={index} value={fuelType}>{fuelType}</option>
                            })}
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
                        <input value={vehicle.numberOfSeats} onChange={onInputChange} type="number" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
                    </div>
                    <div className="row">
                        <label htmlFor="pricePerDay"><b>Price/day</b></label>
                        <input value={vehicle.pricePerDay} onChange={onInputChange} type="number" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
                    </div>
                    <div className="row">
                        <label htmlFor="picture"><b>Image url</b></label>
                        <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
                    </div>
                    <button variant="primary" type="submit" className="button submit">Save</button>

                </form>

            </div >
        </div >

    )
}