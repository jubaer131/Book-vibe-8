import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from './Read';
import WhishBooks from './WhishBooks';






const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Books</div>
            <div className="dropdown dropdown-right  w-20 m-auto">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read books</Tab>
                    <Tab>wishlist books</Tab>
                </TabList>
                <TabPanel>
                    <Read></Read>
                </TabPanel>
                <TabPanel>
                    <WhishBooks></WhishBooks>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ListedBooks;