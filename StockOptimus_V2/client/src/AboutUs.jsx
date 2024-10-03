import React from 'react';
import logo from './logo.png';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.sidebarList}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <li style={styles.sidebarItem}> <a href='./Home' style={{ textDecoration: 'none', color: 'black' }}>Home</a> </li>
          <li style={styles.sidebarItem}><a href='./Dashboard' style={{ textDecoration: 'none', color: 'black' }}>Dashboard</a></li>
          <li style={styles.sidebarItem}><a href='./Forecast' style={{ textDecoration: 'none', color: 'black' }}>Forecast</a></li>
          <li style={styles.sidebarItem}><a href='./UserProfile' style={{ textDecoration: 'none', color: 'black' }}>User Profile</a></li>
          <li style={styles.sidebarItem}><a href='./AboutUs' style={{ textDecoration: 'none', color: 'black' }}>About Us</a></li>
          <li style={styles.sidebarItem}><a href='./Login' style={{ textDecoration: 'none', color: 'black' }}><h6>Log out</h6></a></li>
        </ul>
      </div>

      <div style={styles.mainContent}>
        <center><h2> <p>PANDAS SIH12</p> </h2></center>
        <header style={styles.header}>
          <center>
            <h3>We're from Swarnandhra College of Engineering and Technology</h3>
            <p>We are a dedicated and passionate team of students specializing in Artificial Intelligence and Machine Learning, working together on innovative projects and competitions.</p>
          </center>
        </header>

        <section style={styles.teamDescription}>
          <h2>Our Team</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Gender</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Mobile No.</th>
                <th style={styles.th}>Stream</th>
                <th style={styles.th}>Academic Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Kucharlapati Amruthavalli</td>
                <td style={styles.td}>F</td>
                <td style={styles.td}>kamruthavalli44@gmail.com</td>
                <td style={styles.td}>8639198694</td>
                <td style={styles.td}>AI & ML</td>
                <td style={styles.td}>IV</td>
              </tr>
              <tr>
                <td style={styles.td}>Kanna Neeraja</td>
                <td style={styles.td}>F</td>
                <td style={styles.td}>neerajasesa86@gmail.com</td>
                <td style={styles.td}>8106990656</td>
                <td style={styles.td}>AI & ML</td>
                <td style={styles.td}>IV</td>
              </tr>
              <tr>
                <td style={styles.td}>Vasa Purna Praneeth</td>
                <td style={styles.td}>M</td>
                <td style={styles.td}>praneethbalu178@gmail.com</td>
                <td style={styles.td}>8328571819</td>
                <td style={styles.td}>AI & ML</td>
                <td style={styles.td}>IV</td>
              </tr>
              <tr>
                <td style={styles.td}>Poduri Vinay</td>
                <td style={styles.td}>M</td>
                <td style={styles.td}>vinaypoduri888@gmail.com</td>
                <td style={styles.td}>8466837448</td>
                <td style={styles.td}>AI & ML</td>
                <td style={styles.td}>IV</td>
              </tr>
              <tr>
                <td style={styles.td}>Posimsetti Bhargavi Vijaya Venkata Lakshmi</td>
                <td style={styles.td}>F</td>
                <td style={styles.td}>bhargaviposimsetti36@gmail.com</td>
                <td style={styles.td}>9032982559</td>
                <td style={styles.td}>AI & ML</td>
                <td style={styles.td}>III</td>
              </tr>
              <tr>
                <td style={styles.td}>Venkata Naga Durga Prasad Kollepalli</td>
                <td style={styles.td}>M</td>
                <td style={styles.td}>durgaprasad91918@gmail.com</td>
                <td style={styles.td}>9866275776</td>
                <td style={styles.td}>AI & DS</td>
                <td style={styles.td}>III</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    backgroundImage: `url('https://naymatcollateral.com/wp-content/uploads/2020/11/banner1-6.jpg')`,
    backgroundRepeat: 'repeat',
    padding: '20px',
    color: 'black',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '20px',
    cursor: 'pointer',
  },
  logo: {
    width: '100%',
    marginBottom: '20px',
  },
  mainContent: {
    flexGrow: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  header: {
    marginBottom: '30px',
    color: '#333',
  },
  teamDescription: {
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};
