import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> setMenu(data))
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading="Course Lists"
            subHeading="Popular Classes Section "
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;