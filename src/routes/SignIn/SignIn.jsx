import { useState } from "react";
import style from "./SignIn.module.scss";
import { FaCircleUser } from "react-icons/fa6";

function SignIn() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e, field) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="page" id={style.signIn}>
      <section className={style.signInContent}>
        <FaCircleUser />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={form.username} onChange={(e) => handleInput(e, "username")} />
            <p className="validator">Invalid mail format</p>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={form.password} onChange={(e) => handleInput(e, "password")} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={style.signInButton}>Sign In</button>
        </form>
      </section>
    </div>
  );
}

export default SignIn;
