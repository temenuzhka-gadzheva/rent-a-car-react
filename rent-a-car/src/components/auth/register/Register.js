import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../interceptors/http-utils/customer-requests";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.scss';


export function Register() {

    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        fullName: '',
        picture: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    });
    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setCustomer((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });

        setError('');
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        register(customer).then(() => {
            navigate('/customers-list');
        })
            .catch(error => setError(error.message));

    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" action="" method="" onSubmit={onFormSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
                    {error && <span className="text-danger">{error}</span>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <span className="input">
                            <Form.Control type="text" placeholder="Enter full name" name="fullName" value={customer.fullName} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <span className="input">
                            <Form.Control type="tel" placeholder="Enter phone" name="phone" value={customer.phone} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Picture</Form.Label>
                        <span className="input">
                            <Form.Control type="text" placeholder="Enter picture" name="picture" value={customer.picture} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <span className="input">
                            <Form.Control type="email" placeholder="Enter email" name="email" value={customer.email} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <span className="input">
                            <Form.Control type="text" placeholder="Enter address" name="address" value={customer.address} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <span className="input">
                            <Form.Control type="password" placeholder="Enter password" name="password" value={customer.password} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="button submit">
                        Register
                    </Button>

                    <Link to='/login'>Sign in</Link>
                </fieldset>
            </form>
        </section>
    )
}