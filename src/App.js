import React from 'react';
import Countdown from 'react-countdown';
import './App.css'; // Importing custom styles

const App = () => {
    // Renderer for countdown
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="countdown">
                <div className="time-box">
                    <span>{days}</span>
                    <p>Days</p>
                </div>
                <div className="time-box">
                    <span>{hours}</span>
                    <p>Hours</p>
                </div>
                <div className="time-box">
                    <span>{minutes}</span>
                    <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span>{seconds}</span>
                    <p>Seconds</p>
                </div>
            </div>
        );
    };

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-content">
                <h1 className="brand-name">House of EON</h1>
                <h2>Luxury Perfume Collection</h2>
                <p className="subtitle">Launching Soon... Stay tuned for a scent of elegance</p>
                <Countdown date={new Date('2024-12-01T00:00:00')} renderer={renderer} />
                <div className="newsletter">
                    <p>Be the first to know! Subscribe below:</p>
                    <input type="email" placeholder="Enter your email" />
                    <button className="subscribe-btn">Notify Me</button>
                </div>
            </div>
        </div>
    );
};

export default App;