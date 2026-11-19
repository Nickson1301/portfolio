import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          RN<span>.</span>
        </a>

        <p>
          Designed & developed by <span>Rojar Nickson</span>
        </p>

        <a
          href="https://github.com/nickson1301"
          target="_blank"
          rel="noreferrer"
          className="footer-github"
        >
          GitHub ↗
        </a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rojar Nickson. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;