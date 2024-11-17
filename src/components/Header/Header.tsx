import phone from "@/assets/svg/phone.svg";
import styles from "./Header.module.scss";
import logo from "@/assets/svg/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img src={logo} alt="" />
        <p className={styles.title}>PeakPoint Customs</p>
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
