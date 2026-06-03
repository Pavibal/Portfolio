
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            paddingLeft: '3rem',
            borderLeft: '2px solid var(--border-color)'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-11px',
              top: '0',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-primary)',
              border: '4px solid var(--text-primary)'
            }}></div>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  flexShrink: 0
                }}>
                  <Briefcase size={24} color="var(--text-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem' }}>Java Full Stack Developer Intern</h3>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                    Techietact Solutions OPC
                  </p>
                </div>
              </div>
              


              <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Key Responsibilities:</h4>
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '0.75rem',
                color: 'var(--text-secondary)'
              }}>
                {[
                  'Worked on Spring Boot Microservices architecture to improve scalability and fault tolerance.',
                  'Contributed to Monolithic application development and maintenance.',
                  'Analyzed business workflows and implemented new features based on requirements.',
                  'Developed responsive Angular components and integrated them with secure REST APIs.',
                  'Participated in Agile ceremonies including sprint planning, reviews, and retrospectives.',
                  'Resolved development issues and collaborated with team members to ensure timely delivery.'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--text-primary)',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></span>
                    <span style={{ lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
