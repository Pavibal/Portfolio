
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card" style={{ 
            display: 'flex', 
            gap: '2rem',
            alignItems: 'flex-start',
            padding: '3rem'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              flexShrink: 0
            }}>
              <GraduationCap size={30} color="var(--text-primary)" />
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Bachelor of Engineering (ECE)</h3>
              <h4 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 500, 
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
              }}>
                Anna University
              </h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Mahatma Institute of Engineering & Technology, Pudukkottai, Tamil Nadu
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Timeline</span>
                  <span style={{ fontWeight: 600 }}>2017 – 2019</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>CGPA</span>
                  <span style={{ fontWeight: 600 }}>8.08</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
