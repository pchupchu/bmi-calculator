import { useState } from "react";
import "./Calculator.css";
import Metric from "../Metric/Metric";
import Imperial from "../Imperial/Imperial";

function Calculator() {
  const [isMetic, setIsMetric] = useState(true);
  const [isImperial, setIsImperial] = useState(false);

  const handleMetricClick = () => {
    setIsMetric(true);
    setIsImperial(false);
    console.log(`metric ${isMetic}`);
    console.log(`imperial ${isImperial}`);
  };

  const handleImperialClick = () => {
    setIsImperial(true);
    setIsMetric(false);
    console.log(`metric ${isMetic}`);
    console.log(`imperial ${isImperial}`);
  };

  return (
    <div className="calculator">
      <div className="calculator__container">
        <form className="calculator__form">
          <h2 className="calculator__title">Enter your details below</h2>
          <fieldset className="calculator__system">
            <div className="calculator__custom-radio">
              <input
                type="radio"
                name="choice"
                id="metric"
                value="metric"
                className="calculator__choice"
                checked={isMetic}
                onChange={handleMetricClick}
              />
              <label htmlFor="metric" className="calculator__system-label">
                Metric
              </label>
            </div>
            <div className="calculator__custom-radio">
              <input
                type="radio"
                name="choice"
                id="imperial"
                value="imperial"
                className="calculator__choice"
                checked={isImperial}
                onChange={handleImperialClick}
              />
              <label htmlFor="imperial" className="calculator__system-label">
                Imperial
              </label>
            </div>
          </fieldset>
          {isMetic ? <Metric /> : <Imperial />}
        </form>
        <div className="calculator__result">
          <div className="calculator__inner">
            <p className="calculator__result-desc">Your BMI is...</p>
            <h3 className="calculator__weight">23.4</h3>
          </div>
          <p className="calculator__text">
            Your BMI suggests you’re{" "}
            <span className="calculator__text calculator__classification">
              {" "}
              a healthy weight
            </span>
            . Your ideal weight is between
            <span className="calculator__text calculator__range">
              {" "}
              63.3kgs - 85.2kgs
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
