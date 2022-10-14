
const IconText = ({description1, description2, icon}) => {
  return(
  <div className="d-flex">
    <div className="me-3">
      <img className="icon" src={icon} alt={description1} />
    </div>
    <div className="light-text-color">
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  </div>
)};

export default IconText;
