import '../styles/achievements.css';

const achievements = [
  {
    icon: '🏆',
    title: 'First Prize – Highest CGPA',
    description: 'Secured the highest CGPA in the Second Year of B.E. (Information Technology)',
  },
  {
    icon: '🚀',
    title: 'Tata Imagination Challenge 2023',
    description: 'Participant in the innovation challenge by Tata Group & Unstop',
  },
  {
    icon: '💡',
    title: 'Accenture Innovation Challenge 2023',
    description: 'Participant in the innovation challenge by Accenture & Unstop',
  },
  {
    icon: '📜',
    title: 'Apna College Alpha Certification',
    description: 'Completed Java & Data Structures & Algorithms course certification',
  },
];

function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="bg-glow bg-glow-2"></div>
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognitions and certifications</p>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card reveal" key={index}>
              <span className="achievement-icon">{item.icon}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
