import { FaFolder, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/projects.css';

const projects = [
  {
    title: 'DocVault',
    badge: 'Team Project',
    description: 'A secure document management platform for file upload, search, and download with cloud-powered processing and scalability.',
    highlights: [
      'Built with React, Spring Boot, and Core Java for full-stack functionality',
      'Integrated Azure Blob Storage, Functions, and Event Grid for processing',
      'Handled Azure deployment and cloud integration in a team of 4',
      'Implemented authentication and CI/CD using GitHub Actions',
    ],
    tags: ['React', 'Spring Boot', 'Core Java', 'Azure', 'Cosmos DB', 'CI/CD'],
  },
  {
    title: 'Weekly Manager',
    badge: null,
    description: 'A full-stack task management application for creating, tracking, and scheduling tasks with automated deployment.',
    highlights: [
      'Developed using React, Spring Boot, and Core Java for end-to-end functionality',
      'Used Azure SQL for data storage and deployed on Azure App Service',
      'Implemented CI/CD pipeline for automated deployment',
      'Built task creation, tracking, and scheduling features',
    ],
    tags: ['React', 'Spring Boot', 'Core Java', 'Azure', 'Azure SQL', 'CI/CD'],
  },
  {
    title: 'RFID Student Management',
    badge: null,
    description: 'An automated system for attendance and access management with structured data handling and real-time validation.',
    highlights: [
      'Developed automated attendance and access management using Java and MySQL',
      'Worked on structured data handling and real-time data validation',
      'Focused on accuracy, automation, and instruction-based task processing',
    ],
    tags: ['Java', 'MySQL', 'RFID', 'Automation'],
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="bg-glow bg-glow-1"></div>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card reveal" key={index}>
              <div className="project-header">
                <FaFolder className="project-icon" />
                <div className="project-links">
                  <a href="https://github.com/ashishtikhile1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <h3 className="project-title">
                {project.title}
                {project.badge && <span className="project-badge">{project.badge}</span>}
              </h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tech-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
