import Advice from "../Advice/Advice";
import "./Guidance.css";
import advices from "../../utils/advices";

function Guidance() {
  return (
    <section className="guidance">
      <ul className="guidance__list">
        {advices.map((item) => {
          return (
            <Advice
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

export default Guidance;
