const Skills = () => {
  const skillsData = [
    {
      icon: "💻",
      title: "Programming",
      description: "Proficient in multiple languages for both web and system-level development",
      skills: ["Python", "JavaScript", "Java"]
    },
    {
      icon: "🔌",
      title: "Embedded Systems & IoT",
      description: "Experience in designing and implementing IoT solutions and hardware integration",
      skills: ["Embedded C", "ESP8266/32", "Arduino"]
    },
    {
      icon: "🚀",
      title: "Web Development",
      description: "Building robust server-side applications with modern frameworks",
      skills: ["Spring Boot", "React", "Node.js"]
    },
    {
      icon: "🤝",
      title: "Soft Skills",
      description: "Effective collaborator with strong leadership and communication abilities",
      skills: ["Teamwork", "Management", "Communication"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-list">
                {skill.skills.map((item, itemIndex) => (
                  <span key={itemIndex}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
