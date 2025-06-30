// Import React and some tools needed to build the component
import React, { Component, Fragment } from 'react'

// Import layout and button components from react-bootstrap
import { Col, Container, Row, Button } from 'react-bootstrap'

import axios from 'axios';

// Create a class component called TopBanner
class TopBanner extends Component {

    // This method runs automatically when the component is mounted (inserted into the DOM)
    componentDidMount() {
    // Send a GET request to the Laravel API endpoint to get homepage title data
    axios.get('http://127.0.0.1:8000/api/homepage/title')
        .then(function (response) {    
        // If successful, log the response data to the console
        console.log(response.data);
        })
        .catch(function (error) {
        // If there's an error, log the error to the console
        console.log(error);
        });
    }

    // render() decides what to show on the screen
    render() {
        return (
            // Fragment lets us return multiple elements without adding extra tags
            <Fragment>
                {/* Container holds everything and makes it full width */}
                <Container fluid={true} className="topFixedBanner p-0">
                    
                    {/* Dark overlay on top of the banner image */}
                    <div className="topBannerOverlay">
                        
                        {/* Inner container for centering the content */}
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    {/* Main title */}
                                    <h1 className="topTitle">EASY LEARNING</h1>
                                    
                                    {/* Subtitle */}
                                    <h4 className="topSubTitle">Learn Profesionally</h4>
                                    
                                    {/* Bootstrap button */}
                                    <Button variant="primary">Learn More</Button>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        )
    }
}

// Make this component available to be used in other files
export default TopBanner
