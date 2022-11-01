import React from "react";
import './App.css';

function EntryButton ({handleEntryClick}) {
    return (
        <button className='entry-button slide' onClick={handleEntryClick}>
            ALLOW ENTRY
        </button>
    );
  }
  
export default EntryButton;