import styles from "../styles/banner.module.css";
import Linkedin from "../svg/linkedin.js";
import { useContext } from "react";
import { Contexto } from "../appContext";

export default function Banner() {
  const name = "Janice Bailey";
  const email = "baileyjanice16@gmail.com";
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h1>{name}</h1>
          <h2>
            Banker |
            <span className={styles.brH2}>
              <br />
            </span>{" "}
            Bachelor of Science |
            <span className={styles.brH2}>
              <br />
            </span>{" "}
            Graduate Certificate
          </h2>
          <h3>
            [ CUSTOMER SERVICE / SALES / ACCOUNTING / CASH MANAGEMENT / BANK
            RECONCILATION / DATA ENTRY  ]
          </h3>
          <h3>
            📧 <a href={`mailto:${email}`}>{email}</a>
          </h3>
          <div className={`${styles.buttons}`}>
            <div>
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/janice-bailey-bsc-3858a5291/"
                >
                  <Linkedin />
                </a>
              </button>
            </div>
            <button onClick={openModal} className={`${styles.but}`}>
              CONTACT ME
            </button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img alt="Janice Bailey" src="/Janice.jpg" />
        </figure>
      </div>
    </section>
  );
}
