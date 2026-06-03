const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Java 17+', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'Spring Security (JWT)', 'RESTful APIs']
    },
    {
      title: 'Frontend Development',
      skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Architecture & DevOps',
      skills: ['Microservices', 'Docker']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MariaDB']
    },
    {
      title: 'Tools & Productivity',
      skills: ['Git', 'Postman', 'Swagger', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Prompt Engineering']
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'Scrum']
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card">
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'inline-block'
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '2rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                    e.currentTarget.style.color = 'var(--bg-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
