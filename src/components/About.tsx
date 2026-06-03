
const About = () => {
  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: 'var(--text-secondary)'
          }}>
            I am a Java Full Stack Developer with hands‑on experience in developing enterprise‑grade applications using Java, Spring Boot, Angular, Hibernate, and MySQL/MariaDB. During my internship at Techietact Solutions, I worked on both Microservices and Monolithic architectures, gaining practical exposure to backend development, frontend integration, REST API development, cloud‑ready applications, and Agile methodologies. I enjoy solving complex business problems through clean code, scalable architecture, and modern development practices. I am also experienced in leveraging AI‑powered development tools such as GitHub Copilot, Cursor, and ChatGPT to improve productivity and software quality., with hands-on experience in Agile environments. Experienced in AI-based automation testing using Testim and automation framework development with Playwright. Adept at collaborating with cross-functional teams to deliver robust and user-centric software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
