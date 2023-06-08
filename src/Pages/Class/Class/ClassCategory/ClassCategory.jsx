import React from 'react';
import MenuItem from '../../../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const ClassCategory = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to="/instructors">
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Add to Cart</button>
            </Link>
        </div>
    );
};

export default ClassCategory;