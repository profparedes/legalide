import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { SiMinutemailer } from 'react-icons/si';

const Info = () => (
  <section className="bg-secundary-color">
    <div className="container">
      <div className="row pt-5 ms-2">
        
        <div className="col-lg-2 col-md-3 col-sm-6 light-text-color">
          <p className="h5 mb-3">Company Info</p>
          <ul className="list-unstyled mb-5">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Carrier</li>
            <li className="mb-2">Pass through</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 light-text-color">
          <p className="h5 mb-3">Legal</p>
          <ul className="list-unstyled mb-5">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Carrier</li>
            <li className="mb-2">Pass through</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 light-text-color">
          <p className="h5 mb-3">Features</p>
          <ul className="list-unstyled mb-5">
            <li className="mb-2">Business Marketing</li>
            <li className="mb-2">User analytic</li>
            <li className="mb-2">Live chat</li>
            <li>Unlimited support</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 light-text-color">
          <p className="h5 mb-3">Resources</p>
          <ul className="list-unstyled mb-5">
            <li className="mb-2">IOS e Android</li>
            <li className="mb-2">Watch a demo</li>
            <li className="mb-2">Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 light-text-color">
          <p className="h5 mb-3">Get in touch</p>
          <ul className="list-unstyled mb-5">
            <li className="mb-2">
              <span className="me-2 fs-4">
                <BsTelephone />
              </span>
              480 555-0103
            </li>
            <li className="mb-2">
              <span className="me-2 fs-4">
                <GoLocation />
              </span>
              4517 Washington Ave.
            </li>
            <li className="mb-2">
              <span className="text-decoration-none me-2 fs-4">
                <SiMinutemailer />
              </span>
              debra.holt@example.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Info;
