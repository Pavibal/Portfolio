const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Java 17+', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'Spring Security (JWT)', 'RESTful APIs'],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Architecture & DevOps',
      icon: '🚀',
      skills: ['Microservices', 'Docker'],
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Databases',
      icon: '💾',
      skills: ['MySQL', 'MariaDB'],
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Tools & Productivity',
      icon: '🛠️',
      skills: ['Git', 'Postman', 'Swagger', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Prompt Engineering'],
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Methodologies',
      icon: '📊',
      skills: ['Agile', 'Scrum'],
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card animate-fade-in" style={{
              position: 'relative',
              overflow: 'visible',
              animationDelay: `${idx * 100}ms`
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: category.color,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                transform: 'translateY(-10px)'
              }}>
                {category.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.35rem',
                marginBottom: '1.5rem',
                fontWeight: 700,
                background: category.color,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem'
              }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    padding: '0.6rem 1.1rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: '2px solid var(--border-color)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = category.color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
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
