import "./Landing.css";
import Background from "../Background/Background";
import Hero from "../Hero/Hero";
import Calculator from "../Calculator/Calculator";

function Landing() {
  return (
    <div className="landing">
      <Background />
      <Hero />
      <Calculator />
    </div>
  );
}

export default Landing;
