import { BackgroundBtn } from "./style";

const Request = () => (
  <div className="container mt-5">
    <div className="row justify-content-between align-items-center mb-4">
      <div className="col light-text-color">
        <h2>Request A Free Consultation</h2>
        <p>the quick fox jumps over the lazy dog</p>
      </div>
      <div className="col d-flex justify-content-end">
        <BackgroundBtn className="light-text-color py-3 px-4 rounded-1 bg-contact-us d-inline-block">
          <a className="text-decoration-none" href='...' >contact us</a>
        </BackgroundBtn>
      </div>
    </div>
  </div>
);

export default Request;
