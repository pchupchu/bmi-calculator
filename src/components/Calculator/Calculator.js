import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator__container">
        <form className="calculator__form">
          <h2 className="calculator__title">Enter your details below</h2>
          <fieldset className="calculator__system">
            <div class="calculator__custom-radio">
              <input
                type="radio"
                name="choice"
                id="metric"
                value="metric"
                className="calculator__choice"
                checked
              />
              <label for="metric" className="calculator__system-label">
                Metric
              </label>
            </div>
            <div class="calculator__custom-radio">
              <input
                type="radio"
                name="choice"
                id="imperial"
                value="imperial"
                className="calculator__choice"
              />
              <label for="imperial" className="calculator__system-label">
                Imperial
              </label>
            </div>
          </fieldset>
          <fieldset class="calculator__info">
            <div className="calculator__info-container">
              <label for="height" className="calculator__label">
                Height
              </label>
              <input
                type="number"
                className="calculator__input"
                id="height"
                name="height"
                placeholder="0"
                required
                // value={values.height || ""}
                // onChange={handleChange}
              />
            </div>
            <div className="calculator__info-container">
              <label for="weight" className="calculator__label">
                Weight
              </label>
              <input
                type="number"
                className="calculator__input"
                id="weight"
                name="weight"
                placeholder="0"
                required
                // value={values.height || ""}
                // onChange={handleChange}
              />
            </div>
          </fieldset>
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
