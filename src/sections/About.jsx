import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">INTRODUCTION</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              A developer focused on building,
              learning and improving.
            </h3>

            <p>
              I'm a Software Engineer at Changepond Technologies,
              working on enterprise telecom applications. My work
              involves supporting live applications, troubleshooting
              issues reported by clients and helping ensure smooth
              application operations.
            </p>

            <p>
              With a background in Computer Science and an interest
              in web development, I enjoy working with JavaScript,
              React and SQL while continuously improving my technical
              skills and exploring new technologies.
            </p>

            <p>
              I'm passionate about problem-solving, learning through
              real-world experience and growing as a software engineer.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-card-icon">⌘</span>
              <h4>Problem Solving</h4>
              <p>Analyzing issues and finding practical solutions.</p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">⌘</span>
              <h4>Continuous Learning</h4>
              <p>Exploring technologies and improving my skills.</p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">⌘</span>
              <h4>Team Collaboration</h4>
              <p>Working together to solve problems and deliver results.</p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">⌘</span>
              <h4>Development</h4>
              <p>Building applications and improving user experiences.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;