import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCodeBranch, faLayerGroup, faCheck } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import Loading from '../Loading/Loading';
import '../../asset/css/ProjectDetails.css';

class ProjectDetailsModern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MyProjectId: props.id,
            img_two: "",
            projectname: "",
            project_description: "",
            project_features: "",
            live_preview: "",
            technologies: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        RestClient.GetRequest(AppUrl.ProjectDetails + this.state.MyProjectId)
            .then(result => {
                if (result && result.length > 0) {
                    this.setState({
                        img_two: result[0]['img_two'],
                        projectname: result[0]['project_name'],
                        project_description: result[0]['project_description'],
                        project_features: result[0]['project_features'],
                        live_preview: result[0]['live_preview'],
                        technologies: result[0]['technologies'] ? result[0]['technologies'].split(',') : [],
                        loading: false
                    });
                } else {
                    this.setState({
                        error: "Project not found",
                        loading: false
                    });
                }
            })
            .catch(error => {
                this.setState({
                    error: "Failed to load project details",
                    loading: false
                });
                console.error("Error fetching project details:", error);
            });
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        if (this.state.error) {
            return (
                <Container className="error-container">
                    <div className="error-content">
                        <h3>{this.state.error}</h3>
                        <Button 
                            variant="outline-dark" 
                            href="/projects" 
                            className="back-button"
                        >
                            Return to Projects
                        </Button>
                    </div>
                </Container>
            );
        }

        return (
            <div className="project-details-modern">
                {/* Hero Section */}
                <section className="project-hero">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} className="hero-content">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Badge className="project-badge">Featured Project</Badge>
                                    <h1>{this.state.projectname}</h1>
                                    <p className="hero-description">
                                        {parse(this.state.project_description)}
                                    </p>
                                    <div className="tech-stack">
                                        {this.state.technologies.map((tech, index) => (
                                            <span key={index} className="tech-item">{tech.trim()}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={6} className="hero-image">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <img 
                                        src={this.state.img_two} 
                                        alt={this.state.projectname}
                                        className="img-fluid"
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Project Details Section */}
                <section className="project-content-section">
                    <Container>
                        <Row>
                            <Col lg={8} className="mx-auto">
                                <div className="content-card">
                                    <h2>
                                        <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
                                        Project Features
                                    </h2>
                                    <ul className="feature-list">
                                        {this.state.project_features.split('\n').map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                            >
                                                <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                                                <span>{parse(feature)}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {this.state.live_preview && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="cta-section"
                                    >
                                        <Button 
                                            href={this.state.live_preview} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="live-preview-button"
                                        >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                                            View Live Project
                                        </Button>
                                        <Button
                                        as={Link}
                                        to="/porfolio"
                                        variant="outline-dark"
                                        className="back-button"
                                        >
                                        <FontAwesomeIcon icon={faCodeBranch} className="me-2" />
                                        All Projects
                                        </Button>
                                    </motion.div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default ProjectDetailsModern;