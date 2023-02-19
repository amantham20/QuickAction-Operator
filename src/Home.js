// create a home page component
import React from 'react';
import DisplayData from './Components/DisplayData';
import SMSForm from './Components/SMSForm';
import { useState } from 'react';
import './Home.css';

const data = [
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'STEM',
        room: '123',
        floor: '1',
        people: '4',
        barricaded: true,
    },
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'Arts',
        room: '123',
        floor: '1',
        people: '4',
        barricaded: true,
    },
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'Arts',
        room: '123',
        floor: '1',
        people: '4',
        barricaded: true,
    },
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'STEM',
        room: '123',
        floor: '2',
        people: '4',
        barricaded: true,
    },
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'Business',
        room: '123',
        floor: '2',
        people: '4',
        barricaded: true,
    },
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'STEM',
        room: '123',
        floor: '1',
        people: '4',
        barricaded: true,
    },
    
    {
        name: 'Rajmeet',
        phone: '1234567890',
        location: 'STEM',
        room: '123',
        floor: '1',
        people: '4',
        barricaded: true,
    },

];

const Home = () => {
    const [showDisplayData, setShowDisplayData] = useState(true);

    const toggleDisplayData = () => {
        setShowDisplayData(!showDisplayData);
    }

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

