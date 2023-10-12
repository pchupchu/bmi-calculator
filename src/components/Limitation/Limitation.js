import "./Limitation.css";
import limitations from "../../utils/limitations";
import Limit from "../Limit/Limit";

function Limitation() {
  return (
    <section className="limitation">
      <div className="limitation__container">
        <h2 className="limitation__title">Limitations of BMI</h2>
        <p className="limitation__description">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <ul className="limitation__list">
        {limitations.map((item) => {
          return (
            <Limit
              key={item.id}
              title={item.title}
              image={item.image}
              text={item.text}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Limitation;
