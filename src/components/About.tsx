
const About = () => {
  const highlights = [
    { icon: '💼', title: '11+ Months', desc: 'Internship Experience' },
    { icon: '🏗️', title: 'Microservices', desc: 'Architecture Expert' },
    { icon: '🤖', title: 'AI-Powered', desc: 'Development Tools' },
    { icon: '⚡', title: 'Full Stack', desc: 'Java Developer' }
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div className="card" style={{
            padding: '3rem',
            textAlign: 'center',
            background: 'var(--card-bg)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'var(--gradient-primary)',
              opacity: 0.05,
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '200px',
              height: '200px',
              background: 'var(--gradient-accent)',
              opacity: 0.05,
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '2',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              position: 'relative',
              zIndex: 1
            }}>
              I am a <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Java Full Stack Developer</strong> with hands‑on experience in developing enterprise‑grade applications using <strong style={{ color: 'var(--text-primary)' }}>Java, Spring Boot, Angular, Hibernate,</strong> and <strong style={{ color: 'var(--text-primary)' }}>MySQL/MariaDB</strong>. During my internship at Techietact Solutions, I worked on both Microservices and Monolithic architectures, gaining practical exposure to backend development, frontend integration, REST API development, cloud‑ready applications, and Agile methodologies. I enjoy solving complex business problems through clean code, scalable architecture, and modern development practices. I am also experienced in leveraging AI‑powered development tools such as <strong style={{ color: 'var(--text-primary)' }}>GitHub Copilot, Cursor, and ChatGPT</strong> to improve productivity and software quality.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              {highlights.map((item, idx) => (
                <div key={idx} className="animate-fade-in" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--border-color)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  animationDelay: `${idx * 100}ms`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
