import '../styles/education.css';

const educationData = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    school: 'Prof. Ram Meghe Institute of Technology & Research, Badnera–Amravati',
    date: '06/2021 – 06/2025',
    scoreLabel: 'CGPA',
    scoreValue: '8.55',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Smt. Shevantabai Kalmegh Science & Art Jr. College, Chausala',
    date: '06/2020 – 06/2021',
    scoreLabel: 'Percentage',
    scoreValue: '90.50%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'J. D. Patil High School, Sategaon',
    date: '06/2018 – 06/2019',
    scoreLabel: 'Percentage',
    scoreValue: '85.20%',
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-item reveal" key={index}>
              <div className="education-dot"></div>
              <div className="education-card">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="education-date">{edu.date}</span>
                </div>
                <p className="education-school">{edu.school}</p>
                <div className="education-score">
                  <span className="education-score-label">{edu.scoreLabel}:</span>
                  <span className="education-score-value">{edu.scoreValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
