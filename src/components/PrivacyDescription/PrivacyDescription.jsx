// Import necessary modules from React and Bootstrap
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import custom API client and API URL
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import modern HTML parser to render HTML content as React elements
import parse from 'html-react-parser';

// Import custom loading and error components
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong'; 

/**
 * PrivacyDescription component: Fetches and displays the Privacy Policy
 * content from an API. Includes loading and error states for a robust user experience.
 */
class PrivacyDescription extends Component {
     constructor() {
          super();
          // Initializes component state with a placeholder and flags for data fetching status.
          this.state = {
               privacydesc: "...", // Placeholder for privacy policy content
               loading: true,      // Indicates if data is currently being fetched
               error: false        // Indicates if an error occurred during data fetching
          };
     }

     /**
      * Fetches privacy policy data from the API after the component mounts.
      * This is the standard lifecycle method for initial data loading.
      */
     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    // Checks if the API result is valid and contains the 'privacy' property.
                    if (result && result[0] && result[0]['privacy']) {
                         // Updates state with fetched data, sets loading to false, and clears any error.
                         this.setState({
                              privacydesc: result[0]['privacy'],
                              loading: false,
                              error: false
                         });
                    } else {
                         // Handles cases where data is null, undefined, or malformed.
                         console.error("API returned null or missing 'privacy' data for Privacy Description.");
                         this.setState({ error: true, loading: false });
                    }
               })
               .catch(error => {
                    // Catches and handles any network or API request errors.
                    console.error("Error fetching privacy description:", error);
                    this.setState({ error: true, loading: false }); // Sets error state and hides loader
               });
     }

     /**
      * Renders the component's UI based on its current loading and error states.
      */
     render() {
          // Conditional rendering: Displays Loading component if data is still being fetched.
          if (this.state.loading === true) {
               return <Loading />;
          }
          // Conditional rendering: Displays WentWrong component if an error occurred.
          else if (this.state.error === true) {
               return <WentWrong />;
          }
          // Renders the actual privacy policy content if data is loaded and no errors.
          else {
               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col lg={12} md={12} sm={12}>
                                        {/* Section title for Privacy And Policy. */}
                                        <h1 className="serviceName">Privacy And Policy</h1>
                                        <hr />
                                        {/* Renders HTML content from the 'privacydesc' state using the HTML parser. */}
                                        <p className="serviceDescription">
                                             {parse(this.state.privacydesc)}
                                        </p>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

// Exports the PrivacyDescription component for use throughout the application.
export default PrivacyDescription;