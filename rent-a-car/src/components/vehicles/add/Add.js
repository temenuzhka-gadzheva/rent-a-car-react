// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { saveVehicle } from "../../../interceptors/http-utils/vehicle-requests";

// export function VehicleAdd() {
//     const navigate = useNavigate();

//     const [vehicle, setVehicle] = useState({
//         model: '',
//         brand: '',
//         picture: '',
//         year: 0,
//         fuelType: '',
//         numberOfSeats: 0,
//         pricePerDay: 0,
//         count: 0,
//         type: ''
//     });

//     const onFormSubmit = (e) => {
//         e.preventDefault();

//         vehicle.numberOfSeats = Number(vehicle.numberOfSeats);
//         vehicle.pricePerDay = Number(vehicle.pricePerDay);
//         vehicle.year = Number(vehicle.year);
//         vehicle.count = Number(vehicle.count);

//         if (vehicle.year < 1900 || vehicle.year > 2022) {
//             return alert('Year must be between 1900 and 2022');
//         }
//         if (vehicle.numberOfSeats < 1 || vehicle.numberOfSeats > 10) {
//             return alert('Number of seats must be between 1 and 10');
//         }
//         if (vehicle.pricePerDay < 1 || vehicle.pricePerDay > 1000) {
//             return alert('Price per day must be between 1 and 1000');
//         }
//         if (vehicle.count < 0 || vehicle.count > 100) {
//             return alert('Count must be between 0 and 100');
//         }

//         saveVehicle(vehicle);
//         navigate('/vehicle-list');
//     }

//     const onInputChange = (e) => {

//         setVehicle({ ...vehicle, [e.target.name]: e.target.value });
//     }

//     return (
//         <div className="vehicle-add">
//             <form action="" onSubmit={onFormSubmit}>

//                 <h3>Add Vehicle</h3>
//                 <hr />
//                 <div className="row">
//                     <label htmlFor="brand"><b>Brand</b></label>
//                     <input value={vehicle.brand} onChange={onInputChange} type="text" placeholder="Enter brand" name="brand" id="brand" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="model"><b>Model</b></label>
//                     <input value={vehicle.model} onChange={onInputChange} type="text" placeholder="Enter model" name="model" id="model" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="year"><b>Construction year</b></label>
//                     <input value={vehicle.year} onChange={onInputChange} type="number" placeholder="Enter year" name="year" id="year" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="fuelType"><b>Fuel type</b></label>
//                     <select value={vehicle.fuelType} onChange={onInputChange} placeholder="Enter fuel type" name="fuelType" id="fuelType" required >
//                         <option value="" selected disabled hidden>--Choose here--</option>
//                         {['Electric', 'Hybrid', 'Diesel', 'Petrol'].map((fuelType, index) => {
//                             return <option key={index} value={fuelType}>{fuelType}</option>
//                         })}
//                     </select>

//                 </div>
//                 <div className="row">
//                     <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
//                     <input value={vehicle.numberOfSeats} onChange={onInputChange} type="number" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="picture"><b>Image url</b></label>
//                     <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="pricePerDay"><b>Price per day</b></label>
//                     <input value={vehicle.pricePerDay} onChange={onInputChange} type="text" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="count"><b>Count</b></label>
//                     <input value={vehicle.count} onChange={onInputChange} type="text" placeholder="Enter count" name="count" id="count" required />
//                 </div>
//                 <div className="row">
//                     <label htmlFor="type"><b>Type</b></label>
//                     <select value={vehicle.type} onChange={onInputChange} placeholder="Enter type" name="type" id="type" required >
//                         <option value="" selected disabled hidden>--Choose here--</option>
//                         {['SUV', 'cargo', 'economy', 'estate', 'luxury',].map((type, index) => {
//                             return <option key={index} value={type}>{type}</option>
//                         })}
//                     </select>
//                 </div>

//                 <button className="registerbtn" type="submit">Add</button>

//             </form>


//         </div>
//     );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createVehicle } from "../../interceptors/http-utils/vehicle-requests";
import './Add.scss'

export function VehicleAdd() {
    const navigate = useNavigate();

    const [vehicle, setVehicle] = useState({
        model: '',
        brand: '',
        picture: '',
        year: 0,
        fuelType: '',
        numberOfSeats: 0,
        pricePerDay: 0,
        count: 0,
        type: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        vehicle.year = Number(vehicle.year);
        vehicle.count = Number(vehicle.count);
        vehicle.numberOfSeats = Number(vehicle.numberOfSeats);
        vehicle.pricePerDay = Number(vehicle.pricePerDay);

        if (vehicle.numberOfSeats < 1 || vehicle.numberOfSeats > 10) return alert('Number of seats must be between 1 and 10');
        if (vehicle.year < 1900 || vehicle.year > 2022) return alert('Year must be between 1900 and 2022');

        if (vehicle.pricePerDay < 1 || vehicle.pricePerDay > 1000) return alert('Price per day must be between 1 and 1000');

        if (vehicle.count < 0 || vehicle.count > 50) return alert('Count must be between 0 and 50');


        createVehicle(vehicle);
        navigate('/vehicle-list');
    }

    const onInputChange = (e) => {

        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }

    return (
        <div className="vehicle-add">
            <form action="" onSubmit={onFormSubmit}>

                <h3>Add Vehicle</h3>
                <hr />
                <div className="row">
                    <label htmlFor="brand"><b>Brand</b></label>
                    <input value={vehicle.brand} onChange={onInputChange} type="text" placeholder="Enter brand" name="brand" id="brand" required />
                </div>
                <div className="row">
                    <label htmlFor="model"><b>Model</b></label>
                    <input value={vehicle.model} onChange={onInputChange} type="text" placeholder="Enter model" name="model" id="model" required />
                </div>
                <div className="row">
                    <label htmlFor="year"><b>Construction year</b></label>
                    <input value={vehicle.year} onChange={onInputChange} type="text" placeholder="Enter year" name="year" id="year" required />
                </div>
                <div className="row">
                    <label htmlFor="fuelType"><b>Fuel type</b></label>
                    <select value={vehicle.fuelType} onChange={onInputChange} placeholder="Enter fuel type" name="fuelType" id="fuelType" required >
                        {['Electric', 'Hybrid', 'Diesel', 'Petrol'].map((fuelType, index) => {
                            return <option key={index} value={fuelType}>{fuelType}</option>
                        })}
                    </select>

                </div>
                <div className="row">
                    <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
                    <input value={vehicle.numberOfSeats} onChange={onInputChange} type="text" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
                </div>
                <div className="row">
                    <label htmlFor="picture"><b>Image url</b></label>
                    <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
                </div>
                <div className="row">
                    <label htmlFor="pricePerDay"><b>Price per day</b></label>
                    <input value={vehicle.pricePerDay} onChange={onInputChange} type="text" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
                </div>
                <div className="row">
                    <label htmlFor="count"><b>Count</b></label>
                    <input value={vehicle.count} onChange={onInputChange} type="text" placeholder="Enter count" name="count" id="count" required />
                </div>
                <div className="row">
                    <label htmlFor="type"><b>Type</b></label>
                    <select value={vehicle.type} onChange={onInputChange} placeholder="Enter type" name="type" id="type" required >
                        {['luxury', 'SUV', 'cargo', 'economy', 'estate'].map((type, index) => {
                            return <option key={index} value={type}>{type}</option>
                        })}
                    </select>
                </div>

                <button variant="primary" type="submit" className="button submit">Add</button>
            </form>
        </div>
    );
}