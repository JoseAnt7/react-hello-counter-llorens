// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/home.jsx";


let counters = [0, 0, 0, 0, 0, 0];


const renderApp = () => {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<Home 
        number={counters[0]} 
        number2={counters[1]} 
        number3={counters[2]} 
        number4={counters[3]} 
        number5={counters[4]} 
        number6={counters[5]} 
    />);
};


const updateCounters = () => {
    counters[0]++;
    for (let i = 0; i < counters.length - 1; i++) {
        if (counters[i] > 9) {
            counters[i] = 0;
            counters[i + 1]++;
        }
    }
};


setInterval(() => {
    updateCounters();
    renderApp();
    console.log(counters);
}, 1000);


