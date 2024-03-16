import "./social.css";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiSearch,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Social = ({ other }) => {
  return (
    <div className={other ? "socialMain active" : "socialMain"}>
      <div className="streetAdress">
        <span>Location: 121 Wallstreet, NY, Kinshasa</span>
        <span>Email: contact@cimired.com</span>
      </div>

      <div className="rxSocial">
        <span>For urgence: +243 821337095</span>

        <div className="iconsRx">
          <FiLinkedin />
          <FiTwitter />
          <FiFacebook />
          <FiInstagram />
          <FiYoutube />
        </div>

        <div className="searchIcon">
          <FiSearch />
        </div>
      </div>
    </div>
  );
};

export default Social;
