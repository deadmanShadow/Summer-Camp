import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';



const Main = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;