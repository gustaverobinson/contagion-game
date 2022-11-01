import React from "react";
import './App.css';

function PassengerData (props) {
    return (
    <div className='container immigration-card-container'>
        <div className='row inspection-card-row'>
            <div className='col inspection-card-col'>
                <div>
                    <span className="bolded">Name of Ship: </span>
                    <span className="written-text">{props.ship_name}</span>
                </div>
                <div>
                    <span className="bolded">Name of Immigrant: </span>
                    <span className="written-text">{props.passenger_name}</span>
                </div>
                <div>
                    <span className="bolded">Port of Origin: </span>
                    <span className="written-text">{props.port_of_origin}</span>
                </div>
                <div>
                    <span className="bolded">Traveling with: </span>
                    <span className="written-text">{props.travelling_with}</span>
                </div>
            </div>
            <div className='col inspection-card-col'>
                <div>
                    <span className="bolded">Cabin Class: </span>
                    <span className="written-text">Steerage</span>
                </div>
                <div>
                    <span className="bolded">Nationality: </span>
                    <span className="written-text">{props.nationality}</span>
                </div>
                <div>
                    <span className="bolded">Visible Symptoms: </span>
                    <span className="written-text">{props.visible_symptoms}</span>
                </div>
            </div>
        </div>
    </div>
    );
}
  
export default PassengerData;