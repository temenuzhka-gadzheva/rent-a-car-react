// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../../../context/auth-context';
// import './VehicleCard.scss'

// export function VehicleCard({ vehicle, deleteVehicle }) {

//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);

//     const showDetails = () => {
//         navigate(`/vehicle-list/${vehicle.id}`);
//     };
//     const rent = (id) => {
//         navigate(`/vehicle-list/rent/${id}`);
//     }

//     return (
//         <div className="vehicle-card">
//             <div className="info">
//                 <h2>{vehicle.brand}</h2>
//                 <h3>{vehicle.model}</h3>

//             </div>
//             <div className='buttons'>
//                 <button onClick={()=>rent(vehicle.id)}>
//                     Rent
//                 </button>
//                 <button onClick={() => showDetails()}>
//                     Details
//                 </button>
//                 {user && user.role === 'admin' &&
//                     <button onClick={() => deleteVehicle(vehicle.id)}>
//                         Delete
//                     </button>
//                 }
//             </div>
//             <img src={vehicle.picture} alt="None" />

//         </div >
//     )
// }


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { getLoggedCustomer } from '../../interceptors/http-utils/customer-requests';

export function VehicleCard({ vehicle, deleteVehicle }) {

    const navigate = useNavigate();

    const loggedCustomer = getLoggedCustomer();

    const showDetails = () => {
        navigate(`/vehicle-list/${vehicle.id}`);
    };
    const rent = (id) => {
        navigate(`/vehicle-list/rent/${id}`);
    }

    return (

        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={vehicle.picture} />
        //     <Card.Body>
        //         <Card.Title>{vehicle.brand}  {vehicle.model} {vehicle.contructionYear}</Card.Title>
        //         <div className='btn-holder'>
        //             <Button onClick={() => rent(vehicle.id)}>
        //                 Rent
        //             </Button>
        //             <Button onClick={() => showDetails()}>
        //                 Details
        //             </Button>
        //             {loggedCustomer && loggedCustomer.role === 'admin' &&
        //                 <Button onClick={() => deleteVehicle(vehicle.id)}>
        //                     Delete
        //                 </Button>
        //             }
        //         </div>
        //     </Card.Body>
        // </Card>

        // <div className="card">
        //     <div className="card-body">
        //         <img src={vehicle.picture} className="card-img-top" alt="something wrong!" />
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        //     </div>
        // </div>

        <div className="listing">
            <h2>{vehicle.brand} {vehicle.model}</h2>
            <div className="info">
                <div className="data-info">
                    <h3>Year: {vehicle.year}</h3>
                    <h3>Price: {vehicle.pricePerDay} $</h3>
                </div>
                <div className="data-buttons">
                    <button className="button" onClick={() => rent(vehicle.id)}>
                        Rent
                    </button>
                    <button className="button" onClick={() => showDetails()}>
                        Details
                    </button>
                    {loggedCustomer && loggedCustomer.role === 'admin' &&
                        <button className="button" onClick={() => deleteVehicle(vehicle.id)}>
                            Delete
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}