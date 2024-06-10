import { useEffect } from "react";
import style from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/api";
import { updateUser } from "../../store/userReducer";
import { Link } from "react-router-dom";
import Account from "./Account/Account";

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

      <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
    </div>
  );
}

export default User;
