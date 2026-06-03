import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

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
        <h2 className="section-title">Projects</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {projects.map((project, idx) => (
            <div key={idx} className="card" style={{ padding: '2.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ fontWeight: 600 }}>{project.domain}</span>
                  </div>
                </div>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                  >
                    Visit Website <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                  </a>
                )}
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              <button
                onClick={() => toggleExpand(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem'
                }}
              >
                {expandedProject === idx ? 'Hide Responsibilities' : 'View Responsibilities'}
                {expandedProject === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {expandedProject === idx && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Key Responsibilities:</h4>
                  <ul style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {project.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent)', marginTop: '4px' }}>▪</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
