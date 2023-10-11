import "./Advice.css";

function Advice({ title, image, text }) {
  return (
    <li className="advice__item">
      <div
        className="advice__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="advice__description">
        <h3 className="advice__title">{title}</h3>
        <p className="advice__text">{text}</p>
      </div>
    </li>
  );
}

export default Advice;
