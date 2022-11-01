import React from "react";
import './App.css';
const symptomList = require("./symptom-list.json");

function percentage(partialValue, totalValue) {
    const value = (100 * partialValue) / totalValue;
    const rounded_value = Math.round(value);
    return rounded_value;
} 

function NationalityData(nationalityRawData) {
    var england_total = 0;
    var germany_total = 0;
    var norway_total = 0;
    var russia_total = 0;
    var greece_total = 0;
    var england_quarantined = 0;
    var germany_quarantined = 0;
    var norway_quarantined = 0;
    var russia_quarantined = 0;
    var greece_quarantined = 0;
    for (var i=0; i < nationalityRawData.dataFromParent.length; i++) {
        if (nationalityRawData.dataFromParent[i][0] === "England") {
            england_total = england_total + 1;
            if (nationalityRawData.dataFromParent[i][1] === "quarantined") {
                england_quarantined++;
            }
        } else if (nationalityRawData.dataFromParent[i][0] === "Germany") {
            germany_total++;
            if (nationalityRawData.dataFromParent[i][1] === "quarantined") {
                germany_quarantined++;
            }
        } else if (nationalityRawData.dataFromParent[i][0] === "Norway") {
            norway_total = norway_total + 1;
            if (nationalityRawData.dataFromParent[i][1] === "quarantined") {
                norway_quarantined++;
            }
        } else if (nationalityRawData.dataFromParent[i][0] === "Russia") {
            russia_total++;
            if (nationalityRawData.dataFromParent[i][1] === "quarantined") {
                russia_quarantined++;
            }
        } else if (nationalityRawData.dataFromParent[i][0] === "Greece") {
            greece_total++;
            if (nationalityRawData.dataFromParent[i][1] === "quarantined") {
                greece_quarantined++;
            }
        }
    };

    return (
        <div className="container results-container">
            <div className="row bolded">
                <div className="col">Nationality</div>
                <div className="col">Percentage you quarantined</div>
            </div>
            <div className="row symptom-row">
                <div className="col">England</div>
                <div className="col">{percentage(england_quarantined, england_total)}%</div>
            </div>
            <div className="row symptom-row">
                <div className="col">Germany</div>
                <div className="col">{percentage(germany_quarantined, germany_total)}%</div>
            </div>
            <div className="row symptom-row">
                <div className="col">Norway</div>
                <div className="col">{percentage(norway_quarantined, norway_total)}%</div>
            </div>
            <div className="row symptom-row">
                <div className="col">Russia</div>
                <div className="col">{percentage(russia_quarantined, russia_total)}%</div>
            </div>
            <div className="row symptom-row">
                <div className="col">Greece</div>
                <div className="col">{percentage(greece_quarantined, greece_total)}%</div>
            </div>
        </div>
    )
}

function SymptomData(symptomRawData) {
    const rows = [];

    for (let j = 0; j < symptomList.listOfSymptoms.length; j++) {
        const specificSymptom = symptomList.listOfSymptoms[j];
        const specificSeverity = symptomList.severityOfSymptoms[j];

        var numberOfAppearances = 0;
        var numberOfQuarantines = 0;

        for (let i = 0; i < symptomRawData.dataFromParent.length; i++) {
            const symptomRowData = symptomRawData.dataFromParent[i][0];
            const symptomStatus = symptomRawData.dataFromParent[i][1];

            if (symptomRowData.includes(specificSymptom)) {
                numberOfAppearances++;
                if (symptomStatus === "quarantined") {
                    numberOfQuarantines++;
                }
            }
        }

        rows.push(
            <div className="row symptom-row" key = {j}>
                <div className="col">
                    {specificSymptom}
                </div>
                <div className="col">
                    {percentage(numberOfQuarantines, numberOfAppearances)}%
                </div>
                <div className="col">
                    {specificSeverity}
                </div>
                
            </div>
        )
    }
    
    return (
        <div className="container results-container">
            <div className="row bolded">
                <div className="col">Symptom</div>
                <div className="col">Percentage you quarantined</div>
                <div className="col">Our rating of severity</div>
            </div>
            <div>{rows}</div>
        </div>
    )
}

function ConclusionView(screened_passengers) {
    console.log(screened_passengers);
    var nationalityRawData = [];
    var symptomRawData = [];
    for (var i=0; i < screened_passengers.dataFromParent.length; i++) {
        nationalityRawData.push([screened_passengers.dataFromParent[i].nationality, screened_passengers.dataFromParent[i].passenger_status]);
    }
    for (var k=0; k < screened_passengers.dataFromParent.length; k++) {
        symptomRawData.push([screened_passengers.dataFromParent[k].visible_symptoms, screened_passengers.dataFromParent[k].passenger_status]);
    }

    return (
        <div>
            <p className="left-align-text">At the end of your shift, your supervisor apologizes and says that they have lost the $30 so no one will win the bonus. You quit your job out of frustration with your supervisor and the dehumanizing nature of your work. You spend the next fifty years of your career working as an immigrant rights advocate to make up for the harm that you have done and become a leader in the movement testifying in front of numerous prominent legislative bodies including the US Senate, the United Nations General Assembly, and the Prince George&apos;s County School Board. You pass away peacefully in your sleep in 1972.</p>
            <p className="left-align-text">In 2022, a group of students from Mia Levenson&apos;s ExCollege class revive you from the dead because they want to interview you about your experience judging how diseases are mapped onto bodies. They provide you with the following statistics on your track record as an inspector at Ellis Island and ask several questions.</p>
            <div className="extra-padding"></div>

            <div>1&#41; Prior to screening passengers, it was suggested that an immigrant&apos;s nationality might determine how closely you should examine them. Did that narrative shape how you screened passengers? Why or why not?</div>
            <NationalityData dataFromParent = {nationalityRawData} />
            <div className="extra-padding"></div>

            <div> 2&#41; Which of the visible symptoms were particularly impactful in your decision to quarantine a passenger? In what ways did the description of symptoms shape your thinking?</div>
            <SymptomData dataFromParent = {symptomRawData} />
            <div className="extra-padding"></div>
        </div>
    );
}

export default ConclusionView;