import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
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
            <div className='text-center'>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>View Our Courses</button>
            </div>
        </section>
    );
};

export default PopularMenu;