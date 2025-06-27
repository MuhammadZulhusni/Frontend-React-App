import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player'; // Video player component

class Video extends Component {
  constructor() {
    super();
    // State to control modal visibility
    this.state = {
      show: false,
    };
  }

  // Function to close modal
  modalClose = () => this.setState({ show: false });

  // Function to open modal
  modalOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        {/* Main container */}
        <Container className="text-center">
          {/* Title and underline */}
          <h1 className="serviceMainTitle">OUR VIDEOS</h1>
          <div className="bottom"></div>

          <Row>
            {/* Left Column: Description Text */}
            <Col lg={6} md={6} sm={12} className="videText">
              <p className="serviceDescription text-justify">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching...
                <br /><br />
                I try to create a project-based course that helps you learn professionally.
              </p>
            </Col>

            {/* Right Column: Video icon that opens modal */}
            <Col lg={6} md={6} sm={12} className="videoCard">
              {/* Video icon (click to open video modal) */}
              <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
            </Col>
          </Row>
        </Container>

        {/* Modal that shows the video player */}
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body className="p-0">
            {/* ReactPlayer is used to play video from URL */}
            <ReactPlayer
              url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              controls  // Show video controls (play, pause, etc.)
              playing   // Start playing automatically when opened
              width="100%"  // Full width
              height="100%" // Full height
            />
          </Modal.Body>

          {/* Close button inside modal footer */}
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
