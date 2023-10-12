import "./Main.css";
import Landing from "../Landing/Landing";
import Means from "../Means/Means";
import Guidance from "../Guidance/Guidance";
import Limitation from "../Limitation/Limitation";

function Main() {
  return (
    <main className="main">
      <Landing />
      <Means />
      <Guidance />
      <Limitation />
    </main>
  );
}

export default Main;
