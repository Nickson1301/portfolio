import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "Fish Net Mart",
    category: "E-Commerce Application",
    description:
      "An online seafood shopping platform where users can explore products, manage their cart and place orders. Includes an admin interface for managing products.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nickson1301",
  },
  {
    number: "02",
    title: "Attendance & Leave Management",
    category: "Management Application",
    description:
      "A role-based application designed to manage student and teacher profiles, attendance records and leave management through dedicated dashboards.",
    tech: ["React", "JavaScript", "JSON Server", "CSS"],
    github: "https://github.com/nickson1301",
  },
  {
    number: "03",
    title: "Token Management System",
    category: "Web Application",
    description:
      "A digital token booking system for fishermen that allows users to book tokens by date and time while administrators manage token bookings.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/nickson1301",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-tag">MY WORK</span>
          <h2>Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more">
          <a
            href="https://github.com/nickson1301"
            target="_blank"
            rel="noreferrer"
          >
            Explore More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;