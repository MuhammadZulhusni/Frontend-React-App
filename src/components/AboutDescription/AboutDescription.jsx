import React, { Component, Fragment } from 'react'; // Imports React core and utility components
import { Col, Container, Row } from 'react-bootstrap'; // Imports Bootstrap layout components
import RestClient from '../../RestAPI/RestClient'; // Imports custom REST API client
import AppUrl from '../../RestAPI/AppUrl'; // Imports API URL configurations
import parse from 'html-react-parser'; // Imports modern HTML parser to render HTML strings
import Loading from '../Loading/Loading'; // Imports custom loading component
import WentWrong from '../WentWrong/WentWrong'; // Imports error display component

/**
 * AboutDescription component: Fetches and displays "About Us" content
 * from an API. Includes loading and error states for a robust user experience.
 */
class AboutDescription extends Component {
     constructor() {
          super();
          // Initializes component state with a placeholder for content and flags for data fetching status.
          this.state = {
               aboutdesc: "...", // Placeholder for "About Us" content
               loading: true,    // Indicates if data is currently being fetched
               error: false      // Indicates if an error occurred during data fetching
          };
     }

     /**
      * Fetches "About Us" data from the API after the component mounts.
      * This is the standard lifecycle method for initial data loading.
      */
     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    // Checks if the API result is valid and contains the 'about' property.
                    if (result && result[0] && result[0]['about']) {
                         // Updates state with the 'about' description from the API, sets loading to false, and clears any error.
                         this.setState({
                              aboutdesc: result[0]['about'],
                              loading: false,
                              error: false
                         });
                    } else {
                         // Handles cases where data is null, undefined, or malformed.
                         console.error("API returned null or missing 'about' data for About Description.");
                         this.setState({ error: true, loading: false });
                    }
               })
               .catch(error => {
                    // Catches and handles any network or API request errors.
                    console.error("Error fetching about description:", error);
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
          // Renders the "About Us" content if data is loaded successfully and no errors.
          else {
               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col sm={12} lg={12} md={12}>
                                        {/* Parses and renders HTML content from the 'aboutdesc' state. */}
                                        { parse(this.state.aboutdesc) }
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

// Exports the AboutDescription component for use throughout the application.
export default AboutDescription;