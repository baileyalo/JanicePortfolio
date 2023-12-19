import { useContext } from "react";
import { Contexto } from "../appContext";

export default function About() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = "baileyjanice16@gmail.com";
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>About me</h2>
          <h3>
            My name is Janice Bailey,
            <br />
            <span className="colorRed">
              Banker | Accountant | Customer Service | Marketing and Sales
            </span>
          </h3>
        </header>
        <p>
          A dedicated and result-oriented Banker possessing knowledge in
          accounting, marketing, sales and customer service that I will utilize
          to serve your organization and establish an enjoyable career for
          myself.
        </p>
        <p>
          Email:
          <strong>
            <a href={`mailto:${email}`}> 📧{email}</a>
          </strong>    
          {" "}and visit my{" "}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/janice-bailey-bsc-3858a5291/"
            >
              linkedin
            </a>
          </strong>{" "}
          profile.
        </p>
      </div>
    </section>
  );
}
