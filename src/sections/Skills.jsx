import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: "◈",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend & Database",
    icon: "⌘",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Programming Languages",
    icon: "</>",
    skills: ["Java", "C", "C++", "Python"],
  },
  {
    title: "Tools & Technologies",
    icon: "⚙",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-tag">TECHNICAL EXPERTISE</span>
          <h2>My <span>Skills</span></h2>
        </div>

        <p className="skills-intro">
          Technologies and tools I've worked with and continue to
          develop my expertise in.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;