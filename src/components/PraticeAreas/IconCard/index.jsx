

const IconCard = ({icon, description}) => {
  return (
  <div className="secundary-color rounded-1 light-bg-color text-center py-3 m-mobile h-100">
    <img className='mt-3' src={icon} alt={description} />
    <p className='mt-3 mb-3'>{description}</p>
  </div>
)};

export default IconCard;
