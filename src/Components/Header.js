import React from 'react';
import '../Styles/Header.css';
import logo from '../Components/twitterLogo.png';

const Header = () => {
    let headerTitle = "Twitter";
    return (
        <div>
            <img src={logo} alt="Twitter Logo" className='photo'/>
            <h2>
                {headerTitle}
            </h2>
            <div className="Pages">

            </div>
        </div>
    );
};

export default Header;