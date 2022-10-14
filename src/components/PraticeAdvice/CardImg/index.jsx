

const CardImg = ({title, description, image}) => {
  
  return (
    <div className="light-bg-color pt-5 mt-3 h-100 d-flex flex-column">
      <div className="ms-4 flex-grow-1 me-4">
        <p className="h5 mb-3">
          {title}
        </p>
        <p className="gray-text-color">
          {description}
        </p>
      </div>
      <img src={image} className="w-100 h-50" alt={title} />
    </div>
)};

export default CardImg;
