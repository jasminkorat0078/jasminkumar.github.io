import "./Service.scss";
import { BiCheck } from "react-icons/bi";

const Service = () =>{
    return(
        <section id="service" className="services">
            <h5>What Experience I Have</h5>
            <h2>Work Experience</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Analyttica Data Lab</h3>
                    </div>
                    <div className="service__role">
                        Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Frontend Developer</small>
                    </div>
                    <div className="service__duration">
                        
                        Duration:&nbsp;&nbsp;&nbsp;<small>10<sup>th</sup>May,2022 - Present</small>
                    </div>
                    <div className="service__list-container">
                        <div className="task">Task:</div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Migrate product to Micro-frontend</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Develop & Improve product based on client requirement</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Storybook created</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Improve performance</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Bug fixes</p>
                                
                            </li>

                        </ul>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>L&T</h3>
                    </div>
                    <div className="service__role">
                        Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Frontend Developer (GET)</small>
                    </div>
                    <div className="service__duration">
                        
                        Duration:&nbsp;&nbsp;&nbsp;<small>16<sup>th</sup>Aug,2021 - 9<sup>th</sup>May,2022</small>
                    </div>
                    <div className="service__list-container">
                        <div className="task">Task:</div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Worked on 3D monitoring system</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Developing Product</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Bug fixes</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Performance enhancement</p>
                                
                            </li>
                           

                        </ul>
                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Three Web Solution</h3>
                    </div>
                    <div className="service__role">
                        Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Intern-Frontend Developer</small>
                    </div>
                    <div className="service__duration">
                        
                        Duration:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>1<sup>st</sup>Jan,2021 - 31<sup>st</sup>Jul,2021</small>
                    </div>
                    <div className="service__list-container">
                        <div className="task">Task:</div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Learned HTML,CSS,JS</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Learned React & Next.js</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>Build projects for internship</p>
                                
                            </li>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>worked on live project</p>
                                
                            </li>

                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Service;