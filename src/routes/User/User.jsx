import { useEffect } from "react";
import style from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/api";
import { updateUser } from "../../store/userReducer";
import { Link } from "react-router-dom";

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(token);
      dispatch(updateUser(user));
    };

    fetchUser();
  }, [token, dispatch]);

  return (
    <div className="page" id={style.user}>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
          {userData && `${userData.firstName} ${userData.lastName}`}
        </h1>
        <Link to="/user/edit" className={`button ${style.editButton}`}>
          Edit name
        </Link>
      </div>

      <section className={style.account}>
        <div className="account-content-wrapper">
          <h3 className={style.accountTitle}>Argent Bank Checking (x8349)</h3>
          <p className={style.accountAmount}>$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <button className="transaction-button">View transactions</button>
      </section>
    </div>
  );
}

export default User;
