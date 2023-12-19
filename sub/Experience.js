import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  2019 - 2023
                </span>
              </h5>
              <h3>Bank Teller</h3>
              <h4>
                Sagicor Bank Jamaica (Branch Operations). Kingston, Jamaica
              </h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>
                    Ensured that transactions were posted accurately,
                    efficiently and in accordance with stipulated guidelines.{" "}
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Administered training sessions for new employees on the
                    teller line.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Supervised new tellers when processing transactions or when
                    the supervisors/managers are in meetings.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Calculated cash inflows and outflows to balance drawer, add
                    new customers to the system and handle complaints.
                  </span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  2018 - 2019
                </span>
              </h5>
              <h3>Insurance Intern</h3>
              <h4>National Commercial Bank, Kingston jamaica</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>
                    Ensured that most of the outstanding insurances were paid by
                    contacting customers via telephone or email. My team
                    increased the number of updated insurances to 90%.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Ensured that documents were filed correctly for the company
                    to operate efficiently.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Collaborated with other team members to prepare cheque
                    letters for customers.
                  </span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  2016 -2016
                </span>
              </h5>
              <h3>Assistant Customer Service Representative</h3>
              <h4>Child Development Agency, Jamaica</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>
                    Greeted customers at the front desk and provided relevant
                    information.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Directed incoming calls to officers and follow-up with
                    customers.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>
                    Collaborated with officers and visited homes of adopted
                    children.
                  </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{" "}
                  <span>Ensured that documents were filed correctly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
