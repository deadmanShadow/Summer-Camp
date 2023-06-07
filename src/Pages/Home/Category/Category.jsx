import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/Cat/pexels-freestocksorg-320265.jpg'
import slide2 from '../../../assets/Cat/pexels-rdne-stock-project-10503437.jpg'
import slide3 from '../../../assets/Cat/pexels-pixabay-159579.jpg'
import slide4 from '../../../assets/Cat/pexels-rdne-stock-project-7249183.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"Top Slider Section"}
            heading={"Complete All Courses With Our best Instructors"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-1xl uppercase text-center'>Psychics Education With Rabbil Hassan</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-1xl uppercase text-center'>Art and Crafts With Siam Ahmed</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-1xl uppercase text-center'>Drawing With Rakibul Islam</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-1xl uppercase text-center'>Completed 30 Para Quran With Raihan</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;