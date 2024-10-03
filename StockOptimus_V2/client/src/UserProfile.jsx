import React, { useState } from 'react';
import logo from './logo.png';
import profilePic from './profile.jpg'; // Assume you have a profile picture

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: 'vinay_poduri',
    fullName: 'Poduri Vinay',
    email: 'vinaypoduri888@gmail.com',
    phone: '8466837448',
    dob: '11-10-2003',
    gender: 'Male',
    nationality: 'Indian',
  });

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
        <center><h2 style={styles.title}>User Profile</h2></center>
        <header style={styles.header}>
          <center>
            <div style={styles.userProfileCard}>
              <img src={profilePic} alt="User Profile" style={styles.profilePicture} />
              <h3 style={styles.name}>{userDetails.fullName}</h3>
              <p><b>Username:</b> {userDetails.username}</p>
              <p><b>Email:</b> {userDetails.email}</p>
              <p><b>Phone:</b> {userDetails.phone}</p>
              <p><b>Date of Birth:</b> {userDetails.dob}</p>
              <p><b>Gender:</b> {userDetails.gender}</p>
              <p><b>Nationality:</b> {userDetails.nationality}</p>
              <button style={styles.editButton}>Edit</button>
            </div>
          </center>
        </header>
      </div>
    </div>
  );
};

export default UserProfile;

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f7f9fc',
  },
  sidebar: {
    width: '300px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    backgroundImage: `url('https://naymatcollateral.com/wp-content/uploads/2020/11/banner1-6.jpg')`,
    backgroundRepeat: 'repeat',
      },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sidebarItem: {
    marginBottom: '20px',
    cursor: 'pointer',
    color:'black',
  },
  link: {
    textDecoration: 'none',
    color: '#ECF0F1',
    fontSize: '18px',
    fontWeight: '500',
  },
  logo: {
    width: '100%',
    marginBottom: '30px',
  },
  mainContent: {
    flexGrow: 1,
    padding: '40px',
    overflowY: 'auto',
  },
  title: {
    color: '#34495E',
    fontSize: '32px',
    fontWeight: '600',
  },
  header: {
    marginBottom: '40px',
  },
  userProfileCard: {
    backgroundColor: '#ECF0F1',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    width: '60%',
    margin: '0 auto',
    textAlign: 'left',
    lineHeight: '1.8',
    position: 'relative',
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  name: {
    color: '#2C3E50',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  editButton: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  editButtonHover: {
    ':hover': {
      backgroundColor: '#5dade2',
    },
  },
};