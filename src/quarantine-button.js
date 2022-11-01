import React from "react";
import './App.css';

function QuarantineButton ({handleQuarantineClick}) {
  return (
      <button className='quarantine-button slide' onClick={handleQuarantineClick}>
          QUARANTINE
      </button>
  );
}
  
export default QuarantineButton;