import '../styles/experience.css';

const experiences = [
  {
    role: 'Apprentice Software Engineer',
    company: 'Thinkbridge',
    date: '09/2025 – 03/2026',
    location: 'Pune, Maharashtra',
    points: [
      'Completed intensive training on Core Java, Spring Boot, React, TypeScript, SQL, Azure',
      'Worked on real-world projects using Azure Cloud services and microservice architecture',
      'Gained hands-on experience in API development, authentication, cloud deployment, and CI/CD',
      'Followed industry practices like Git workflow, Pull Requests, and code reviews',
      'Built and deployed scalable applications using Azure App Services and Functions',
    ],
    tags: ['Core Java', 'Spring Boot', 'React', 'TypeScript', 'SQL', 'Azure', 'CI/CD', 'REST APIs'],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item reveal" key={index}>
              <div className="experience-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <p className="experience-date">{exp.date}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                </div>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span className="tech-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
