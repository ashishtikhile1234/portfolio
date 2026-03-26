import {
  FaCode, FaServer, FaDatabase, FaCloud, FaTools,
  FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaMicrosoft
} from 'react-icons/fa';
import {
  SiTypescript, SiSpringboot, SiDotnet, SiSharp, SiMysql
} from 'react-icons/si';
import '../styles/skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'C# (Basic)', icon: <SiSharp /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ]
  },
  {
    title: 'Frontend Technologies',
    icon: <FaReact />,
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular (Basic)', icon: <FaAngular /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ]
  },
  {
    title: 'Backend Technologies',
    icon: <FaServer />,
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'REST APIs', icon: <FaServer /> },
      { name: '.NET Core (Basic)', icon: <SiDotnet /> },
    ]
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: [
      { name: 'Azure SQL', icon: <FaDatabase /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Cosmos DB', icon: <FaMicrosoft /> },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: [
      { name: 'Azure App Service', icon: <FaMicrosoft /> },
      { name: 'Blob Storage', icon: <FaCloud /> },
      { name: 'Azure Functions', icon: <FaMicrosoft /> },
      { name: 'CI/CD (GitHub Actions)', icon: <FaGithub /> },
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaCode /> },
    ]
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="bg-glow bg-glow-2"></div>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category reveal" key={index}>
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <span className="skill-item-icon">{skill.icon}</span>
                    {skill.name}
                  </div>
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
