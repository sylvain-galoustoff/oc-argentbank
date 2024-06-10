import style from "./Account.module.scss";
import PropTypes from "prop-types";

function Account({ title, amount, description }) {
  return (
    <section className={style.account}>
      <div className="account-content-wrapper">
        <h3 className={style.accountTitle}>{title}</h3>
        <p className={style.accountAmount}>${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};

export default Account;
