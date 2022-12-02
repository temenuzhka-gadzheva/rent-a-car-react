import axios from "axios";

const apiUrl = 'http://localhost:3000/customers';

const loggedCustomerKey = "loggedCustomer";


export async function register(customer) {
    const existingCustomer = (await axios.get(`${apiUrl}?email=${customer.email}`)).data;

    if (existingCustomer.length > 0) {
        throw new Error('Customer with this email already exists.');
    }

    return saveCustomer(customer);
}

export async function login(user) {

    const allCustomers = (await getAllCustomers()).data;

    const foundCustomer = allCustomers.find(u => u.email === user.email && u.password === user.password);

    if (!foundCustomer)
        throw new Error('Invalid username/password');

    localStorage.setItem(loggedCustomerKey, JSON.stringify(foundCustomer));

    return foundCustomer;
}

export async function logout() {
    localStorage.removeItem(loggedCustomerKey);
}

export function getLoggedCustomer() {
    return JSON.parse(localStorage.getItem(loggedCustomerKey));
}

export function getAllCustomers() {
    return axios.get(apiUrl);
}

export function getCustomerById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteCustomer(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveCustomer(customer) {

    if (customer.id) {
        return axios.put(`${apiUrl}/${customer.id}`, customer);
    }

    return axios.post(`${apiUrl}`, customer);
}

