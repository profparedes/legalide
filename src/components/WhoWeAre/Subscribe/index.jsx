import { SubscribeContainer } from "./style";


const Subscribe = () => (
  <SubscribeContainer className="container bg-gradient py-4 me-auto ms-auto mt-5 rounded-1 px-3">
    <div className="row row-cols-1 row-cols-sm-2">
      <div className="col">
        <h2 className="h3 mb-0 light-text-color">
          Subscribe For Latest <br /> Newsletter
        </h2>
      </div>
      <div className='col align-self-center '>
        <div className="input-group ">
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary bg-gold light-text-color border"
            type="button"
            id="button-addon2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </SubscribeContainer>
);

export default Subscribe;
