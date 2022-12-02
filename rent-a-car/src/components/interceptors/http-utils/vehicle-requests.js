import axios from "axios";

const apiUrl = 'http://localhost:3000/vehicles';

export function getAllVehicles() {
  return axios.get(apiUrl);
}
export function getVehicleById(id) {
  return axios.get(`${apiUrl}/${id}`);
}

export function createVehicle(vehicle) {
  return axios.post(`${apiUrl}/`, vehicle);
}

export function updateVehicle(vehicle) {
  return axios.put(`${apiUrl}/${vehicle.id}`, vehicle);
}

export function deleteVehicle(id) {
  return axios.delete(`${apiUrl}/${id}`);
}

export async function reduceVehicles(id) {

  const vehicle = (await getVehicleById(id)).data;

  if (vehicle.count < 0) {
    alert('No vehicles available with this id');
    return false;
  }

  return axios.patch(`${apiUrl}/${id}`, { count: vehicle.count - 1 });
}