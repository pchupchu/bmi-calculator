import "./Landing.css";
import Background from "../Background/Background";
import Hero from "../Hero/Hero";
import Calculator from "../Calculator/Calculator";

function Landing() {
  return (
    <section className="landing">
      <Background />
      <Hero />
      <Calculator />
    </section>
  );
}

export default Landing;
