import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import PhoneContainer from './PhoneContainer';
import Preloader from './Preloader';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1500); 
        }
    }, []);

    return (
        <div className="App">
            {loading && <Preloader />}
            <div className={`app-container ${loading ? 'loading' : 'loaded'}`}>
                <Header />
                <div className="content-container">
                    <div className="header-container">
                        <header className="App-header">
                            <h1 className="title">Cryptocoin Pulse</h1>
                            <p>Our service offers you the opportunity to value and save your precious time, while we take care of the complex task of monitoring the cryptocurrency market.</p>
                            <p>We promptly track market fluctuations and identify moments of significant value growth for any cryptocurrency.</p>
                            <p>In the event of substantial price movement, our service will instantly notify you, enabling you to make a timely decision.</p>
                            <p>Always at the forefront of cryptocurrency trends, we work to ensure that you can calmly attend to your personal matters, confident that you will not miss a single lucrative investment opportunity.</p>
                            <a className="link" href="https://t.me/imPulseStatistics_bot" target="_blank" rel="noopener noreferrer">Subscribe to our Telegram Bot</a>
                        </header>
                    </div>
                    <PhoneContainer />
                </div>
            </div>
        </div>
    );
};

export default App;