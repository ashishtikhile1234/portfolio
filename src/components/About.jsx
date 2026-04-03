import { FaUserGraduate } from 'react-icons/fa';
import '../styles/about.css';

function About() {
  return (
    <section className="about section" id="about">
      <div className="bg-glow bg-glow-1"></div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me and my journey</p>

        <div className="about-content reveal">
          <div className="about-image-wrapper">
            <div className="about-image">
              <div className="about-avatar">
                <FaUserGraduate />
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>A Passionate Software Engineer</h3>
            <p>
              I'm Ashish Vilas Tikhile, a motivated IT graduate from Prof. Ram Meghe Institute of 
              Technology & Research, Badnera–Amravati. I have hands-on experience in full-stack 
              and cloud-based application development, having worked with technologies like 
              React, Core Java, Spring Boot, and Microsoft Azure.
            </p>
            <p>
              At Thinkbridge, I completed intensive training and worked on real-world projects 
              using Azure Cloud services, microservice architecture, and CI/CD pipelines. I'm 
              passionate about building scalable solutions and continuously learning new technologies.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">8.55</div>
                <div className="about-stat-label">CGPA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">3+</div>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">6+</div>
                <div className="about-stat-label">Months Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
