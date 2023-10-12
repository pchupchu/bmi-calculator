import "./Metric.css";

function Metric() {
  return (
    <fieldset className="metric">
      <div className="metric__container">
        <label htmlFor="height" className="metric__label">
          Height
        </label>
        <input
          type="text"
          className="metric__input"
          id="height"
          name="height"
          placeholder="0"
          required
          // value={values.height || ""}
          // onChange={handleChange}
        />
        <span className="metric__unit">cm</span>
      </div>
      <div className="metric__container">
        <label htmlFor="weight" className="metric__label">
          Weight
        </label>
        <input
          type="text"
          className="metric__input"
          id="weight"
          name="weight"
          placeholder="0"
          required
          // value={values.height || ""}
          // onChange={handleChange}
        />
        <span className="metric__unit">kg</span>
      </div>
    </fieldset>
  );
}

export default Metric;
