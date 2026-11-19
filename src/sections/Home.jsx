import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left content */}
        <div className="home-content">
          <div className="home-status">
            <span className="status-dot"></span>
            Software Engineer @ Changepond
          </div>

          <p className="home-greeting">Hello, I'm</p>

          <h1>
            Rojar <span>Nickson.</span>
          </h1>

          <h2>
            Software Engineer <span>&</span> React Developer
          </h2>

          <p className="home-description">
            Working on enterprise telecom applications, solving real-world
            issues, and building reliable user experiences with JavaScript,
            React and SQL.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn-primary">
              View My Projects <span>↗</span>
            </a>

            <a
              href="/portfolio/resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/nickson1301"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:nicksonrojar@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="home-visual">
          <div className="visual-glow"></div>

          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.js</p>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>

              <p className="code-indent">
                name: <span className="code-green">"Rojar Nickson"</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">"Software Engineer"</span>,
              </p>

              <p className="code-indent">
                company: <span className="code-green">"Changepond"</span>,
              </p>

              <p className="code-indent">
                skills: [
              </p>

              <p className="code-indent code-indent-2">
                <span className="code-orange">"JavaScript"</span>,
              </p>

              <p className="code-indent code-indent-2">
                <span className="code-orange">"React"</span>,
              </p>

              <p className="code-indent code-indent-2">
                <span className="code-orange">"SQL"</span>
              </p>

              <p className="code-indent">
                ],
              </p>

              <p className="code-indent">
                passion: <span className="code-green">"Problem Solving"</span>
              </p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Always learning. Always building.
              </p>
            </div>
          </div>

          <div className="tech-float tech-float-1">
            <span className="tech-icon react-icon">⚛</span>
            React.js
          </div>

          <div className="tech-float tech-float-2">
            <span className="tech-icon js-icon">JS</span>
            JavaScript
          </div>
        </div>
      </div>

      <div className="home-scroll">
        <span className="scroll-line"></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Home;