
import { ButtonContainer } from './style';

const CardContact = ({icon, emails, backgroundColor = 'light-bg-color', textColor = 'secundary-color', borderColor = '#295C7A'}) => {
  return(
  <div className={`${textColor} ${backgroundColor} d-flex flex-column align-items-center text-center py-5 w-100`}>
    <div className="my-auto">
      <div>
        <img className="mb-4" src={icon} alt=""/>
      </div>
      <div className="dark-color mb-5 flex-grow-1">
        <div>
          {emails.map((email) => <p key={email}>{email}</p>)}
        </div>
        <p>Get Support</p>
      </div>
      <ButtonContainer href="..." borderColor={borderColor} className={`${textColor} py-2 px-3 rounded text-decoration-none`}>
        Submit Request
      </ButtonContainer>
    </div>
  </div>
)};

export default CardContact;
