import React from 'react';
import './DisplayData.css';
import  { useState } from 'react';

const DisplayData = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');

  // make the filterdata filter location and floor
  const filteredData = selectedLocation && selectedFloor ? data.filter(person => person.location === selectedLocation && person.floor === selectedFloor) : data;

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
          <p>Phone:<a href="tel:{+1person.phone}">{person.phone}</a></p>
          <p>Location: {person.location}</p>
          <p>Room: {person.room}</p>
          <p>Floor: {person.floor}</p>
          <p>People: {person.people}</p>
          <p>Barricaded: {person.barricaded ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default DisplayData;