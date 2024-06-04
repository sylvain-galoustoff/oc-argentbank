import style from "./User.module.scss";

function User() {
  return (
    <div className="page" id={style.user}>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
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
