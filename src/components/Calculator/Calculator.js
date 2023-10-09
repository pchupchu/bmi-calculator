import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator__container">
        <form className="calculator__form">
          <h2 className="calculator__title">Enter your details below</h2>
          <fieldset className="calculator__system">
            <label for="metric" className="calculator__system-label">
              Metric
            </label>
            <input
              type="radio"
              name="choice"
              id="metric"
              value="metric"
              checked
              className="calculator__choice"
            />
            <label for="imperial" className="calculator__system-label">
              Imperial
            </label>
            <input
              type="radio"
              name="choice"
              id="imperial"
              value="imperial"
              className="calculator__choice"
            />
          </fieldset>
          <fieldset class="calculator__info">
            <label for="height" className="calculator__label">
              Height
            </label>
            <input
              type="text"
              className="calculator__input"
              id="height"
              name="height"
              placeholder=""
              required
              // value={values.height || ""}
              // onChange={handleChange}
            />
            <label for="weight" className="calculator__label">
              Weight
            </label>
            <input
              type="text"
              className="calculator__input"
              id="weight"
              name="weight"
              placeholder=""
              required
              // value={values.height || ""}
              // onChange={handleChange}
            />
          </fieldset>
        </form>
        <div className="calculator__result">
          <p className="calculator__result-desc">Your BMI is...</p>
          <h3 className="calculator__weight">23.4</h3>
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
