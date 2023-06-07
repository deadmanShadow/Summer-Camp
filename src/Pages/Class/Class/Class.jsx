import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassCategory from './ClassCategory/ClassCategory';


const Class = () => {
    const [menu] = useMenu();
    const quran = menu.filter(item=>item.category === 'quran');
    const fashion = menu.filter(item=>item.category === 'fashion');
    const dance = menu.filter(item=>item.category === 'dance');
    const drawing = menu.filter(item=>item.category === 'drawing');
    const artscrafts = menu.filter(item=>item.category === 'artscrafts');
    const psychics = menu.filter(item=>item.category === 'psychics');
    return (
        <div>
            <Helmet>
                <title>Summer | Classes</title>
            </Helmet>
            <Cover></Cover>
            <SectionTitle subHeading="Choose Your" heading="Favorite Courses"></SectionTitle>
          <div className='mx-auto grid lg:grid-cols-2'>
          <ClassCategory items={artscrafts}></ClassCategory>
            <ClassCategory items={drawing}></ClassCategory>
            <ClassCategory items={dance}></ClassCategory>
            <ClassCategory items={quran}></ClassCategory>
            <ClassCategory items={fashion}></ClassCategory>
            <ClassCategory items={psychics}></ClassCategory>
          </div>
        </div>
    );
};

export default Class;