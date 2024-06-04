import style from "./Home.module.scss";
import chatIcon from "../../assets/icon-chat.png";
import moneyIcon from "../../assets/icon-money.png";
import securityIcon from "../../assets/icon-security.png";

function Home() {
  return (
    <div className="page" id={style.home}>
      <div id={style.hero}>
        <section className={style.heroContent}>
          <h2 className="sr-only">Promoted Content</h2>
          <p className={style.subtitle}>No fees.</p>
          <p className={style.subtitle}>No minimum deposit.</p>
          <p className={style.subtitle}>High interest rates.</p>
          <p className={style.text}>Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className={style.features}>
        <h2 className="sr-only">Features</h2>
        <div className={style.featureItem}>
          <img src={chatIcon} alt="Chat Icon" className={style.featureIcon} />
          <h3 className={style.featureItemTitle}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less
            than 5 minutes.
          </p>
        </div>
        <div className={style.featureItem}>
          <img src={moneyIcon} alt="Chat Icon" className={style.featureIcon} />
          <h3 className={style.featureItemTitle}>More savings means higher rates</h3>
          <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className={style.featureItem}>
          <img src={securityIcon} alt="Chat Icon" className={style.featureIcon} />
          <h3 className={style.featureItemTitle}>Security you can trust</h3>
          <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
