import { useState } from "react";
import style from "./SignIn.module.scss";
import { FaCircleUser } from "react-icons/fa6";
import { logUser } from "../../services/api";
import { useDispatch } from "react-redux";
import { updateToast } from "../../store/toastReducer";
import { useNavigate } from "react-router-dom";
import { updateToken } from "../../store/userReducer";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);

  const handleInput = (e, field) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    const response = await logUser(options);
    console.log(response);
    if (response.status === 400) {
      dispatch(
        updateToast({
          show: true,
          type: "warning",
          message: response.message,
        })
      );
    }

    if (response.status === 200) {
      dispatch(updateToken(response.body.token));
      dispatch(
        updateToast({
          show: true,
          type: "success",
          message: "Login succeed, welcome !",
        })
      );
      navigate("/user");
    }
  };

  return (
    <div className="page" id={style.signIn}>
      <section className={style.signInContent}>
        <FaCircleUser />
        <h1>Sign In</h1>
        <form onSubmit={submitForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={form.username} onChange={(e) => handleInput(e, "email")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={form.password} onChange={(e) => handleInput(e, "password")} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={remember} onChange={() => setRemember(!remember)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={style.signInButton}>Sign In</button>
        </form>
      </section>
    </div>
  );
}

export default SignIn;
