import React from 'react';
import BloodrootLogo from '../components/logo/bloodroot-logo';

const HomePage: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 160px)', // Adjust height based on potential header/footer
        padding: '2rem'
      }}
    >
      <BloodrootLogo 
        fillColor="white" 
        style={{
          width: '90%', // Responsive width
          maxWidth: '600px', // Max size
          height: 'auto'
        }}
      />
    </div>
  );
};

export default HomePage; 