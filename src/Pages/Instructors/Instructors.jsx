import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/teacher/arabic.jpg'
import img2 from '../../assets/teacher/mitu.jpg'
import img3 from '../../assets/teacher/siam.jpg'

const Instructors = () => {
    return (
        <div>
            <Helmet>
                <title>Summer | Instructors</title>
            </Helmet>
            <div className='grid grid-cols-3'>
                <div className="card w-96 glass">
                    <figure><img src={img1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Raihan Ahmed</h2>
                        <p>A Passionate Quran e Hafez And Mawlana</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={img2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nikita Ahmed</h2>
                        <p>Fashion Designer</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={img3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Siam Ahmed</h2>
                        <p>A greatest psychics educator</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;