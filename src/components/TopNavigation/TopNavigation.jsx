// Import React and required components
import React, { Component, Fragment } from 'react';

// Import Bootstrap Navbar components
import { Navbar, Nav, Container } from 'react-bootstrap';

// Import logo images
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';

// Import custom and bootstrap CSS
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

// Import NavLink from react-router-dom for client-side routing
import {NavLink} from "react-router-dom"

// Create a class component named TopNavigation
class TopNavigation extends Component {
  constructor() {
    super();
    // Set the initial state for navbar styling
    this.state = {
      navBarTitle: 'navTitle',          // Navbar text class
      navBarLogo: whiteLogo,            // Logo image
      navBarBack: 'navBackground',      // Navbar background class
      navBarItem: 'navItem',            // Nav link class
    };
  }

  // Function to change navbar style when scrolling
  onScroll = () => {
    if (window.scrollY > 100) {
      // If scroll down more than 100px, update navbar style
      this.setState({
        navBarTitle: 'navTitleScroll',
        navBarLogo: blackLogo,
        navBarBack: 'navBackgroundScroll',
        navBarItem: 'navItemScroll',
      });
    } else {
      // If scroll up to top, reset to default style
      this.setState({
        navBarTitle: 'navTitle',
        navBarLogo: whiteLogo,
        navBarBack: 'navBackground',
        navBarItem: 'navItem',
      });
    }
  };

  // This runs when component is ready — add scroll listener
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  // Render the navbar
  render() {
    return (
      <Fragment>
        {/* Navbar container with dynamic background class */}
        <Navbar
          className={`${this.state.navBarBack} shadow-sm py-2`} // Add shadow and padding
          collapseOnSelect // Collapse menu on select (for mobile)
          fixed="top"      // Stick navbar at the top
          expand="lg"      // Expand menu on large screens
          variant="dark"   // Use dark Bootstrap theme
        >
          <Container>
            {/* Brand logo with dynamic class */}
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              <img
                src={this.state.navBarLogo}       // Show white or black logo
                alt="logo"
                style={{ height: '45px', marginRight: '10px' }} // Resize logo
              />
            </Navbar.Brand>

            {/* Toggle button for small screens */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            {/* Navigation links section */}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* Right-aligned links with spacing */}
              <Nav className="ms-auto d-flex gap-4">
                {/* Home link */}
                <Nav.Link>
                  {/* NavLink allows active route highlighting and SPA behavior */}
                  <NavLink className={this.state.navBarItem} to="/">
                    HOME
                  </NavLink>
                </Nav.Link>

                {/* About link */}
                <Nav.Link>
                  <NavLink className={this.state.navBarItem} to="/about">
                    ABOUT
                  </NavLink>
                </Nav.Link>

                {/* Services link */}
                <Nav.Link>
                  <NavLink className={this.state.navBarItem} to="/service">
                    SERVICE
                  </NavLink>
                </Nav.Link>

                {/* Courses link */}
                <Nav.Link>
                  <NavLink className={this.state.navBarItem} to="/course">
                    COURSES
                  </NavLink>
                </Nav.Link>

                {/* Portfolio link */}
                <Nav.Link>
                  <NavLink className={this.state.navBarItem} to="/porfolio">
                    PORTFOLIO
                  </NavLink>
                </Nav.Link>

                {/* Contact link */}
                <Nav.Link>
                  <NavLink className={this.state.navBarItem} to="/contact">
                    CONTACT US
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

// Export this component to use in App.js
export default TopNavigation;
