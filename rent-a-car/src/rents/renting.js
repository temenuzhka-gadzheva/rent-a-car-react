import { getAllRentalEvents, saveRentalEvent } from "../components/interceptors/http-utils/rental-event-requests";
import { getVehicleById, reduceVehicles } from "../components/interceptors/http-utils/vehicle-requests";

export async function renting(rentalEvent, user) {

    const startDate = new Date(rentalEvent.startDate);
    const endDate = new Date(rentalEvent.endDate);
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24);

    let discount = 0;
    let availableVehicles = await reduceVehicles(rentalEvent.vehicleId);

    if (!(availableVehicles)) return;

    if (days < 1) return alert('You can rent a car for 1 or more days!');

    if (days > 3) {
        discount = 5
    } else if (days > 5) {
        discount = 7
    } else if (days > 10) {
        discount = 10
    }


    let userRentalsForLast60Days = (await getAllRentalEvents())
        .data
        .filter(rental => rental.customerId === user.id &&
            new Date(rental.startDate) > new Date(new Date().setDate(new Date().getDate() - 60)));


    if (userRentalsForLast60Days.length >= 2) {
        discount = 15;
    }

    rentalEvent.discount = discount;

    let vehicle = (await getVehicleById(rentalEvent.vehicleId)).data;
    saveRentalEvent(rentalEvent);

    let totalPrice = vehicle.pricePerDay * days * (1 - discount / 100);

    alert(`The total price is ${(totalPrice).toFixed(2)}$. The vehicle has rented for ${days} days.`);
}