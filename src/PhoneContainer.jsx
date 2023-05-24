import React from 'react';
import './PhoneContainer.css';
import IphoneImage from './iphone.png';
import ScreenImage from './IMG_6651.png';

const PhoneContainer = () => {
    return (
        <div className="phone-container">
            <img src={IphoneImage} className="phone" alt="iPhone" />
            <img src={ScreenImage} className="screenshot" alt="Screenshot" />
        </div>
    );
};

export default PhoneContainer;