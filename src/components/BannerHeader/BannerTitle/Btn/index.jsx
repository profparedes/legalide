const Btn = ({titleBtn, backgroundColor = "bg-gold", border = ""}) => {
  return(
    <div className={`rounded-pill px-3 py-2 ${backgroundColor} ${border} light-text-color d-inline-block`}>
      <a className="text-decoration-none" href="...">{titleBtn}</a>
    </div>
)};

export default Btn;
