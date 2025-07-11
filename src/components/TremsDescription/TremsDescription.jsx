// Import necessary modules
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser'; // Imports HTML parser
import Loading from '../Loading/Loading'; // Imports loading animation component
import WentWrong from '../WentWrong/WentWrong'; // Imports error display component

/**
 * TermsDescription component: Fetches and displays the Terms and Conditions
 * content from an API. Includes loading and error states for robust UI.
 */
class TermsDescription extends Component {
     constructor() {
          super();
          // Initializes component state with default placeholder and flags for data fetching status.
          this.state = {
               termsdesc: "...", // Placeholder for terms content
               loading: true,    // Indicates if data is currently being fetched
               error: false      // Indicates if an error occurred during data fetching
          };
     }

     /**
      * Fetches terms and conditions data from the API after the component mounts.
      * This is the ideal place for initial data loading.
      */
     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    // Checks if the API result is valid and contains the 'trems' property.
                    // Note: 'trems' is used here as per the API response structure.
                    if (result && result[0] && result[0]['trems']) {
                         // Updates state with fetched data, sets loading to false, and clears any error.
                         this.setState({
                              termsdesc: result[0]['trems'], // Assigns fetched terms to 'termsdesc' state
                              loading: false,
                              error: false
                         });
                    } else {
                         // Handles cases where data is null, undefined, or malformed.
                         this.setState({ error: true, loading: false });
                         console.error("API returned null or missing 'trems' data for terms description.");
                    }
               })
               .catch(error => {
                    // Catches and handles any network or API request errors.
                    console.error("Error fetching terms description:", error);
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
          // Renders the actual terms and conditions content if data is loaded and no errors.
          else {
               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col lg={12} md={12} sm={12}>
                                        {/* Section title for Terms and Conditions. */}
                                        <h1 className="serviceName">Terms and Conditions</h1>
                                        <hr />
                                        {/* Renders HTML content from the 'termsdesc' state using the HTML parser. */}
                                        <p className="serviceDescription">
                                             {parse(this.state.termsdesc)}
                                        </p>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

// Exports the TermsDescription component for use throughout the application.
export default TermsDescription;