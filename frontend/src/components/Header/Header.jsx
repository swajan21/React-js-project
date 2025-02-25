import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>A diverse menu caters to different tastes. Consider offering vegetarian, vegan, and gluten-free options alongside meat-based dishes. </p>
            <button>View Menu</button>
            </div> 
        </div>
    );
};

export default Header;