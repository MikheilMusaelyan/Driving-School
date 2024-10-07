import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowContact } from '../features/messageSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const showContact = useSelector((state: any) => state.message.showContact);

  const handleContactClick = (event) => {
    if (!event.target.closest('.contact')) {
      dispatch(toggleShowContact());
    }
  };

  return (
    <nav>
      {showContact && (
        <div className="contact-wrap" onClick={(event) => handleContactClick(event)}>
          <div className="contact">
            <ul className="contact-ul">
              <li className="contact-li">
                <FontAwesomeIcon icon={faPhone} style={{ color: "rgb(19, 191, 19)" }} />
                <div className="contact-text">718-764-3500</div>
              </li>
              <li className="contact-li">
                <FontAwesomeIcon icon={faMailBulk} style={{ color: "rgb(0, 85, 255)" }} />
                <div className="contact-text">autoschoolnyc@gmail.com</div>
              </li>
            </ul>
          </div>
        </div>
      )}
      <span className="logo-wrap">
        <span className='logo'>
          <img className='logo-img' src="/logo.png" alt="logo" />
        </span>
      </span>
      <ul className="main-navbar">
        <li className='nav-li' onClick={(event) => handleContactClick(event)}>
          <div className='nav-a'>Contact</div>
        </li>
      </ul>
    </nav>
  );
}
