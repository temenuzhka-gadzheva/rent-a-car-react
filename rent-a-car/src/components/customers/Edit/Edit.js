import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById, getLoggedCustomer, logout, saveCustomer } from "../../interceptors/http-utils/customer-requests";


export function CustomerEdit() {

    const currentCustomer = getLoggedCustomer();
    const [customer, setCustomer] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    //const [error, setError] = useState(null);
    useEffect(() => {
        getCustomerById(params.id).then(response => {
            setCustomer(response.data);
        })

    }, []);

    function onFormSubmit(е) {

        е.preventDefault();

        if (!/^[0-9]+$/.test(customer.phoneNumber)) {
            console.log(customer.phoneNumber);
            return alert('Phone number should contain only digits!');

        }

        saveCustomer(customer).then(response => {
            logout();
            navigate(`/customers`);
        })

    }
    const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    }


    return (

        <section id="edit-page" class="edit">
            <form id="edit-form" onSubmit={onFormSubmit}>
                <fieldset>
                    <legend>Edit Customer</legend>
                    <p class="field">
                        <label for="fullName">Full name</label>
                        <span class="input">
                            <input type="text" name="full name" id="fullName" placeholder="Full Name" formControlName="fullName" value={currentCustomer.fullName} onChange={onInputChange} />
                        </span>
                    </p>
                    <p class="field">
                        <label for="emailAddress">Email address</label>
                        <span class="input">
                            <input type="text" name="email address" id="emailAddress" placeholder="Email address" formControlName="email" value={currentCustomer.email} onChange={onInputChange} />
                        </span>
                    </p>
                    <p class="field">
                        <label for="address">Address</label>
                        <span class="input">
                            <input type="text" name="address" id="address" placeholder="Address" formControlName="address" value={currentCustomer.address} onChange={onInputChange} />
                        </span>
                    </p>

                    <p class="field">
                        <label for="picture">Picture</label>
                        <span class="input">
                            <input type="text" name="picture" id="picture" placeholder="Picture" formControlName="picture" value={currentCustomer.picture} onChange={onInputChange} />
                        </span>
                    </p>
                    <p class="field">
                        <label for="phone">Phone</label>
                        <span class="input">
                            <input type="text" name="phone" id="phone" placeholder="Phone" formControlName="phone" value={currentCustomer.phone} onChange={onInputChange} />
                        </span>
                    </p>

                    <input class="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>

    )

}