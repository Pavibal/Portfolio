import { Mail, Phone, Upload } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load saved image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setProfileImage(imageData);
        // Save to localStorage for persistence
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '70px',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4rem',
          width: '100%'
        }}>
          {/* Left Content */}
          <div className="hero-content" style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h1 className="animate-fade-in" style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 700,
              marginBottom: '0.5rem',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              Pavithra B
            </h1>

            <h2 className="animate-fade-in delay-100" style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.5px'
            }}>
              Java Full Stack Developer
            </h2>

            <p className="animate-fade-in delay-200" style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '650px',
              lineHeight: 1.7
            }}>
              Adaptive Java Full Stack Developer with 11 months of intensive internship experience in Microservices architecture and Cloud-based deployment. Specialized in AI-assisted development using GitHub Copilot, Cursor, ChatGPT, and LLM-powered workflows to accelerate software development, automate testing, and improve code quality. Experienced in designing scalable backend systems using Spring Boot Microservices and building responsive frontend applications with Angular.
            </p>

            <div className="animate-fade-in delay-300" style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap'
            }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1.1rem' }}>
                Contact Me
              </a>
              {/* {<a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '0.85rem 2rem', fontSize: '1.1rem' }}>
                Download Resume
              </a>} */}
            </div>

            <div className="animate-fade-in delay-300" style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a href="mailto:maheswari0206s@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={22} />
                <span>pavi311095@gmail.com</span>
              </a>
              <a href="tel:7825991995" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Phone size={22} />
                <span>+91 9176514015</span>
              </a>
              <a href="https://www.linkedin.com/in/pavithra-pavi-5242b2339/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaLinkedin size={22} />
                <span>Pavithra</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in delay-200" style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="hero-image-wrapper" style={{
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '6px solid #87CEEB',
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: '0 20px 40px rgba(135, 206, 235, 0.3)',
              transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.borderColor = '#00BFFF';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 191, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = '#87CEEB';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(135, 206, 235, 0.3)';
              }}
              onClick={() => document.getElementById('photo-upload')?.click()}>
              
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Pavithra B"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text-secondary)'
                }}>
                  <Upload size={60} />
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    Upload Photo
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    opacity: 0.7
                  }}>
                    Click to select
                  </div>
                </div>
              )}
              
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
