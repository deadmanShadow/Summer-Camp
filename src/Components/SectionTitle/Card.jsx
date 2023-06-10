import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Card = ({ item }) => {
    const { image, name, seat, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your selected course has been save on Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please Login first to Order the Courses',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Available Seat: {seat}</p>
                    <p>Course Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;