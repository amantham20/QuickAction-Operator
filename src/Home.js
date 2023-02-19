// create a home page component
import React from 'react';
import DisplayData from './Components/DisplayData';
import SMSForm from './Components/SMSForm';
import { useState, useEffect } from 'react';
import './Home.css';

import { db } from './firebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const Home = () => {
    const [showDisplayData, setShowDisplayData] = useState(true);

    const toggleDisplayData = () => {
        setShowDisplayData(!showDisplayData);
    }

    const [data, setData] = useState([]);
    const fetchReports = async () => {
        const querySnapshot = await getDocs(collection(db, "Report"));
        querySnapshot.forEach((doc) => {
          setData(data => [...data, doc.data()]);
        });
      }
    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div className='Home'>
            <nav className='nav-bar'>
                <button onClick={toggleDisplayData}>
                    {showDisplayData ? 'Show SMS Form' : 'Show Call Logs'}
                </button>
            </nav>
            {showDisplayData ? <DisplayData data={data}/> : <SMSForm />}
        </div>
    );
    }

export default Home;

