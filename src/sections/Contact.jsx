import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-box">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>Let's Work <span>Together.</span></h2>

          <p>
            Have an opportunity, project idea or just want to connect?
            Feel free to reach out. I'd be happy to hear from you.
          </p>

          <a
            href="mailto:nicksonrojar@gmail.com"
            className="contact-email-btn"
          >
            Let's Talk <span>↗</span>
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/nickson1301"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:nicksonrojar@gmail.com"
            >
              Email ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;