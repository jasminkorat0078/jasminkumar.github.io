import "./About.scss";
import ME from "../../assets/me2.png";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="My image" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Project</h5>
              <small>5+ </small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Certificates</h5>
              <small>2</small>
            </article>
          </div>
          <p>
          Front-end developer with hands-on expertise in React, JavaScript and Next.js. Adapt at contributing to a highly collaborative work environment
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
