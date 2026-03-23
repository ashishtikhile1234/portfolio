import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href="https://linkedin.com/in/ashishtikhile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/ashishtikhile1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:ashishtikhile2003@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Ashish Tikhile</span>. All rights reserved.
        </p>
        <p className="footer-built">
          Built with <FaHeart style={{ color: '#ef4444', verticalAlign: 'middle', margin: '0 4px' }} /> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
