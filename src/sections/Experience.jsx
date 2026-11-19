import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">CAREER JOURNEY</span>
          <h2>Professional <span>Experience</span></h2>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>

          <div className="experience-card">
            <div className="timeline-dot"></div>

            <div className="experience-top">
              <div>
                <h3>Software Engineer</h3>
                <h4>Changepond Technologies</h4>
              </div>

              <span className="experience-date">
                Nov 2025 — Present
              </span>
            </div>

            <p className="experience-description">
              Working on a telecom project, providing support for
              a live application and helping resolve issues reported
              by clients during day-to-day operations.
            </p>

            <ul className="experience-list">
              <li>
                Troubleshooting and resolving application issues
                reported by clients.
              </li>

              <li>
                Supporting the smooth functioning of a live
                telecom application.
              </li>

              <li>
                Analyzing application issues and assisting in
                identifying their root causes.
              </li>

              <li>
                Working with JavaScript, React and SQL
                during application support activities.
              </li>
            </ul>

            <div className="experience-tech">
              <span>JavaScript</span>
              <span>React.js</span>
              <span>SQL</span>
              <span>Application Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;