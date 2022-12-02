import { getAllRentalEvents } from "../interceptors/http-utils/rental-event-requests";
import { useState, useEffect } from "react";
import './Rental.scss';

export function Rental() {

    const [rental, setRental] = useState([]);
    useEffect(() => {
        getAllRentalEvents().then(response => {
            setRental(response.data);
        })
    }, [rental]);


    return (
        <table>
            <tr>
                <th>Vehicle ID</th>
                <th>Customer ID</th>
                <th>Start date</th>
                <th>End Date</th>
                <th>Discount %</th>
            </tr>

            {rental.map(rental => {
                return (
                    <tr key={rental.id}>
                        <th>{rental.vehicleId}</th>
                        <th>{rental.customerId}</th>
                        <th>{rental.startDate}</th>
                        <th>{rental.endDate}</th>
                        <th>{rental.discount}</th>
                    </tr>
                )
            })}

        </table>
    )
}