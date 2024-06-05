import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../../assets/argentBankLogo.png";
import style from "./Header.module.scss";
import Toast from "../Toast/Toast";
import { updateToken } from "../../../store/userReducer";

function Header() {
  const toast = useSelector((state) => state.toast);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(updateToken(null));
  };

  return (
    <header id={style.header}>
      <div id={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo Argent Bank" />
        </Link>
      </div>
      <nav id={style.nav}>
        <ul>
          {!user.token && (
            <li>
              <Link to="/signin">
                <FaCircleUser /> Sign In
              </Link>
            </li>
          )}
          {user.token && (
            <div className={style.userNav}>
              <li>
                <Link to="/user">
                  <FaCircleUser /> {user.firstName}
                </Link>
              </li>
              <li>
                <button type="button" id={style.logOutButton} onClick={logout}>
                  <FaSignOutAlt /> Sign out
                </button>
              </li>
            </div>
          )}
        </ul>
      </nav>
      {toast.show === true && <Toast />}
    </header>
  );
}

export default Header;
