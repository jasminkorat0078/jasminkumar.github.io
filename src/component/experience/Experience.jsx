import "./Experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS & SCSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Other</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NX workspace</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Micro Frontend</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Basics of Machine learning</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>PLC Programming</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
