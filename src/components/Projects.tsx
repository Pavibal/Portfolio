import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const projects = [
    {
      title: 'MyJobbie',
      domain: 'Job Portal & Recruitment Platform',
      website: 'https://www.myjobbie.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'A scalable job portal connecting job seekers and employers, featuring candidate profile management, job applications, interview scheduling, subscription-based hiring, and technical assessments built on microservices architecture. Tech Stack: Java, Spring Boot, Hibernate, Angular 17, Microservices, JWT, Kafka, Maven, Swagger, Jenkins, MariaDB.',
      responsibilities: [
        'Designed and executed REST API test cases for all microservice endpoints using Postman and Swagger UI',
        'Tested JWT-based authentication flows including token generation, expiry, and access control',
        'Executed end-to-end integration testing across independently deployed microservices',
        'Validated Kafka-driven event flows for candidate notifications and subscription events',
        'Collaborated with the DevOps team to validate Jenkins CI/CD pipeline deployments',
        'Developed and maintained regression test suites covering core flows, improving regression coverage by 35%',
        'Analysed business requirements and prepared detailed test plans and test scenarios',
        'Conducted RBAC validation ensuring candidates, employers, and admins accessed only permitted modules',
        'Logged and tracked defects in Jira, achieving a 25% reduction in average defect resolution time',
        'Contributed to Selenium WebDriver automation scripts for critical regression scenarios using POM'
      ]
    },

    {
      title: 'MybuzAI',
      domain: 'CRM & Sales Automation Platform',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2  100%)',
      description: 'A centralized CRM and sales lifecycle platform designed to automate lead management, customer engagement, campaign tracking, sales operations, reporting, productivity analytics, and role-based access control.',
      responsibilities: [
        'Developed and maintained CRM modules using Spring Boot, Angular, Hibernate, and MySQL, ensuring seamless integration across the platform.',
        'Designed and implemented RESTful APIs for Lead, Contact, Campaign, Product, Quote, Sales Order, and Invoice management modules.',
        'Created and managed entity relationships, DTOs, service layers, and repository implementations following Spring Boot best practices.',
        'Developed responsive Angular components, forms, and data tables with filtering, pagination, sorting, and validation features.',
        'Implemented role-based access control (RBAC) and JWT-based authentication for secure access to application modules.',
        'Built and integrated Billing Address and Shipping Address management across Contact, Quote, and Sales modules.',
        'Optimized database queries and Hibernate mappings to improve application performance and data consistency.',
        'Collaborated in an Agile development environment, participating in requirement analysis, code reviews, bug fixing, and feature enhancements.',
        'Managed source code using Git and contributed to continuous integration and deployment workflows.',
        'Performed unit testing, debugging, and API validation to ensure application reliability and maintainability.'
      ]
    }
  ];

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          maxWidth: '950px',
          margin: '0 auto'
        }}>
          {projects.map((project, idx) => (
            <div key={idx} className="card animate-fade-in" style={{ 
              padding: '0',
              overflow: 'hidden',
              animationDelay: `${idx * 150}ms`
            }}>
              {/* Gradient Header */}
              <div style={{
                background: project.gradient,
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  filter: 'blur(40px)'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Briefcase size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.75rem', 
                      marginBottom: '0.3rem',
                      color: 'white',
                      fontWeight: 800
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}>
                      {project.domain}
                    </div>
                  </div>
                </div>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.7rem 1.5rem',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      fontWeight: 600,
                      borderRadius: '10px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 1
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '2.5rem' }}>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '2rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.8'
                }}>
                  {project.description}
                </p>

                <button
                  onClick={() => toggleExpand(idx)}
                  style={{
                    background: expandedProject === idx ? project.gradient : 'var(--bg-secondary)',
                    color: expandedProject === idx ? 'white' : 'var(--text-primary)',
                    border: '2px solid',
                    borderColor: expandedProject === idx ? 'transparent' : 'var(--border-color)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.85rem 1.5rem',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (expandedProject !== idx) {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (expandedProject !== idx) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  {expandedProject === idx ? 'Hide Responsibilities' : 'View Responsibilities'}
                  {expandedProject === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {expandedProject === idx && (
                  <div className="animate-fade-in" style={{ marginTop: '2rem' }}>
                    <h4 style={{ 
                      marginBottom: '1.5rem', 
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      background: project.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Key Responsibilities:
                    </h4>
                    <ul style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '1rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {project.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '0.75rem',
                          padding: '0.75rem',
                          background: 'var(--bg-secondary)',
                          borderRadius: '8px',
                          borderLeft: '3px solid',
                          borderLeftColor: 'transparent',
                      
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}>
                          <span style={{ 
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                          }}>▪</span>
                          <span style={{ lineHeight: '1.7' }}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
