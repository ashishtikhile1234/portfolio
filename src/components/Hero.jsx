import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa';
import '../styles/hero.css';

const roles = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'Problem Solver'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Ashish Tikhile</h1>
        <div className="hero-title-wrapper">
          <span className="hero-title-static">I'm a</span>
          <span className="hero-title-dynamic">{text}</span>
        </div>
        <p className="hero-description">
          Motivated IT graduate with hands-on experience in full-stack and cloud-based 
          application development. Building scalable solutions with modern technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary" onClick={(e) => scrollToSection(e, '#projects')}>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => scrollToSection(e, '#contact')}>
            Contact Me
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/mostly-ashish/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/ashishtikhile1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:ashishtikhile2003@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+919356266176" aria-label="Phone">
            <FaPhone />
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
        <FaChevronDown style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }} />
      </div>
    </section>
  );
}

export default Hero;
