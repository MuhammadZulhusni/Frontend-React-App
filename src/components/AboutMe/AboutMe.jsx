import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import face from '../../asset/image/Zulhusni.png';
import { init } from 'ityped';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';
import '../../asset/css/aboutme.css'; 

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      loaderClass: "text-center",
      mainDivClass: "d-none"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const myElement = document.querySelector('#myElement');
      if (myElement) {
        init(myElement, {
          showCursor: true,
          cursorChar: '|',
          typeSpeed: 100,
          backSpeed: 50,
          startDelay: 500,
          strings: ['Student Information Technology', 'At University Poly-Tech Malaysia', 'Passionate Developer', 'Tech Enthusiast']
        });
      }

      this.setState({
        loaderClass: "d-none",
        mainDivClass: "text-center"
      });
    }, 1200);
  }

  render() {
    return (
      <Fragment>
        <section className="about-section">
          <Container className="about-container">
            <Fade triggerOnce direction="up">
              <div className="section-header">
                <h1 className="section-title-aboutme">About Me</h1>
                <div className="title-underline"></div>
                <p className="section-subtitle">Get to know me better</p>
              </div>
            </Fade>

            <Row className="about-content">
              <Col className={this.state.loaderClass}>
                <Loading />
              </Col>

              <Col lg={6} md={6} sm={12} className={`${this.state.mainDivClass} image-col`}>
                <Fade triggerOnce direction="left" delay={200}>
                  <div className="profile-image-container">
                    <div className="profile-image-wrapper">
                      <img className="profile-image" src={face} alt="M Zulhusni Profile" />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="floating-elements">
                      <div className="floating-dot dot-1"></div>
                      <div className="floating-dot dot-2"></div>
                      <div className="floating-dot dot-3"></div>
                    </div>
                  </div>
                </Fade>
              </Col>

              <Col lg={6} md={6} sm={12} className={`${this.state.mainDivClass} content-col`}>
                <Fade triggerOnce direction="right" delay={400}>
                  <div className="about-content-wrapper">
                    <div className="greeting-text">
                      <span className="wave-emoji">👋</span>
                      <h2 className="greeting">Hi There, I'm</h2>
                    </div>
                    
                    <h1 className="name-title">M Zulhusni</h1>
                    
                    <div className="typed-container">
                      <h3 className="typed-text">
                        <span id="myElement"></span>
                      </h3>
                    </div>
                    
                    <div className="intro-description">
                      <p>Welcome to my digital space! I'm passionate about technology and constantly learning new skills in the ever-evolving world of IT.</p>
                    </div>
                    
                    <div className="social-links">
                      <a href="#" className="social-link" aria-label="LinkedIn">
                        <span className="social-icon">💼</span>
                      </a>
                      <a href="#" className="social-link" aria-label="GitHub">
                        <span className="social-icon">💻</span>
                      </a>
                      <a href="#" className="social-link" aria-label="Email">
                        <span className="social-icon">📧</span>
                      </a>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default AboutMe;