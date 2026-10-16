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
                <h4>Freelance Software Developer</h4>
                <h5>VM Software Solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Since Oct 2025, delivering 3 production MERN applications end to
              end, from scoping to deployment and support. Running them on a
              self-managed VPS with Docker, Dokploy, and Traefik, with Razorpay,
              Resend, and Cloudflare R2 integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, CSE (AI & ML)</h4>
                <h5>Vaagdevi College of Engineering</h5>
              </div>
              <h3>2021-2025</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science Engineering with a
              specialization in AI & ML, Warangal. GPA: 7.5/10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
