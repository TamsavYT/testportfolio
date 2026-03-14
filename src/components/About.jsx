const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content-centered">
          <div className="about-text">
            <h3>Driven by curiosity and a commitment to high-quality work</h3>
            <p>
              I am a dedicated programmer and lifelong learner with a deep passion for building intelligent systems. I am driven by curiosity and a commitment to high-quality work, always seeking to master new technologies to stay at the forefront of the industry.
            </p>
            <p>
              With a background in Electronics and Communication Engineering, I combine technical expertise in embedded systems and IoT with a strong interest in modern web development and software architecture.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3.4</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">ECE</span>
                <span className="stat-label">Specialization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
