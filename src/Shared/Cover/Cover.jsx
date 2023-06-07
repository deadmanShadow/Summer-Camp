import React from 'react';
import { Parallax } from 'react-parallax';
import cover from '../../assets/Cover/pexels-rdne-stock-project-8033812.jpg'
const Cover = () => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={cover}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        {/* <img src={cover} alt="" /> */}
                        <p className="mb-5 text-3xl">Welcome To Summer School Classes Page! <br /> Choose your courses from here!!</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;