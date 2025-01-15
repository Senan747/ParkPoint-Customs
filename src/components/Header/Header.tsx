import phone from "@/assets/svg/phone.svg";
import styles from "./Header.module.scss";
import logo from "@/assets/svg/logo.svg";
import { useState } from "react";
import LoginPopup from "../Login";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const handleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo_container} onClick={() => navigate("/")}>
        <img src={logo} alt="" />
        <p className={styles.title}>ParkPoint Customs</p>
      </div>
      <div>
        <ul>
          <li>Dəstək</li>
          <li>
            <select name="" id="">
              <option value="AZ">AZ</option>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
          </li>
          <li>
            <img src={phone} alt="" />
            <span>777</span>
          </li>
          <li>
            <button onClick={handleLoginPopup}>Daxil ol</button>
          </li>
        </ul>
      </div>
      {showLoginPopup && (
        <LoginPopup open={showLoginPopup} close={handleLoginPopup} />
      )}
    </div>
  );
}

export default Header;
