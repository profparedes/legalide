

const PageTitle = ({title, description, align = 'center'}) => {
  return (
  <div className={`container text-${align} light-text-color`}>
    <h2>{title}</h2>
    <p className="mt-4">
      {description}
    </p>
  </div>
)};

export default PageTitle;
