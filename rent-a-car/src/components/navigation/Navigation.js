// import { Link } from 'react-router-dom'
import './Navigation.scss'


// function Navigation({ user }) {

//     return (
//         <header className="header">
//             <nav>

//                 <ul role="list">
//                     <li><Link to="/vehicle-list">Vehicle List</Link></li>
//                     <li><Link to="/customers">Customers</Link></li>
//                     <li><Link to="/rentals">Rentals</Link></li>
//                     {user && <>
//                         <li><Link to="/logout">Logout</Link></li>
//                     </>
//                     }
//                     {!user && <>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/register">Register</Link></li>
//                     </>}
//                 </ul>
//             </nav>
//         </header>
//     )
// } 
//  export default Navigation;

import { useNavigate } from 'react-router-dom';
import { getLoggedCustomer, logout } from '../interceptors/http-utils/customer-requests';


// getLoggedCustomer

function Navigation() {
    const loggedCustomer = getLoggedCustomer();

    //const taskUrl = `/tasks/${loggedCustomer.id}`;
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout().then(() => {
            navigate('/login');
        });
    }

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a className="button-dashboard" href="/customers">Home</a>
                    <a className="button" href="/customers">Customers</a>
                    <a className="button" href="/vehicle-list">Vehicles</a>
                    <a className="button" href="/rentals">Rentals</a>
                    {loggedCustomer && <>
                        <div id="user">
                            <span className="span">Welcome, {loggedCustomer.username}</span>
                            <a className="button" href="/vehicle-list/add">Add Vehicle</a>
                            <a className="button" onClick={logoutHandler}>Logout</a>
                        </div>
                    </>}{!loggedCustomer && <>
                        <div id="guest">
                            <a className="button" href="/login">Login</a>
                            <a className="button" href="/register">Register</a>
                        </div>
                    </>
                    }
                </section>
            </nav>
        </header>
    );
}

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>

//     // <div className="header">
//     //     <Navbar bg="light" expand="lg">
//     //         <Container>
//     //             <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
//     //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //             <Navbar.Collapse id="basic-navbar-nav">
//     //             <Nav className="me-auto">
//     //                 <Link className='nav-link' to="/users-list">Users List</Link>
//     //                 <Link className='nav-link' to="/user/create">Create User</Link>
//     //                 <Link className='nav-link' to="/tasks-list">All Tasks</Link>
//     //                 <Link className='nav-link' to={taskUrl}>My Tasks</Link>
//     //                 <Link className='nav-link' to="/task/create">Create task</Link>

//     //             </Nav>
//     //             <span className='nav-link logout-btn' onClick={logoutHandler}>Logout</span>
//     //             </Navbar.Collapse>
//     //         </Container>
//     //     </Navbar>
//     // </div>

export default Navigation;