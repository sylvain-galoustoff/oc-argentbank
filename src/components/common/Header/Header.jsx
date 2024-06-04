import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../../assets/argentBankLogo.png";
import style from "./Header.module.scss";

function Header() {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <header id={style.header}>
      <div id={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo Argent Bank" />
        </Link>
      </div>
      <nav id={style.nav}>
        <ul>
          {!user && (
            <li>
              <Link to="/signin">
                <FaCircleUser /> Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
