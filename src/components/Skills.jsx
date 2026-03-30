import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced full-stack engineer proficient in modern web technologies, cloud infrastructure, and software architecture.<br></br> Skilled in building scalable, maintainable, and efficient applications.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
            <img src={meter2} alt="Microservice Architecture" />
            <h5>Microservice Architecture</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Linux Systems" />
                                  <h5>Linux Systems</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Data Integration & CDC" />
                                  <h5>Data Integration & CDC</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Front-End Development" />
                                  <h5>Front-End Development</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="React.js" />
                                  <h5>React.js</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Node.js & Express" />
                                  <h5>Node.js & Express</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="RESTful APIs" />
                                  <h5>RESTful APIs</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="GraphQL" />
                                  <h5>GraphQL</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Docker & Kubernetes" />
                                  <h5>Docker & Kubernetes</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="AWS Cloud Services" />
                                  <h5>AWS Cloud Services</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="SQL & NoSQL Databases" />
                                  <h5>SQL & NoSQL Databases</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="CI/CD Pipelines" />
                                  <h5>CI/CD Pipelines</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="TypeScript" />
                                  <h5>TypeScript</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Testing & Debugging" />
                                  <h5>Testing & Debugging</h5>
                              </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}