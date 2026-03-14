import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Gowri Sankaran R | Web Designer Portfolio</title>
        <meta name="description" content="Gowri Sankaran R — Web Designer and Programmer. Expert in building intelligent systems, web development, and IoT." />
      </Helmet>
      <section id="home" className="hero" aria-label="Hero section">
        <div className="hero-background" aria-hidden="true">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Web Designer</p>
            <h1 className="hero-title">
              <span className="title-line">
                <span className="title-line-inner">Gowri</span>
              </span>
              <span className="title-line">
                <span className="title-line-inner">Sankaran R</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              A dedicated programmer and lifelong learner with a deep passion for building intelligent systems.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" aria-label="View my featured projects">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-arrow"></div>
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
