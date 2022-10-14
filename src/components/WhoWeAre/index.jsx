import LinkVideo from './LinkVideo';
import Sponsor from './Sponsor';
import Subscribe from './Subscribe';
import PageTitle from '../PageTitle';
import IconText from './IconText';

import IconPeople from '../../assets/IconPeople.png'
import IconSpeed from '../../assets/IconSpeed.png'

//import './styles.css';

const WhoWeAre = () => {
  return (
  <section id="who-we-are" className="container mt-6">
    <PageTitle 
      title="Who We Are" 
      description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
    />
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 g-5 align-items-center">
        <div className='col'>
          <LinkVideo /> 
        </div>
        <div className='col'>
          <PageTitle
            title="Most trusted in our field" 
            description="Most calendars are designed for teams. Slate is designed for freelancers
            who want a simple way to plan their schedule."
            align="start"
          />
          <IconText 
            description1="the quick fox jumps over the lazy dog"
            description2="Things on a very small scale..."
            icon={IconPeople}
          />
          <IconText 
            description1="the quick fox jumps over the lazy dog"
            description2="Things on a very small scale..."
            icon={IconSpeed}
          />
        </div>
      </div>
    </div>
    <div className="mt-7">
      <div className="container">
        <Sponsor />
      </div>
      <Subscribe />
    </div>
  </section>
)};

export default WhoWeAre;
