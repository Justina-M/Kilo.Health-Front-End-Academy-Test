const IconList = ({ data = [], className }) => {
  return (
    <ul className={`IconList ${className ? className : ""}`}>
      {data.map((item, index) => (
        <li key={index} className="IconList__item">
          <div className="IconList__icon">
            <img src={item.imgSrc} alt={item.title} />
          </div>
          <div className="IconList__content">
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
