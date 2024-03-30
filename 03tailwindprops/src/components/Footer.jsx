// Footer.jsx
import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
