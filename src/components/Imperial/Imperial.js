import "./Imperial.css";

function Imperial({ values, handleChange }) {
  return (
    <fieldset className="imperial">
      <div className="imperial__wrapper">
        <div className="imperial__container">
          <label htmlFor="height" className="imperial__label">
            Height
          </label>
          <input
            type="text"
            className="imperial__input"
            id="height"
            name="height"
            placeholder="0"
            required
            value={values.height || ""}
            onChange={handleChange}
          />
          <span className="imperial__unit">ft</span>
        </div>

        <div className="imperial__container">
          <label
            htmlFor="height_in"
            className="imperial__label imperial__label_disabled"
          >
            Height
          </label>
          <input
            type="text"
            className="imperial__input"
            id="height_in"
            name="height_in"
            placeholder="0"
            required
            value={values.height_in || ""}
            onChange={handleChange}
          />
          <span className="imperial__unit">in</span>
        </div>
      </div>
      <div className="imperial__wrapper">
        <div className="imperial__container">
          <label htmlFor="weight" className="imperial__label">
            Weight
          </label>
          <input
            type="text"
            className="imperial__input"
            id="weight"
            name="weight"
            placeholder="0"
            required
            value={values.weight || ""}
            onChange={handleChange}
          />
          <span className="imperial__unit">st</span>
        </div>

        <div className="imperial__container">
          <label
            htmlFor="weight_lbs"
            className="imperial__label imperial__label_disabled"
          >
            Weight
          </label>
          <input
            type="text"
            className="imperial__input"
            id="weight_lbs"
            name="weight_lbs"
            placeholder="0"
            required
            value={values.weight_lbs || ""}
            onChange={handleChange}
          />
          <span className="imperial__unit">lbs</span>
        </div>
      </div>
    </fieldset>
  );
}

export default Imperial;
