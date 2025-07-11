import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser'; 
import Loading from '../Loading/Loading';
import { Fade, Slide } from 'react-awesome-reveal'; 

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
                         <Container className="text-center">
                              <Fade triggerOnce>
                                   <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                                   <div className="bottom"></div>
                              </Fade>

                              <Row>
                                   <Col lg={6} md={6} sm={12} className="videText">
                                        <Slide direction="left" triggerOnce>
                                             <p className="serviceDescription text-justify">
                                                  {typeof this.state.video_description === 'string'
                                                       ? parse(this.state.video_description)
                                                       : ""}
                                             </p>
                                        </Slide>
                                   </Col>

                                   <Col lg={6} md={6} sm={12} className="videoCard">
                                        <Slide direction="right" triggerOnce>
                                             <FontAwesomeIcon
                                                  onClick={this.modalOpen}
                                                  className="iconProject"
                                                  icon={faVideoSlash}
                                             />
                                        </Slide>
                                   </Col>
                              </Row>
                         </Container>

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
}

export default Video;
