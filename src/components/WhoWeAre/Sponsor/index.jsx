
import hooli from '../../../assets/hooli.png';
import lyft from '../../../assets/lyft.png';
import cap from '../../../assets/cap.png';
import stripe from '../../../assets/stripe.png';
import aws from '../../../assets/aws.png';
import et from '../../../assets/et.png';

const Sponsor = () => (
  <div className="mx-auto d-flex align-items-center justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
    <div className="col d-flex justify-content-center">
      <img src={hooli} alt="hooli" />
    </div>
    <div className="col d-flex justify-content-center">
      <img src={lyft} alt="lyft" />
    </div>
    <div className="col d-flex justify-content-center">
      <img src={cap} alt="cap" />
    </div>
    <div className="col d-flex justify-content-center">
      <img src={stripe} alt="lyft" />
    </div>
    <div className="col d-flex justify-content-center">
      <img src={aws} alt="aws" />
    </div>
    <div className="col d-flex justify-content-center">
      <img src={et} alt="et" />
    </div>
  </div>
);

export default Sponsor;
