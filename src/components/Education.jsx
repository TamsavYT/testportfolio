const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3>Bachelor of ECE</h3>
              <h4>Government College of Engineering Tirunelveli</h4>
              <div className="education-info">
                <span className="education-period">2026</span>
                <div className="cgpa-badge">
                  <span className="cgpa-label">GPA</span>
                  <span className="cgpa-value">3.4/4.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">🏫</div>
            <div className="education-details">
              <h3>Higher Secondary School</h3>
              <h4>Srivi Lions Matric. Hr. Sec. School, Srivilliputtur</h4>
              <div className="education-info">
                <span className="education-period">2022</span>
                <div className="cgpa-badge">
                  <span className="cgpa-label">Score</span>
                  <span className="cgpa-value">504/600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">📝</div>
            <div className="education-details">
              <h3>SSLC</h3>
              <h4>Srivi Lions Matric. Hr. Sec. School, Srivilliputtur</h4>
              <div className="education-info">
                <span className="education-period">2020</span>
                <div className="cgpa-badge">
                  <span className="cgpa-label">Score</span>
                  <span className="cgpa-value">329/500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
