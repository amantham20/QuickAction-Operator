import React from 'react';
import './DisplayData.css';
import  { useState, useRef } from 'react';
import { db } from '../firebase.js';
import { collection, doc, setDoc } from "firebase/firestore"; 
import SMSForm from './SMSForm';

const DisplayData = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedSMSClicked, setSelectedSMSClicked] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('');

  // make the filterdata filter location and floor
  const filteredData = selectedLocation && selectedFloor ? data.filter(person => person.location === selectedLocation && person.floor === selectedFloor) : data;

  const handlePhoneClick = (e, phoneNumber) => {
    e.preventDefault();
    setSelectedSMSClicked (!selectedSMSClicked);
    console.log(phoneNumber);
    setSelectedPhone(phoneNumber);
  }

  const toggleSafeField = (person) => async () => {
    console.log(person);
    const reportRef = collection(db, "Report");
    const uuid = person.UID ? person.UID : person.uid;
    await setDoc(doc(reportRef, uuid), {
      // same as before except for the safe field
      ...person,
      safe: !person.safe,
    });
    // refresh the page
    window.location.reload();
    
  }

  return (
    <>
      <div className='filter-container'>
        <div className='filter'>
          <label htmlFor="location">Select a location:</label>
          <select id="location" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
            <option value="">All</option>
            <option value="STEM">STEM</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
          
          <label htmlFor="floor">Select a floor:</label>
          <select id="floor" value={selectedFloor} onChange={e => setSelectedFloor(e.target.value)}>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          </div>
      </div>
    <div className="data-container">
      {filteredData.map((person, index) => (
        <div key={index} className="person-container">
          <h2>{person.name}</h2>
          <p>Phone: <a href="" onClick={(e) => {handlePhoneClick(e, person.phoneNumber)}}>{person.phoneNumber}</a></p>
          <p>Location: {person.location}</p>
          <p>Room: {person.roomNumber}</p>
          <p>Floor: {person.floor}</p>
          <p>People: {person.numberOfPeople}</p>
          <p>Barricaded: {person.barricaded ? 'Yes' : 'No'}</p>
          <div className='circle-container'>
            <p>Released: {person.safe ? <span className='circle green'/> : <span className='circle red' />}</p>
            <p>Panic: {person.panic ? <span className='circle green'/> : <span className='circle red' />}</p>
          </div>
          <p>Time: 
           { person.time ? new Date(person.time.seconds * 1000).toLocaleString() : ''}
          </p>
          <button onClick={toggleSafeField(person)}>Toggle Safe</button>
        </div>
      ))}
    </div>
    {selectedSMSClicked ? <SMSForm num={selectedPhone}/> : null}
    </>
  );
};

export default DisplayData;