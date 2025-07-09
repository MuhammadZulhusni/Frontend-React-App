import React, { Component, Fragment } from 'react';
// React Bootstrap components for layout and styling
import { Col, Container, Row, Image } from 'react-bootstrap';
// FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// Local placeholder image for project details
import projectDetailsPlaceholder from '../../asset/image/pdetails.png';

// If fetching real data, also needs these imports:
// import RestClient from '../../RestAPI/RestClient';
// import AppUrl from '../../RestAPI/AppUrl';

class ProjectDetails extends Component {
     // Component setup
     constructor(props){
          super(props); // Essential first line in constructor
          this.state = {
               MyProjectId: props.id, // Project ID received from parent component
               // For real data fetching, state would also include:
               // projectData: null, // Stores actual project details
               // loading: true,     // Manages loading state
               // error: false       // Handles error state
          };
     }

     // Lifecycle method: runs after component appears on screen
     componentDidMount() {
        // Scrolls window to the top
        window.scroll(0,0);

        // API call logic typically goes here for fetching project details.
        // (Currently commented out as per previous instructions for styling focus).
        /*
        if (this.state.MyProjectId) {
            // Example data fetching:
            // RestClient.GetRequest(AppUrl.ProjectDetails + this.state.MyProjectId)
            // .then(result => {
            //     // Process and set fetched data in state
            // });
        }
        */
     }

     // Describes component's appearance
     render() {
          // Variables for displaying data.
          // For real data, these would come from `this.state.projectData`.
          const currentProjectId = this.state.MyProjectId;
          const imageUrl = projectDetailsPlaceholder;
          const projectName = `Project ID: ${currentProjectId}`;
          const projectDescription = `This is a detailed description for Project ID ${currentProjectId}. It highlights key aspects of the project.`;
          const features = [
            "Requirement Gathering",
            "Modular Architecture",
            "User-Friendly Interface",
            "Database Integration",
            "Quality Assurance",
            "Ongoing Support"
          ];

          // Loading/error states would be rendered here if fetching real data.
          /*
          if (loading) { return <Container className="text-center my-5"><p>Loading...</p></Container>; }
          if (error || !projectData) { return <Container className="text-center my-5"><p className="text-danger">Error loading project.</p></Container>; }
          */

          return (
              <Fragment>
                   {/* Main container with top/bottom margin */}
                   <Container className="my-5">
                        {/* Row for content, centered horizontally and vertically */}
                        <Row className="justify-content-center align-items-center">
                            {/* Column for project image */}
                            <Col lg={6} md={6} sm={12} className="mb-4 mb-md-0">
                                {/* Responsive and styled image using React Bootstrap's Image component */}
                                <Image
                                    src={imageUrl}
                                    alt={projectName} // Accessibility text
                                    fluid // Responsive sizing
                                    rounded // Rounded corners
                                    className="shadow-sm" // Subtle shadow effect
                                />
                            </Col>

                            {/* Column for project details text */}
                            <Col lg={6} md={6} sm={12}>
                                <div className="project-details">
                                    {/* Project Title: Large, bold, primary color */}
                                    {/* (Replace with actual project name if fetched) */}
                                    <h1 className="display-5 fw-bold mb-3 text-primary">
                                        {projectName}
                                    </h1>
                                    {/* Project Description: Lead text style, muted color */}
                                    {/* (Replace with actual project description if fetched) */}
                                    <p className="lead mb-4 text-secondary">
                                        {projectDescription}
                                    </p>

                                    {/* List of Features */}
                                    <ul className="list-unstyled"> {/* Removes default bullet points */}
                                        {features.map((feature, index) => (
                                            <li key={index} className="mb-2"> {/* List item with vertical spacing */}
                                                {/* Checkmark icon: green color, right margin */}
                                                <FontAwesomeIcon className="text-success me-2" icon={faCheckSquare} />
                                                {/* Feature text: muted color */}
                                                <span className="text-muted">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                   </Container>
              </Fragment>
          );
     }
}

export default ProjectDetails;