import Btn from './Btn';
import { TitleContainer } from './style';

const BannerTitle = () => (
  <>
    <TitleContainer className="light-text-color fs-legal fw900">
      LEGAL PRO <br />
      SERVICES
    </TitleContainer>
    <p className="light-text-color mt-4 fs-5">
      We know how large objects will act, <br />
      but things on a small scale.
    </p>
    <div className="d-md-flex d-sm-block mt-4">
      <div className="me-3 mb-3">
        <Btn 
          titleBtn="Get Quote Now"
        />
      </div>
      <div className="">
        <Btn 
        titleBtn="Learn More"
        backgroundColor=''
        border='border'
        />
      </div>
      {/* <LearnBtn /> */}
    </div>
  </>
);

export default BannerTitle;
