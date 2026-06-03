import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Let's Talk</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              I am currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="mailto:pavi311095@gmail.com" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '50%' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Email</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>pavi311095@gmail.com</span>
                </div>
              </a>

              <a href="tel:9176514015" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '50%' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Phone</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>+91 9176514015</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/pavithra-pavi-5242b2339/" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '50%' }}>
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>LinkedIn</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>Pavithra B</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card animate-fade-in delay-200" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send me a message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message..."
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
