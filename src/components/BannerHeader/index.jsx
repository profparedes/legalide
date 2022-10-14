import Header from '../Header';
import BannerTitle from './BannerTitle';
import agentV from '../../assets/agentV.png';
//import './styles.css';

const BannerHeader = () => {
  return(
   <section className="bg-banner-img">
      <Header />
      <div className="container">
        <div className="row mt-4 align-items-center">
          <div className="col d-flex flex-column align-items-center">
            <BannerTitle />
          </div>
          <div className="col mt-4 d-flex justify-content-center">
            <img id="agentV" className="img-sm-size" src={agentV} alt="Agent" />
          </div>
        </div>
      </div>
    </section>
)};

export default BannerHeader;
