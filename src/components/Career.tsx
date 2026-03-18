import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently freelancing and actively looking for full-time
              opportunities. Building responsive Full Stack web applications
              using the MERN Stack, NextJS, and modern frontend technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Engineering</h4>
                <h5>Vaagdevi College of Engineering</h5>
              </div>
              <h3>2021-2025</h3>
            </div>
            <p>
              Graduated with a Bachelor of Technology in Computer Science
              Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
