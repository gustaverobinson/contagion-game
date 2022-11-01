import React from "react";
import './App.css';

function ReturnToIntroButton({handleReturnToIntroClick}) {
      return (
        <button className="other-button" onClick={handleReturnToIntroClick}>
            VIEW DIRECTIONS
        </button>
      );
}
  
export default ReturnToIntroButton;