import React, { Component, Fragment } from 'react'
// React Bootstrap components for layout and styling
import { Col, Container, Row, Button } from 'react-bootstrap' // Added 'Button' for the live preview link
// Local placeholder image (used as a fallback or initial image)
import projectDetails from '../../asset/image/pdetails.png';
// FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// Custom API client and URL constants
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
// Library to parse HTML strings into React components
import parse from 'html-react-parser'; // Assuming 'html-react-parser' is the correct package now

class ProjectDetails extends Component {
     // Component constructor: initializes state and receives props
     constructor(props){
          // Always call super(props) in a class component constructor if using props
          super(props);
          this.state={
               MyProjectId: props.id, // Project ID passed from the parent component (from URL)
               // Initial placeholder values for project details
               img_two:"...",
               projectname:"...",
               project_description:"...",
               project_features:"...",
               live_preview:"..."
               // Note: For robust apps, also include 'loading' and 'error' states here
          }
     }

     // Lifecycle method: runs after the component is first displayed
     componentDidMount(){
          // Scroll to the top of the page (good for detail views)
          window.scroll(0,0);
          
          // Fetch project details from the API using the project ID
          RestClient.GetRequest(AppUrl.ProjectDetails + this.state.MyProjectId)
          .then(result => {
              // Update component state with fetched data
              // Assumes API returns an array, with the project object as the first item
              this.setState({
                img_two: result[0]['img_two'],
                projectname: result[0]['project_name'],
                project_description: result[0]['project_description'],
                project_features: result[0]['project_features'],
                live_preview: result[0]['live_preview'] 
              });
              // Note: Add error handling and check if result[0] exists before accessing properties
         })
         .catch(error => {
             // Handle API call errors (e.g., network issues, server errors)
             // Set an 'error' state here and display an error message in render()
             console.error("Error fetching project details:", error);
         });
    }

    // Render method: describes what the component displays
     render() {
          return (
              <Fragment>
                   {/* Main container with top margin for spacing */}
                   <Container className="mt-5">
                        <Row>
                            {/* Column for the project image */}
                            <Col lg={6} md={6} sm={12}>
                                <div className="about-thumb-wrap after-shape">
                                    {/* Project image display */}
                                    {/* Consider using <Image> from react-bootstrap for better styling: <Image src={this.state.img_two} fluid rounded className="shadow-sm" /> */}
                                    <img src={this.state.img_two} alt={this.state.projectname} />
                                </div>
                            </Col>

                            {/* Column for project text details */}
                            <Col lg={6} md={6} sm={12} className="mt-5"> {/* Added top margin for consistency */}
                                <div className="project-details">
                                    {/* Project Name Heading */}
                                    <h1 className="projectDetailsText"> {this.state.projectname} </h1>
                                    {/* Project Description, parsed as HTML */}
                                    <p className="detailsName">
                                    { parse(this.state.project_description) }
                                    </p>

                                    {/* Project Features, parsed as HTML */}
                                    <p className="cardSubTitle text-justify">
                                        <FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />
                                        { parse(this.state.project_features) }
                                    </p>

                                    {/* Live Preview Button */}
                                    {/* Ensure live_preview is a valid URL before rendering, and add target="_blank" for new tab */}
                                    <Button variant="info" href={this.state.live_preview}> Live Preview </Button>
                                </div>
                            </Col>
                        </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default ProjectDetails