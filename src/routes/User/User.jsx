import { useEffect, useState } from "react";
import style from "./User.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../services/api";

function User() {
  const token = useSelector((state) => state.user.token);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(token);
      setUserData(user);
    };

    fetchUser();
  }, [token]);

  return (
    <div className="page" id={style.user}>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
          {userData && `${userData.firstName} ${userData.lastName}`}
        </h1>
        <button className={style.editButton}>Edit Name</button>
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
