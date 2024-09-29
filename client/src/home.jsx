import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Home component
function Home() {
    const [state, setState] = useState('');
    const [commodity, setCommodity] = useState('');
    const [duration, setDuration] = useState('');
    const [predictions, setPredictions] = useState([]);
    const [error, setError] = useState('');

    // Handler for form submission
    const handleForecast = (e) => {
        e.preventDefault();
        
        // Ensure all form fields are filled out
        if (!state || !commodity || !duration) {
            setError('Please fill out all fields.');
            return;
        }

        // Construct the request payload
        const requestData = {
            state,
            commodity,
            duration: parseInt(duration),
        };

        // Make the API request
        axios.post('http://localhost:5000/predict', requestData)
            .then((response) => {
                if (response.data.status === 'success') {
                    setPredictions(response.data.predictions);
                } else {
                    setError(response.data.message || 'Error fetching predictions. Please try again.');
                }
            })
            .catch((error) => {
                setError('Error connecting to the server. Please ensure the backend is running.');
            });
    };

    return (
        <div>
            <h2>Commodity Price Forecast</h2>
            <form onSubmit={handleForecast}>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter state"
                    />
                </div>

                <div>
                    <label>Commodity:</label>
                    <input
                        type="text"
                        value={commodity}
                        onChange={(e) => setCommodity(e.target.value)}
                        placeholder="Enter commodity"
                    />
                </div>

                <div>
                    <label>Duration (Days):</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Enter forecast duration"
                    />
                </div>

                <button type="submit">Forecast</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {predictions.length > 0 && (
                <div>
                    <h3>Predicted Prices:</h3>
                    <ul>
                        {predictions.map((price, index) => (
                            <li key={index}>Day {index + 1}: {price.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// Make sure the export statement is at the top level
export default Home;
