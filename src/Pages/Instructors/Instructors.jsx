import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import Card from '../../Components/SectionTitle/Card';

const Instructors = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const quran = menu.filter(item=>item.category === 'quran');
    const fashion = menu.filter(item=>item.category === 'fashion');
    const dance = menu.filter(item=>item.category === 'dance');
    const drawing = menu.filter(item=>item.category === 'drawing');
    const artscrafts = menu.filter(item=>item.category === 'artscrafts');
    const psychics = menu.filter(item=>item.category === 'psychics');
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Arts</Tab>
                    <Tab>Drawing</Tab>
                    <Tab>Dance</Tab>
                    <Tab>Quran Sharif</Tab>
                    <Tab>Fashion</Tab>
                    <Tab>Psychics</Tab>
                </TabList>
                <TabPanel>
                    {
                        quran.map(item => <Card
                        key={item._id}
                        item={item}></Card>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        fashion.map(item => <Card
                        key={item._Id}
                        item={item}></Card>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dance.map(item => <Card
                        key={item._id}
                        item={item}>
                        </Card>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        drawing.map(item => <Card
                        key={item._id}
                        item={item}>  
                        </Card>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        artscrafts.map(item => <Card
                        key={item._id}
                        item={item}></Card>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        psychics.map(item=> <Card
                        key={item._id}
                        item={item}></Card>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Instructors;