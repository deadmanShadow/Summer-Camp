import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';
import Card from '../../../Components/SectionTitle/Card';

const Class = () => {
  const categories = ['quran', 'fashion', 'dance', 'drawing', 'artscrafts', 'psychics'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const quran = menu.filter(item => item.category === 'quran');
  const fashion = menu.filter(item => item.category === 'fashion');
  const dance = menu.filter(item => item.category === 'dance');
  const drawing = menu.filter(item => item.category === 'drawing');
  const artscrafts = menu.filter(item => item.category === 'artscrafts');
  const psychics = menu.filter(item => item.category === 'psychics');
  return (
    <div>
      <Helmet>
        <title>Summer | Classes</title>
      </Helmet>
      <Cover></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Quran Sharif</Tab>
          <Tab>Fashion</Tab>
          <Tab>Dance</Tab>
          <Tab>Drawing</Tab>
          <Tab>Arts & Crafts</Tab>
          <Tab>Psychics</Tab>
        </TabList>
        <TabPanel>
          {
            quran.map(item => <Card
              key={item.id}
              item={item}></Card>)
          }

        </TabPanel>
        <TabPanel>
          {
            fashion.map(item => <Card
              key={item.Id}
              item={item}></Card>)
          }
        </TabPanel>
        <TabPanel>
          {
            dance.map(item => <Card
              key={item.id}
              item={item}>
            </Card>)
          }
        </TabPanel>
        <TabPanel>
          {
            drawing.map(item => <Card
              key={item.id}
              item={item}>
            </Card>)
          }
        </TabPanel>
        <TabPanel>
          {
            artscrafts.map(item => <Card
              key={item.id}
              item={item}></Card>)
          }
        </TabPanel>
        <TabPanel>
          {
            psychics.map(item => <Card
              key={item.id}
              item={item}></Card>)
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Class;