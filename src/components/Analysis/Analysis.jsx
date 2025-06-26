// Import React and required components
import React, { Component, Fragment } from 'react';
// Import layout components from React Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Import chart components from Recharts
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// Create a class component named Analysis
class Analysis extends Component {
  constructor() {
    super();
    // Set initial data for the bar chart
    this.state = {
      data: [
        { Techonology: 'PHP', Projects: 100 },
        { Techonology: 'MySqli', Projects: 90 },
        { Techonology: 'Laravel', Projects: 95 },
        { Techonology: 'React', Projects: 85 },
        { Techonology: 'Opencart', Projects: 80 },
        { Techonology: 'Vue Js', Projects: 70 },
        { Techonology: 'Django', Projects: 60 },
        { Techonology: 'JavaScript', Projects: 100 },
      ],
    };
  }

  // Render the component UI
  render() {
    const blue = '#051b35'; // Bar color

    return (
      <Fragment>
        {/* Main container with center text */}
        <Container className="text-center">
          {/* Title */}
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>

          {/* Layout row: chart on left, text on right */}
          <Row className="justify-content-center align-items-center">
            
            {/* Left column: Bar chart */}
            <Col lg={6} md={12} sm={12} className="mb-4" style={{ height: '300px' }}>
              {/* Responsive container makes chart fit its parent */}
              <ResponsiveContainer width="100%" height="100%">
                {/* Create bar chart */}
                <BarChart data={this.state.data}>
                  {/* Show X-axis with technology names */}
                  <XAxis dataKey="Techonology" />
                  {/* Show tooltip when hover */}
                  <Tooltip />
                  {/* Bar represents project count */}
                  <Bar dataKey="Projects" fill={blue} />
                </BarChart>
              </ResponsiveContainer>
            </Col>

            {/* Right column: Text section */}
            <Col lg={6} md={12} sm={12}>
              <p className="text-start text-justify serviceDescription">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching.
                I am a founder of eLe Easy Learning and a passionate Web Developer, Programmer & Instructor.
                <br /><br />
                I have been working online for the last 7 years and have created several successful websites.
                I create project-based courses that help you learn professionally and feel like a complete developer.
                Easy Learning exists to help you succeed in life.
                <br /><br />
                Each course is hand-tailored to teach a specific skill. Whether you’re learning a new skill
                or refreshing your memory, you're in the right place.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

// Export the component to be used in other files
export default Analysis;
