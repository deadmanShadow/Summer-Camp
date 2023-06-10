import React from 'react';
const Card = ({item}) => {
    const { image, name, seat, price } = item;
    const handleAddToCart = item => {
        console.log(item);
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
                        <button onClick={()=> handleAddToCart(item)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;