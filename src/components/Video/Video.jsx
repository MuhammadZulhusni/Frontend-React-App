import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser'; 

class Video extends Component {
     constructor() {
          super();
          this.state = {
               show: false,
               video_description: "", 
               video_url: ""
          };
     }

     // Fetch API when component mounts
     componentDidMount() {
          RestClient.GetRequest(AppUrl.HomeVideo).then(result => {
               if (result && result.length > 0) {
                    this.setState({
                         video_description: result[0].video_description || "",
                         video_url: result[0].video_url || ""
                    });
               }
          });
     }

     // Modal controls
     modalClose = () => this.setState({ show: false });
     modalOpen = () => this.setState({ show: true });

     render() {
          return (
               <Fragment>
                    <Container className="text-center">
                         <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                         <div className="bottom"></div>

                         <Row>
                              {/* Left: Description */}
                              <Col lg={6} md={6} sm={12} className="videText">
                                   <p className="serviceDescription text-justify">
                                        {typeof this.state.video_description === 'string'
                                             ? parse(this.state.video_description)
                                             : ""}
                                   </p>
                              </Col>

                              {/* Right: Play icon */}
                              <Col lg={6} md={6} sm={12} className="videoCard">
                                   <FontAwesomeIcon
                                        onClick={this.modalOpen}
                                        className="iconProject"
                                        icon={faVideoSlash}
                                   />
                              </Col>
                         </Row>
                    </Container>

                    {/* Video Modal */}
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                         <Modal.Body>
                              {this.state.video_url ? (
                                   <Player src={this.state.video_url}>
                                        <BigPlayButton position="center" />
                                   </Player>
                              ) : (
                                   <p>Video not available</p>
                              )}
                         </Modal.Body>
                         <Modal.Footer>
                              <Button variant="secondary" onClick={this.modalClose}>
                                   Close
                              </Button>
                         </Modal.Footer>
                    </Modal>
               </Fragment>
          );
     }
}

export default Video;
