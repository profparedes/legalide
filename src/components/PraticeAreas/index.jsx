import PageTitle from '../PageTitle';
import IconCard from './IconCard';
import IconBalance from '../../assets/IconBalance.png';
import IconHammer from '../../assets/IconHammer.png';
import IconSheet from '../../assets/IconSheet.png';


const PraticeAreas = () => {
  return(
  <section id="pratice-areas" className="container mt-6">
    <PageTitle 
      title="Our Practice Areas" 
      description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
    />
    <div className="row row-cols-1 row-cols-md-3 mt-5 g-4">
      <div className='col'>
        <IconCard 
          icon={IconBalance}
          description="Family Law"
        />
      </div>
      <div className='col'>
        <IconCard 
          icon={IconHammer}
          description="Business Law"
        />
      </div>
      <div className='col'>
        <IconCard 
          icon={IconSheet}
          description="Trust &amp; Estates"
        />
      </div>
    </div>
  </section>
)};

export default PraticeAreas;
