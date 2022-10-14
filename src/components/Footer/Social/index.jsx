
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const Social = () => (
  <div className="container dark-bg-color light-text-color mt-4 text-decoration-none mb-3">
    <div className="row row-cols-1 row-cols-sm-2 align-items-center">
      <p className="col mb-0">
        Made With Love By Figmaland All Right Reserved
      </p>
      <div className="col d-flex justify-content-end">
        <a
          className="light-text-color fs-4 me-3"
          href="https://www.facebook.com/"
        >
          <AiFillFacebook />
        </a>
        <a className="light-text-color fs-4 me-3" href="https://instagram.com/">
          <AiOutlineInstagram />
        </a>
        <a className="light-text-color fs-4 me-3" href="https://twitter.com/">
          <AiOutlineTwitter />
        </a>
        <a className="light-text-color fs-4" href="https://www.youtube.com/">
          <AiFillYoutube />
        </a>
      </div>
    </div>
  </div>
);

export default Social;
