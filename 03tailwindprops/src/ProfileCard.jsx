import React from 'react';

function ProfileCard({ username = "Hitesh", profileImage = "https://d8qb5cxd9qhkd.cloudfront.net/pages/tiles/Manchal.jpg" }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      width: '200px',
      textAlign: 'center'
    }}>
      <h2 style={{ marginTop: '0' }}>{username}</h2>
      <img style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover'
      }} src={profileImage} alt={`Profile picture of ${username}`} />
    </div>
  );
}

export default ProfileCard;
