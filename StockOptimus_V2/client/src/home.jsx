import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.png';
import Dashboard from './Dashboard';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [predictedPrices, setPredictedPrices] = useState([]);
  const [showForecast, setShowForecast] = useState(false);

  const fetchWeather = async (lat, lon) => {
    try {
      const API_KEY = '08a4b3d896ed4756efaf724d8c34945b';
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        fetchWeather(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        state,
        commodity,
        days: duration,
      });
      console.log('Prediction response:', response.data);
      setPredictedPrices(response.data.predicted_prices);
    } catch (error) {
      console.error('Error fetching prediction data:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.sidebarList}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <li style={styles.sidebarItem}>
  <a href='./Home' style={{ color: 'black', textDecoration: 'none' }}>Home</a>
</li>
<li style={styles.sidebarItem}>
  <a href='./Dashboard' style={{ color: 'black', textDecoration: 'none' }}>Dashboard</a>
</li>
<li style={styles.sidebarItem}>
  <a href='./Forecast' style={{ color: 'black', textDecoration: 'none' }}>Forecast</a>
</li>
<li style={styles.sidebarItem}>
  <a href='./UserProfile' style={{ color: 'black', textDecoration: 'none' }}>User Profile</a>
</li>
<li style={styles.sidebarItem}>
  <a href='./AboutUs' style={{ color: 'black', textDecoration: 'none' }}>About Us</a>
</li>
<li style={styles.sidebarItem}>
  <a href='./Login' style={{ color: 'black', textDecoration: 'none' }}>
    <h6>Log out</h6>
  </a>
</li>

        </ul>
      </div>

      <div style={styles.mainContent}>
      {weather && (
  <div style={styles.weatherSection}>
    <h2>{weather.name} Weather</h2>
    <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
    <button onClick={() => setShowForecast(!showForecast)} style={styles.toggleButton}>
      {showForecast ? 'Hide Forecast' : 'Show Forecast'}
    </button>
    {showForecast && forecast && (
      <div style={styles.forecastGrid}>
        {forecast.list.slice(0, 7).map((item, index) => {
          // Calculate the date for the current index
          const date = new Date();
          date.setDate(date.getDate() + index); // Add index to the current date

          return (
            <div key={index} style={styles.forecastItem}>
              <h6><i>{date.toLocaleDateString('en-GB')}</i></h6> {/* Display the calculated date */}
              <p>{item.main.temp}°C</p>
              <i>{item.weather[0].description}</i>
            </div>
          );
        })}
      </div>
    )}
  </div>
)}


        <header style={styles.header}>
          <center>
            <h1>Stock Optimus: The Future of Commodities Forecasting</h1>
            <p>An LSTM-based solution for accurate forecasting of essential food commodity prices, integrated with real-time data from 550 centers across India.</p>
          </center>
        </header>

        <div style={styles.actionButtons}>
          <button style={styles.dashboardButton}><a href='./Dashboard' style={styles.link}> View Dashboard</a></button>
          <button style={styles.forecastButton}><a href='./Forecast' style={styles.link}>View Forecast</a></button>
        </div>

        {predictedPrices.length > 0 && (
          <div style={styles.results}>
            <h3>Predicted Prices:</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Price (INR)</th>
                </tr>
              </thead>
              <tbody>
                {predictedPrices.map((price, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{getFutureDate(index)}</td>
                    <td style={styles.td}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    backgroundImage: `url('https://naymatcollateral.com/wp-content/uploads/2020/11/banner1-6.jpg')`,
    backgroundRepeat: 'repeat',
      },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '20px',
    cursor: 'pointer',
    color: 'green',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  logo: {
    width: '100%',
    marginBottom: '20px',
  },
  mainContent: {
    flexGrow: 1,
    padding: '30px',
    overflowY: 'auto',
  },
  weatherSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
  forecastGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    marginTop: '10px',
  },
  forecastItem: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '8px',
  },
  header: {
    marginBottom: '40px',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  dashboardButton: {
    padding: '15px 30px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  forecastButton: {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  results: {
    marginTop: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};
