import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button, Image, ListGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faUser, faClock, faClipboard, faClone, faTags } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css'; // Imports the CSS for the video-react player.
import { Player, BigPlayButton } from 'video-react'; // Imports the main Player component and the BigPlayButton from video-react.
import parse from 'html-react-parser'; // Imports html-react-parser to convert HTML strings into React elements.

// Defines the CourseDetails component as a React class component.
class CourseDetails extends Component {
     constructor(props){
          super(props);
          // The constructor is called when the component is created.
          // It's used to initialize state and bind methods, but here it just passes props to the parent constructor.
     }

     render() {
          // Accesses 'courseallData' from the component's props.
          // Uses a fallback empty array if 'courseallData' is undefined or null, ensuring it's always an array.
          const courseDetailsArray = this.props.courseallData || [];

          // Initializes variables for course details with default "Not Available" values.
          // These defaults ensure that something is displayed even if specific data is missing.
          let LongTitle = "Course Title Not Found";
          let LongDescription = "No description available for this course.";
          let TotalDuration = "N/A";
          let TotalLecture = "N/A";
          let TotalStudent = "N/A";
          let SkillAll = "No specific skills listed.";
          let VideoUrl = ""; // Initializes the video URL as an empty string.
          let SmallImg = "https://via.placeholder.com/600x400?text=Course+Image"; // Provides a placeholder image URL.

          // Checks if the 'courseDetailsArray' has at least one item and that item is defined.
          // This ensures that we only try to access properties if valid data is present.
          if (courseDetailsArray.length > 0 && courseDetailsArray[0]) {
               const course = courseDetailsArray[0]; // Gets the first course object from the array.

               // Assigns values from the 'course' object to local variables.
               // Uses the logical OR operator (||) to provide a fallback to the default value if the course property is undefined, null, or empty.
               LongTitle = course.long_title || LongTitle;
               LongDescription = course.long_description || LongDescription;
               TotalDuration = course.total_duration || TotalDuration;
               TotalLecture = course.total_lecture || TotalLecture;
               TotalStudent = course.total_student || TotalStudent;
               SkillAll = course.skill_all || SkillAll;
               SmallImg = course.small_img || SmallImg;

               // Sets the 'VideoUrl'. It prioritizes the URL from the course data.
               // If the 'video_url' from the course data is not available or is an empty string,
               // it falls back to a default working video URL.
               VideoUrl = (course.video_url && course.video_url.length > 0)
                   ? course.video_url
                   : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"; // The fallback default video URL.
          }

          return (
             <Fragment>
                  {/* Container for the main course overview section, with vertical padding. */}
                  <Container className="my-5">
                       {/* A Bootstrap Row component, centered horizontally, to hold content columns. */}
                       <Row className="justify-content-center">
                            {/* Column for displaying the course's main details: title, image, and description. */}
                            <Col lg={8} md={6} sm={12} className="mb-4 mb-md-0">
                                {/* Displays the course's main title. */}
                                <h1 className="display-5 fw-bold mb-3 text-primary"> {LongTitle} </h1>
                                {/* Displays the course's main image, responsive and styled. */}
                                <Image className="w-100 rounded shadow-sm mb-4" src={SmallImg} alt={LongTitle} fluid />
                                {/* Displays the course's long description. */}
                                <p className="lead text-secondary">
                                    {/* Uses 'parse()' to render HTML content from the 'LongDescription' string. */}
                                    {parse(LongDescription)}
                                </p>
                            </Col>

                            {/* Column for displaying course features in a card. */}
                            <Col lg={4} md={6} sm={12}>
                                {/* A Bootstrap Card component for visual grouping and styling. */}
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        {/* Heading for the Course Features section. */}
                                        <h4 className="widget-title text-center mb-3">Course Features</h4>
                                        <hr className="mb-3" />
                                        {/* A ListGroup to display various course attributes. */}
                                        <ListGroup variant="flush">
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faUser} /> <span> Enrolled :</span> {TotalStudent} students</ListGroup.Item>
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faClock} /> <span>Duration :</span> {TotalDuration} hours</ListGroup.Item>
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faClipboard} /> <span>Lectures :</span> {TotalLecture}</ListGroup.Item>
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faClone} /> <span>Categories:</span> Technology</ListGroup.Item>
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faTags} /> <span>Tags:</span> Android, JavaScript</ListGroup.Item>
                                            <ListGroup.Item><FontAwesomeIcon className="text-success me-2" icon={faCheckSquare} /> <span>Instructor:</span> Kazi Ariyan</ListGroup.Item>
                                        </ListGroup>
                                        {/* Section for displaying course price and an enrollment button. */}
                                        <div className="price-wrap text-center mt-4">
                                            <h5>Price:<span className="fw-bold text-success">$54.00</span></h5>
                                            <Button variant="warning" className="w-100 mt-2">ENROLL COURSE</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                       </Row>
                  </Container>

                {/* Container for the "Skills You Need" section and the video player. */}
                <Container className="my-5">
                    <Row className="justify-content-center">
                         {/* Column for the "Skills You Need" section. */}
                         <Col lg={6} md={6} sm={12} className="mb-4 mb-md-0">
                            <Card className="shadow-sm">
                                <Card.Body>
                                    {/* Heading for the skills section. */}
                                    <h1 className="h4 fw-bold mb-3 text-primary">Skill You Need</h1>
                                    <hr className="mb-3" />
                                    {/* Unstyled list to display skills. */}
                                    <ul className="list-unstyled">
                                        {/* Uses 'parse()' to render HTML content from the 'SkillAll' string, if present. */}
                                        {parse(SkillAll)}
                                    </ul>
                                </Card.Body>
                            </Card>
                         </Col>

                        {/* Column for the video player. */}
                        <Col lg={6} md={6} sm={12}>
                        <Card className="shadow-sm">
                              <Card.Body className="p-0">
                                  {VideoUrl && VideoUrl.length > 0 ? (
                                      <Player
                                          src={VideoUrl}
                                          key={VideoUrl} // Keep the key
                                      />
                                  ) : (
                                      <div className="p-4 text-center text-muted">
                                          <p>Video Not Available</p>
                                          <small>Please check the video URL in the course data.</small>
                                      </div>
                                  )}
                              </Card.Body>
                          </Card>
                        </Col>
                    </Row>
               </Container>
             </Fragment>
          );
     }
}

export default CourseDetails;