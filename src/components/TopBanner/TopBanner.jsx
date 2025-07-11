import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class TopBanner extends Component {

  constructor() {
    super();
    this.state = {
      title: ".....",
      subtitle: ".....",
      loaderClass: "text-center",
      mainDivClass: "d-none"
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
      this.setState({
        title: result[0]['home_title'],
        subtitle: result[0]['home_subtitle'],
        loaderClass: "d-none",
        mainDivClass: "text-center"
      });
    }).catch(error => {
      this.setState({
        title: "????",
        subtitle: "????",
        loaderClass: "d-none",
        mainDivClass: "text-center"
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                {/* Loader */}
                <Col className={this.state.loaderClass}>
                  <Loading />
                </Col>

                {/* Main Banner Content */}
                <Col className={this.state.mainDivClass}>
                  <Fade direction="down" triggerOnce>
                    <h1 className="topTitle">{this.state.title}</h1>
                  </Fade>

                  <Fade direction="up" delay={100} triggerOnce>
                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                  </Fade>

                  <Slide direction="up" delay={200} triggerOnce>
                    <Button variant="primary">Learn More</Button>
                  </Slide>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
