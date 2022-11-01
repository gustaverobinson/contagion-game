import React from "react";
import './App.css';

function IntroductionView({handlePlayGameClick}) {
      return (
        <div>
            <p className="left-align-text">Congratulations! The year is 1907 and you have just been hired by the US Public Health Service as a public health inspector at Ellis Island. You report for your first day on the job and your supervisor tells you that you will be responsible for screening newly arrived immigrants from England, Norway, Greece, Russia, and Germany. You will receive information about passengers including their biographical details and visible symptoms of disease and be asked to either “ALLOW ENTRY” or “QUARANTINE” the passenger.</p>
            <p className="left-align-text">To incentivize performance, your supervisor has offered a one-time bonus of $30 (worth around $1000 in 2022) to the inspector that screens the most passengers correctly in a period of ten minutes. However, your supervisor warns that 5 points will be deducted from your score if you fail to quarantine a passenger that should have been quarantined.</p>
            <p className="left-align-text">Since it is your first day on the job, you ask a more-experienced coworker for advice on how to quickly screen passengers and they respond that sometimes they find nationality to be a “useful shortcut” in determining the probability that an immigrant has an infectious disease. Specifically, they advise that you should “closely examine Syrians, Armenians, Greeks, and Russians, as these nationalities suffer from higher rates of disease.”</p>
            <p className="left-align-text">Today is going to be a busy day so we better get started. Click “SCREEN PASSENGERS” to start screening passengers.</p>
            <button className="other-button" onClick={handlePlayGameClick}>SCREEN PASSENGERS</button>
        </div>
      );
}
  
export default IntroductionView;