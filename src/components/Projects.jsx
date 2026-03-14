const Projects = () => {
  const projects = [
    {
      title: "Log Management and Search System",
      description: "Developed a scalable system to store and process large volumes of application logs using Apache Lucene for fast full-text search.",
      tags: ["Python", "Lucene", "Scalable Systems"],
      image: "/project-log.png",
      gradient: "project-1"
    },
    {
      title: "Symposium Management Application",
      description: "Full-stack web application for managing registrations and participant data with Google Sheets integration and a mobile-friendly interface.",
      tags: ["Full Stack", "Google Sheets", "Responsive"],
      image: "/project-symposium.png",
      gradient: "project-2"
    },
    {
      title: "BMS Monitoring Web Application",
      description: "Monitoring system for tracking battery parameters like voltage and temperature with real-time data processing using Spring Boot.",
      tags: ["Spring Boot", "REST APIs", "Real-time"],
      image: "/project-bms.png",
      gradient: "project-3"
    },
    {
      title: "IoT Based Air Quality Monitoring",
      description: "IoT system using ESP8266 to measure dust and gas levels in industrial environments for improved worker safety.",
      tags: ["IoT", "ESP8266", "Embedded C"],
      image: "/project-airquality.png",
      gradient: "project-4"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling && (e.target.nextElementSibling.style.display = 'block');
                  }}
                />
                <div
                  className={`project-placeholder ${project.gradient}`}
                  style={{ display: 'none' }}
                />
                <div className="project-overlay">
                  <span className="project-link">View Details →</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
