import { Link, useNavigate } from "react-router-dom";
import style from "./EditUser.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/api";
import { updateToast } from "../../store/toastReducer";

function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      firstName: userData.firstName,
      lastName: userData.lastName,
    }));
  }, [userData]);

  const handleInput = (e, field) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await updateUserProfile(userData.token, form);
    if (response.status === 200) {
      navigate("/user");
    } else {
      dispatch(
        updateToast({
          show: true,
          type: "danger",
          message: "Network error, please try again later.",
        })
      );
    }
  };

  return (
    <div className="page" id={style.editUser}>
      <section className={style.signInContent}>
        <h1>Update your identity</h1>
        <form onSubmit={submitForm}>
          <div className="input-wrapper">
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" value={form.firstName} onChange={(e) => handleInput(e, "firstName")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" value={form.lastName} onChange={(e) => handleInput(e, "lastName")} />
          </div>
          <button className={style.signInButton}>Update</button>
          <Link to="/user" className={`button ${style.signInButton}`} id={style.cancelButton}>
            Cancel
          </Link>
        </form>
      </section>
    </div>
  );
}

export default EditUser;
