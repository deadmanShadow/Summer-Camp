import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, seat, price } = item;
    return (
        <div className='flex space-x-4 mt-6'>
            <div>
                <img className='w-[120px]' src={image} alt="" />
                <h3 className='uppercase'>{name}-----------</h3>
                <p>Seat Available: {seat}</p>
            </div>
            <p className='text-red-500'>Price: ${price}</p>
        </div>
    );
};

export default MenuItem;