import "./Means.css";
import man from "../../images/image-man-eating.webp";

function Means() {
  return (
    <div className="means">
      <img className="means__image" src={man} alt="man eating" />
      <div className="means__container">
        <h2 className="means__title">What your BMI result means</h2>
        <p className="means__text">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}

export default Means;
