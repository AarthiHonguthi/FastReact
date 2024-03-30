// Header.jsx
import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Website</h1>
    </header>
  );
}

export default Header;
