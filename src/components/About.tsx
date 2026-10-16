import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineer specializing in the MERN stack. I've shipped 3
          production multi-tenant SaaS platforms for online exams, invoicing,
          and food delivery, with 375+ secured REST endpoints, Redis caching
          that cut API latency by ~80%, and Docker and CI/CD deployments on
          VPS infrastructure.
        </p>
      </div>
    </div>
  );
};

export default About;
