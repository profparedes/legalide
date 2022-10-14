import PageTitle from '../PageTitle';
import CardContact from './CardContact';
import Request from './Request';
import IconPhone from '../../assets/IconPhone.png'
import IconLocation from '../../assets/IconLocation.png'
import IconSend from '../../assets/IconSend.png'

//import './styles.css';

const ContactUs = () => (
  <section id="contact-us" className="container mt-6">
    <PageTitle 
      title="Get In Touch" 
      description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
    />
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-3 mt-5 g-0 justify-content-center">
        <div className='col d-flex py-4'>
          <CardContact 
            icon={IconPhone}
            emails={["georgia.young@example.com", "georgia.young@ple.com"]}
          />
        </div>
        <div className='col d-flex'>
          <CardContact 
            icon={IconLocation}
            emails={["georgia.young@example.com", "georgia.young@ple.com"]}
            backgroundColor="bg-secundary-color"
            textColor="light-text-color"
            borderColor="#ffffff"
          />
        </div>
        <div className='col d-flex py-4'>
          <CardContact 
            icon={IconSend}
            emails={["georgia.young@example.com", "georgia.young@ple.com"]}
          />
        </div>
      </div>
    </div>
    <Request />
  </section>
);

export default ContactUs;
