import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCustomers, getLoggedCustomer, logout } from "../interceptors/http-utils/customer-requests";

export function Customer(props) {
   
    const currentCustomer = getLoggedCustomer();
    const [customers, setCustomers] = useState([]);
    const  loggedCustomer = getLoggedCustomer();

    const navigate = useNavigate();

    useEffect(() => {

        getAllCustomers().then(response => {
            setCustomers(response.data);
        })

    }, []);

    const deleteCustomer = () => {
       logout();
    
        setCustomers(prevCustomers => {
            return prevCustomers.filter(customer => customer.id !== loggedCustomer.id);
        });
    }
    const edit = () => {
        navigate('/customers/edit/' + loggedCustomer.id);
    }

    return (
        <table>
        <tr>
          <th>Full name</th>
          <th>Email address</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>Picture</th>
        </tr>
       
        {customers.map(customer => {
                        return (

                            <tr  key={customer.id}>
                                <td>{customer.fullName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.picture}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.address}</td>
                                {currentCustomer && currentCustomer.fullName === customer.fullName &&
                                    <>
                                         <button className="button" onClick={edit}>Edit</button>
                                        <button className="button" onClick={deleteCustomer}>Delete</button>
                                        
                                    </>
                                }
                            </tr>

                        )
                    })}
      </table>
      
    )
}