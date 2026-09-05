import React, { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';

function App() {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStarted = () => {
        setShowProductList(true);
    };

    return (
        <div className="app-container">
            {!showProductList ? (
                <div className="landing-page">
                    <div className="background-image"></div>
                    <div className="content">
                        <h1>Welcome To Paradise Nursery</h1>
                        <p>Where Green Meets Serenity</p>
                        <button className="get-started-btn" onClick={handleGetStarted}>
                            Get Started
                        </button>
                    </div>
                    <div className="about-container">
                        <AboutUs />
                    </div>
                </div>
            ) : (
                <div className="product-list-container">
                    <h2>Our Plants</h2>
                    {/* Product List Content */}
                </div>
            )}
        </div>
    );
}

export default App;