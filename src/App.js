import './App.css';
import PassengerData from './passenger-data';
import EntryButton from './entry-button';
import QuarantineButton from './quarantine-button';
import IntroductionView from './introduction-view';
import SeeResultsButton from './see-results-button';
import ReturnToIntroButton from './return-to-intro-button';
import ConclusionView from './conclusion-view';
import React from 'react';

// Loading in the passenger data
const json_all_passengers_info = require("./immigrant-info.json");
const all_ship_names = json_all_passengers_info.shipNames;
const all_characters = json_all_passengers_info.characters;
const all_visible_symptoms = json_all_passengers_info.visibleSymptoms;

// Writing a function that will allow us to grab a random element from the
// passenger data that we just loaded
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

//Writing a function that we call when updating the inspection card
function updatePassengerInformation() {
  const allNewInfo = [];

  const new_passenger_info = all_characters.random();
  var symptom_list = [];
  var new_passenger_symptoms = "";
  var total_symptom_severity = 0;
  const number_of_symptoms = Math.random();
  if (number_of_symptoms <= .4) {
    new_passenger_symptoms = "";
    total_symptom_severity = 0;
  } else if (number_of_symptoms > .4 && number_of_symptoms <= .6) {
    symptom_list.push(
      all_visible_symptoms.random()
    );
    new_passenger_symptoms = `${symptom_list[0].symptoms}`;
    total_symptom_severity = symptom_list.severity;
  } else if (number_of_symptoms > .6 && number_of_symptoms <= .8) {
    symptom_list.push(
      all_visible_symptoms.random(), 
      all_visible_symptoms.random()
    );
    new_passenger_symptoms = `${symptom_list[0].symptoms}, ${symptom_list[1].symptoms}`;
    total_symptom_severity = symptom_list[0].severity + symptom_list[1].severity;
  } else {
    symptom_list.push(
      all_visible_symptoms.random(),
      all_visible_symptoms.random(), 
      all_visible_symptoms.random()
    );
    new_passenger_symptoms = `${symptom_list[0].symptoms}, ${symptom_list[1].symptoms}, ${symptom_list[2].symptoms}`;
    total_symptom_severity = symptom_list[0].severity + symptom_list[1].severity + symptom_list[2].severity;
  }

  allNewInfo.push(all_ship_names.random());
  allNewInfo.push(new_passenger_info.Name);
  allNewInfo.push(new_passenger_info.Nationality);
  allNewInfo.push(new_passenger_info["Port of Origin"]);
  allNewInfo.push(new_passenger_info["Traveling with"]);
  allNewInfo.push(new_passenger_symptoms);
  allNewInfo.push(total_symptom_severity);

  return allNewInfo;
}  


// Creating a variable where we can store the player's responses
var screened_passengers = [];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          ship_name: "Manitoba",
          passenger_name: "Peder Smith",
          nationality: "Norway",
          port_of_origin : "Bergen, Norway",
          travelling_with : "mother, father",
          visible_symptoms : "light cough",
          symptoms_severity : "1",
          // This line needs to be reworked so that I am not changing it here...
          view: "introduction"
      };
    this.handleEntryClick = this.handleEntryClick.bind(this);
    this.handleQuarantineClick = this.handleQuarantineClick.bind(this);
    this.handlePlayGameClick = this.handlePlayGameClick.bind(this);
    this.handleSeeResultsClick = this.handleSeeResultsClick.bind(this);
    this.handleReturnToIntroClick = this.handleReturnToIntroClick.bind(this);
  }

  handlePlayGameClick() {
    this.setState({
      view: "play-game"
    });
  }

  handleSeeResultsClick() {
    if (screened_passengers.length >= 100) {
      this.setState({
        view: "conclusion"
      });
    } else {
      alert(`Bored already?! You need to screen at least ${100 - screened_passengers.length} more passengers before viewing results.`);
    }
    

  }

  handleReturnToIntroClick() {
    this.setState({
      view: "introduction"
    });
  }

  handleEntryClick() {
    screened_passengers.push({
      "ship_name": this.state.ship_name,
      "passenger_name": this.state.passenger_name,
      "nationality": this.state.nationality,
      "port_of_origin": this.state.port_of_origin,
      "travelling_with": this.state.travelling_with,
      "visible_symptoms": this.state.visible_symptoms,
      "symptoms_severity": this.state.symptoms_severity,
      "passenger_status": "passed"
    });

    const allNewInfo = updatePassengerInformation();

    this.setState({
      ship_name: allNewInfo[0],
      passenger_name: allNewInfo[1],
      nationality: allNewInfo[2],
      port_of_origin: allNewInfo[3],
      travelling_with: allNewInfo[4],
      visible_symptoms: allNewInfo[5],
      symptoms_severity: allNewInfo[6]
    });

  }

  handleQuarantineClick() {
    screened_passengers.push({
      "ship_name": this.state.ship_name,
      "passenger_name": this.state.passenger_name,
      "nationality": this.state.nationality,
      "port_of_origin": this.state.port_of_origin,
      "travelling_with": this.state.travelling_with,
      "visible_symptoms": this.state.visible_symptoms,
      "symptoms_severity": this.state.symptoms_severity,
      "passenger_status": "quarantined"
    });

    const allNewInfo = updatePassengerInformation();

    this.setState({
      ship_name: allNewInfo[0],
      passenger_name: allNewInfo[1],
      nationality: allNewInfo[2],
      port_of_origin: allNewInfo[3],
      travelling_with: allNewInfo[4],
      visible_symptoms: allNewInfo[5],
      symptoms_severity: allNewInfo[6]
    });
  }

  render() {
    if (this.state.view === "play-game") {
      return (
        <div className="App">
          <header className="App-header">
            <h2>INSPECTION CARD</h2>
            <h2>U.S. Department of Labor</h2>
            <h3>Immigration Service</h3>
            <PassengerData {...this.state} />
            <EntryButton handleEntryClick={this.handleEntryClick} />
            <QuarantineButton handleQuarantineClick={this.handleQuarantineClick} />
            <div className="row">
              <div className='col'>
                <ReturnToIntroButton handleReturnToIntroClick={this.handleReturnToIntroClick} />
              </div>
              <div className='col'></div>
              <div className='col'>
                <SeeResultsButton handleSeeResultsClick={this.handleSeeResultsClick} />
              </div>
            </div>

           
          </header>
        </div>
      );
    } else if (this.state.view === "conclusion") {
      return (
        <div className="App">
          <header className="App-header">
            <h2>
            Conclusion
            </h2>
            <ConclusionView dataFromParent = {screened_passengers} />
          </header>
        </div> 
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h2>
              Introduction
            </h2>
            <IntroductionView handlePlayGameClick={this.handlePlayGameClick} />
          </header>
        </div> 
      );
    }
    
  }
}

export default App;
