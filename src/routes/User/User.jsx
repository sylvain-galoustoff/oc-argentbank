import { useEffect, useState } from "react";
import style from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/api";
import { updateUser } from "../../store/userReducer";
import Account from "./Account/Account";
import EditUser from "./EditUser/EditUser";

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user);

  const [editingName, setEditingName] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(token);
      dispatch(updateUser(user));
    };

    fetchUser();
  }, [token, dispatch]);

  const toggleEditName = () => {
    setEditingName(!editingName);
  };

  return (
    <div className="page" id={style.user}>
      <div className={style.header}>
        <h1>Welcome back</h1>
        {editingName ? (
          <EditUser toggleEdit={toggleEditName} />
        ) : (
          <>
            <p className={style.h1}>{userData && `${userData.firstName} ${userData.lastName}`}</p>
            <button className={style.editButton} onClick={toggleEditName}>
              Edit name
            </button>
          </>
        )}
      </div>

      <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
    </div>
  );
}

export default User;
