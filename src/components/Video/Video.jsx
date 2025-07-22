import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser'; 
import Loading from '../Loading/Loading';
import { Fade, Slide } from 'react-awesome-reveal'; 
import '../../asset/css/video.css'; 

class Video extends Component {
     constructor() {
          super();
          this.state = {
               show: false,
               video_description: "", 
               video_url: "",
               loading: true 
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.HomeVideo).then(result => {
               if (result && result.length > 0) {
                    this.setState({
                         video_description: result[0].video_description || "",
                         video_url: result[0].video_url || "",
                         loading: false
                    });
               }
          });
     }

     modalClose = () => this.setState({ show: false });
     modalOpen = () => this.setState({ show: true });

     render() {
          if (this.state.loading === true) {
               return <Loading />
          } else {
               return (
                    <Fragment>
                         <section className="video-section py-5">
                              <Container>
                                   <div className="text-center mb-5">
                                        <Fade triggerOnce>
                                             <h1 className="section-title2">OUR VIDEOS</h1>
                                             <div className="title-underline2"></div>
                                             <p className="section-subtitle">Watch our latest video content</p>
                                        </Fade>
                                   </div>

                                   <Row className="align-items-center">
                                        <Col lg={6} md={6} sm={12} className="video-text-col">
                                             <Slide direction="left" triggerOnce>
                                                  <div className="video-description">
                                                       {typeof this.state.video_description === 'string'
                                                            ? parse(this.state.video_description)
                                                            : "Discover our video content and learn more about what we do."}
                                                  </div>
                                             </Slide>
                                        </Col>

                                        <Col lg={6} md={6} sm={12} className="video-player-col">
                                             <Slide direction="right" triggerOnce>
                                                  <div className="video-card" onClick={this.modalOpen}>
                                                       <div className="video-overlay">
                                                            <FontAwesomeIcon
                                                                 className="play-icon"
                                                                 icon={faPlay}
                                                            />
                                                            <span className="play-text">Watch Video</span>
                                                       </div>
                                                       <div className="video-bg"></div>
                                                  </div>
                                             </Slide>
                                        </Col>
                                   </Row>
                              </Container>
                         </section>

                         <Modal 
                              size="lg" 
                              show={this.state.show} 
                              onHide={this.modalClose}
                              className="video-modal"
                              centered
                         >
                              <Modal.Header closeButton className="border-0">
                                   <Modal.Title>Video</Modal.Title>
                              </Modal.Header>
                              <Modal.Body className="p-0">
                                   {this.state.video_url ? (
                                        <div className="video-wrapper">
                                             <Player src={this.state.video_url} fluid={false}>
                                                  <BigPlayButton position="center" />
                                             </Player>
                                        </div>
                                   ) : (
                                        <div className="video-error">
                                             <p>Video not available</p>
                                        </div>
                                   )}
                              </Modal.Body>
                              <Modal.Footer className="border-0">
                                   <Button variant="primary" onClick={this.modalClose}>
                                        Close
                                   </Button>
                              </Modal.Footer>
                         </Modal>
                    </Fragment>
               );
          }
     }
}

export default Video;