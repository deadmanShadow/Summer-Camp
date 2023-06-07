import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import imgg1 from '../../../assets/teacher/arabic.jpg'
import imgg2 from '../../../assets/teacher/mitu.jpg'
import imgg3 from '../../../assets/teacher/nikita.jpg'
import imgg4 from '../../../assets/teacher/psychics.jpg'
import imgg5 from '../../../assets/teacher/siam.jpg'

const Teachers = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Popular Instructors Section"
                heading="Our Teachers"></SectionTitle>

            <div className='flex gap-4 mb-12'>
                <div className="card w-96 bg-base-100 shadow-xl w-[255px]">
                    <figure><img src={imgg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Raihan Ahmed</h2>
                        <p>Hafez and Mawlana From Malibagh Madrasha</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl w-[255px]">
                    <figure><img src={imgg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nikita Mahmud</h2>
                        <p>Fashion Design From Santo-Marium University</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl w-[355px]">
                    <figure><img src={imgg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sanzida Mitu</h2>
                        <p>B.A Dance From East West University</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl w-[355px]">
                    <figure><img src={imgg5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Siam Ahmed</h2>
                        <p>B.A Dance From East West University</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Teachers;