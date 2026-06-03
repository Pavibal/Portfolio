import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>
          Maheswari S
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Software Testing Engineer
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <a 
            href="https://www.linkedin.com/in/maheswari-saminathan/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-primary)';
              e.currentTarget.style.color = 'var(--bg-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:maheswari0206s@gmail.com" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-primary)';
              e.currentTarget.style.color = 'var(--bg-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {currentYear} Maheswari S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
