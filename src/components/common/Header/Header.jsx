import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../../assets/argentBankLogo.png";
import style from "./Header.module.scss";
import Toast from "../Toast/Toast";

function Header() {
  const toast = useSelector((state) => state.toast);

  return (
    <header id={style.header}>
      <div id={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo Argent Bank" />
        </Link>
      </div>
      <nav id={style.nav}>
        <ul>
          <li>
            <Link to="/signin">
              <FaCircleUser /> Sign In
            </Link>
          </li>
        </ul>
      </nav>
      {toast.show === true && <Toast />}
    </header>
  );
}

export default Header;
