// Import necessary tools from React
import React, { Component, Fragment } from 'react'

// Import layout and button components from react-bootstrap
import { Col, Container, Row, Button } from 'react-bootstrap'

// Import API helper files
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import axios for HTTP requests (not used here, but imported)
import axios from 'axios';

// Create a React class component called TopBanner
class TopBanner extends Component {

    // Constructor to set initial state
    constructor(){
        super();
        this.state={
            title:"",     // Title text from API
            subtitle:""   // Subtitle text from API
        }
    }

    // This runs after the component is shown on the screen
    componentDidMount(){
        // Get data from API and update the state
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({
                title: result[0]['home_title'],
                subtitle: result[0]['home_subtitle']
            });
        });
    }

    // This decides what will be shown in the browser
    render() {
        return (
            // Fragment lets us return multiple elements without extra HTML tag
            <Fragment>

                {/* Full-width banner section */}
                <Container fluid={true} className="topFixedBanner p-0">
                    
                    {/* Dark overlay over the banner image */}
                    <div className="topBannerOverlay">
                        
                        {/* Inner container to center the text content */}
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">

                                    {/* Dynamic title and subtitle from API */}
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    
                                    {/* A button below the text */}
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

// Export this component so other files can use it
export default TopBanner
