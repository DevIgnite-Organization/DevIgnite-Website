// HamButton.js
import React from 'react';


function HamButton({ onClick }) {
  return (
    <div className='ham-button' onClick={onClick}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );
}

export default HamButton;
