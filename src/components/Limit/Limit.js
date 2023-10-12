import "./Limit.css";

function Limit({ title, image, text }) {
  return (
    <li className="limit__item">
      <div className="limit__container">
        <div
          className="limit__image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h3 className="limit__title">{title}</h3>
      </div>
      <p className="limit__text">{text}</p>
    </li>
  );
}

export default Limit;
