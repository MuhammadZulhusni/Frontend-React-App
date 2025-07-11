import React, { Component, Fragment } from 'react'; // Imports React core and utility components
import { Card, Col, Container, Row, Button } from 'react-bootstrap'; // Imports Bootstrap components
import { Link } from 'react-router-dom'; // Imports Link component for navigation
import RestClient from '../../RestAPI/RestClient'; // Imports custom REST API client
import AppUrl from '../../RestAPI/AppUrl'; // Imports API URL configurations
import Loading from '../Loading/Loading'; // Imports custom loading component
import WentWrong from '../WentWrong/WentWrong'; // Imports error display component

/**
 * AllProjects component: Fetches and displays a list of all projects.
 * Incorporates loading and error handling states for a robust user experience.
 */
class AllProjects extends Component {
  constructor() {
    super();
    // Initializes component state with an empty array for project data
    // and flags for managing loading and error status.
    this.state = {
      myData: [],    // Stores fetched project data
      loading: true, // Indicates if data is currently being fetched
      error: false   // Indicates if an error occurred during data fetching
    };
  }

  /**
   * Fetches all project data from the API after the component mounts.
   * This is the standard lifecycle method for initial data loading.
   */
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll)
      .then(result => {
        // Checks if the API result is a valid array.
        if (Array.isArray(result)) {
          // Updates state with fetched data, sets loading to false, and clears any error.
          this.setState({
            myData: result,
            loading: false,
            error: false
          });
        } else {
          // Handles cases where data is not an array or is unexpected.
          console.error("API returned unexpected data for All Projects:", result);
          this.setState({ error: true, loading: false });
        }
      })
      .catch(error => {
        // Catches and handles any network or API request errors.
        console.error("Error fetching project data:", error);
        this.setState({
          loading: false, // Stops loading
          error: true     // Indicates an error
        });
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
    // Renders the project cards if data is loaded successfully and no errors.
    else {
      const MyList = this.state.myData;

      // Maps through the project list to create a Card component for each project.
      const MyView = MyList.map((item, index) => {
        return (
          <Col lg={4} md={6} sm={12} key={index}>
            {/* Project card displaying image, name, description. */}
            <Card className="projectCard">
              <Card.Img variant="top" src={item.img_one} alt={item.project_name} /> {/* Image with alt text for accessibility */}
              <Card.Body>
                <Card.Title className="serviceName">{item.project_name}</Card.Title>
                <Card.Text className="serviceDescription">
                  {item.project_description}
                </Card.Text>
                {/* Button to navigate to the project's detailed view. */}
                <Button variant="primary">
                  {/* Link constructed with project ID and a URL-friendly project name. */}
                  <Link className="link-style" to={"/projectdetails/" + item.id + "/" + item.project_name.replace(/\s+/g, '-').toLowerCase()}>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });

      return (
        <Fragment>
          <Container className="text-center">
            {/* Section heading for recent projects. */}
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div> {/* Decorative separator */}
            {/* Displays the grid of project cards. */}
            <Row>
              {MyView}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

// Exports the AllProjects component for use throughout the application.
export default AllProjects;