// Video.js - Using React Bootstrap classes 
import React, { Component, Fragment } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import { Fade, Slide } from 'react-awesome-reveal';
import ReactPlayer from 'react-player';

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
            } else {
                this.setState({
                    loading: false
                });
            }
        }).catch(error => {
            console.error("Error fetching video data: ", error);
            this.setState({
                loading: false
            });
        });
    }

    modalClose = () => this.setState({ show: false });
    modalOpen = () => this.setState({ show: true });

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        // Inline styles for the gradient background and video card
        const sectionStyle = {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '80vh',
            color: 'white'
        };

        const videoCardStyle = {
            width: '400px',
            height: '250px',
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(102, 126, 234, 0.3))',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        };

        const playIconStyle = {
            fontSize: '3rem',
            color: 'white'
        };

        const videoWrapperStyle = {
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            overflow: 'hidden',
            backgroundColor: 'black'
        };

        return (
            <Fragment>
                <section className="py-5" style={sectionStyle}>
                    <Container>
                        <div className="text-center mb-5">
                            <Fade triggerOnce>
                                <h1 className="display-4 fw-bold mb-3" style={{letterSpacing: '1px'}}>
                                    OUR VIDEOS
                                </h1>
                                <div 
                                    className="mx-auto mb-3" 
                                    style={{
                                        width: '60px', 
                                        height: '3px', 
                                        backgroundColor: 'white',
                                        borderRadius: '2px'
                                    }}
                                ></div>
                                <p className="lead" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                                    Watch our latest video content
                                </p>
                            </Fade>
                        </div>

                        <Row className="align-items-center">
                            <Col lg={6} md={6} sm={12}>
                                <Slide direction="left" triggerOnce>
                                    <div 
                                        className="p-4"
                                        style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            color: 'rgba(255, 255, 255, 0.95)'
                                        }}
                                    >
                                        {typeof this.state.video_description === 'string'
                                            ? parse(this.state.video_description)
                                            : "Discover our video content and learn more about what we do."}
                                    </div>
                                </Slide>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                                <Slide direction="right" triggerOnce>
                                    <div 
                                        className="position-relative rounded shadow-lg overflow-hidden"
                                        style={videoCardStyle}
                                        onClick={this.modalOpen}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                                        }}
                                    >
                                        {/* Video Overlay with Play Button */}
                                        <div 
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                                            style={{
                                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                zIndex: 10
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className="mb-2"
                                                icon={faPlay}
                                                style={playIconStyle}
                                            />
                                            <span 
                                                className="text-uppercase fw-semibold"
                                                style={{
                                                    color: 'white',
                                                    fontSize: '1.1rem',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                Watch Video
                                            </span>
                                        </div>
                                    </div>
                                </Slide>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Modal Component */}
                <Modal
                    show={this.state.show}
                    onHide={this.modalClose}
                    size="lg"
                    centered
                    className="video-modal"
                >
                    <Modal.Header closeButton className="bg-dark text-white">
                        <Modal.Title>Our Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-0 bg-dark">
                        {this.state.video_url ? (
                            <div style={videoWrapperStyle}>
                                <ReactPlayer
                                    url={this.state.video_url}
                                    controls={true}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    light={false}
                                    style={{ 
                                        position: 'absolute', 
                                        top: 0, 
                                        left: 0 
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="p-5 text-center text-muted">
                                <p className="fs-5 mb-0">Video not available. Please try again later.</p>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;