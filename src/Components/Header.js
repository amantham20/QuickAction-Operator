// create a single header component with Quick Action writtin in it in the header

import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={require('../assets/logo.png')} alt='Quick Action Logo' />
            <h1>Quick Action Operator Panel</h1>
        </div>
    );
    }

export default Header;
