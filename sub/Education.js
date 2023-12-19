export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h3>Graduate Certificate</h3>
              <h4>Lambton College, Toronto Canada</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Business Management</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h3>Bachelor of Science</h3>
              <h4>University of the West indies, Mona Kingston Jamaica</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Marketing and Accounting (Hons)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
