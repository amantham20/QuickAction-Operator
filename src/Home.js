// create a home page component
import React from 'react';
import DisplayData from './Components/DisplayData';


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
    return (
        <div className='Home'>
            <h1>Call Logs</h1>
            {/* display the data here from the database */}
            <DisplayData data={data} />
        </div>
    );
    }

export default Home;

