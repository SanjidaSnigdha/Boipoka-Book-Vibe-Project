import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../Utility/addToDB';

const ReadList = () => {

    // worst case
    const [readList, setReadList] = useState([])
    const data = useLoaderData();
    console.log(data)

   useEffect(() =>{
       const storedBookData= getStoreBook();
       const ConvertedStoredBooks= storedBookData.map(id=>parseInt(id));
       const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
       setReadList(myReadList)
   },[])

    return (
        <div>
            <Tabs>
                <TabList>
                   <Tab>Read Book List</Tab> 
                   <Tab>My Wish List</Tab>

                </TabList>

                <TabPanel>
                    <h2>Book i read {readList.length}</h2>
                    
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;