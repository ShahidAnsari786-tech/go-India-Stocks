import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-1 rounded-md  p-1 px-1 m-5 ${className}`}style={{
      borderRadius: '12px',
      background: ' white',
      boxShadow:  '2px 2px 7px #747c87,-1px -1px 9px #ffffff'
    }}>
      {children}
    </div>
  );
};

export default Card;
