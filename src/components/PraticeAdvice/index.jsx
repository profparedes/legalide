import PageTitle from '../PageTitle';
import CardImg from './CardImg';

//--------------import imgs--------------------
import FraudsOrMislead from '../../assets/FraudsOrMislead.png';
import BailesEWarrants from '../../assets/BailesEWarrants.png';
import FederalDrug from '../../assets/FederalDrug.png';
import TrafficRelated from '../../assets/TrafficRelated.png';

//import './styles.css';

const PraticeAdvice = () => {
  
  return(
  <section id="pratice-advice" className="container mt-6">
  <PageTitle 
    title="Practice Advice" 
    description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
  />
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5 g-3">
    <div className='col'>
      <CardImg 
        title="Frauds or Mislead"
        description="Newton thought that light was made up of particles, but then it was discovered"
        image={FraudsOrMislead}
      />
    </div>
    <div className='col'>
      <CardImg 
        title="Bailes &amp; Warrants"
        description="“Quantum mechanics” is the description of the behaviour of matter"
        image={BailesEWarrants}
      />
    </div>
    <div className='col'>
      <CardImg 
        title="Federal Drug Crimes"
        description="They describe a universe consisting of bodies moving"
        image={FederalDrug}
      />
    </div>
    <div className='col'>
      <CardImg
        title="Traffic Related Crimes"
        description="They finally obtained a consistent description of the behaviour "
        image={TrafficRelated}
      />
    </div>
  </div>
</section>
)};

export default PraticeAdvice;
