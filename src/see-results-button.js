import React from "react";
import './App.css';

function SeeResultsButton({handleSeeResultsClick}) {
      return (
        <button className="other-button" onClick={handleSeeResultsClick}>
            END GAME - SEE RESULTS
        </button>
      );
}
  
export default SeeResultsButton;