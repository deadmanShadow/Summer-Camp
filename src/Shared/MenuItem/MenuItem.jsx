import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, seat, price } = item;
    return (
        <div className='ms-4 space-x-4 mt-6'>
            <div>
                <img className='w-[200px]' src={image} alt="" />
                <h3 className='text-2xl uppercase mt-4'>{name}-------</h3>
                <p>Seat Available: {seat}</p>
            </div>
            <button className='text-red-500'>Price: ${price}</button>
        </div>
    );
};

export default MenuItem;