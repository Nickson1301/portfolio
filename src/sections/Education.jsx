import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-tag">ACADEMIC BACKGROUND</span>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <span className="education-level">POSTGRADUATE</span>
            <h3>Master of Computer Science</h3>
            <p className="education-college">St. Joseph's College, Trichy</p>
            <div className="education-bottom">
              <span> M.Sc. Computer Science</span>
            </div>
          </div>

          <div className="education-card">
            <span className="education-level">UNDERGRADUATE</span>
            <h3>Bachelor of Computer Science</h3>
            <p className="education-college">St. Joseph's College, Trichy</p>
            <div className="education-bottom">
              <span>B.Sc. Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;