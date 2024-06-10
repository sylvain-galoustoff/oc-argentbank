import style from "./EditUser.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../services/api";
import { updateToast } from "../../../store/toastReducer";
import PropTypes from "prop-types";
import { updateUser } from "../../../store/userReducer";

function EditUser({ toggleEdit }) {
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
      const newUserData = { ...userData };
      newUserData.firstName = form.firstName;
      newUserData.lastName = form.lastName;
      dispatch(updateUser(newUserData));
      cancelEdit();
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

  const cancelEdit = () => {
    setForm((prevState) => ({
      ...prevState,
      firstName: userData.firstName,
      lastName: userData.lastName,
    }));
    toggleEdit();
  };

  return (
    <form onSubmit={submitForm} id={style.form}>
      <div className="inline-wrapper">
        <div className="input-wrapper">
          <label className="sr-only" htmlFor="firstname">
            First name
          </label>
          <input type="text" id="firstname" value={form.firstName} onChange={(e) => handleInput(e, "firstName")} />
        </div>
        <div className="input-wrapper">
          <label className="sr-only" htmlFor="lastname">
            Last name
          </label>
          <input type="text" id="lastname" value={form.lastName} onChange={(e) => handleInput(e, "lastName")} />
        </div>
      </div>
      <div className={`inline-wrapper ${style.center}`}>
        <button type="submit" className={style.signInButton}>
          Update
        </button>
        <button type="button" className={style.signInButton} id={style.cancelButton} onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}

EditUser.propTypes = {
  toggleEdit: PropTypes.func,
};

export default EditUser;
