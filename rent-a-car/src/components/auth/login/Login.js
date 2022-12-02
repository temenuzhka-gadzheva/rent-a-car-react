import { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../interceptors/http-utils/customer-requests";
import './Login.scss';

export function Login() {

    const navigate = useNavigate();
    const [customer, setCusotmer] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setCusotmer((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        login(customer).then(() => {
            navigate('/customers-list');
        }).catch(error => setError(error.message))
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" action="" method="" onSubmit={onFormSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    {error && <span className="text-danger">{error}</span>}
                    <Form.Group controlId="formBasicEmail" className="field">
                        <Form.Label>Email address</Form.Label>
                        <span className="input">
                            <Form.Control type="email" placeholder="Enter email" name="email" value={customer.email} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="field">
                        <Form.Label>Password</Form.Label>
                        <span className="input">
                            <Form.Control type="password" placeholder="Enter password" name="password" value={customer.password} onChange={onInputChange} required />
                        </span>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="button submit">
                        Login
                    </Button>

                    <Link to='/register'>Sign up</Link>
                </fieldset>
            </form>
        </section>
    )
}