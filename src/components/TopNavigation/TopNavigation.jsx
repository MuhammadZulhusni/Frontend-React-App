import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"
import '../../asset/css/responsive.css';

class TopNavigation extends Component {

  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",                // Title style class
      navBarLogo: [whiteLogo],                // Default logo image
      navVariant: "dark",                     // Navbar color scheme (dark/light)
      navBarBack: "navBackground",            // Default navbar background class
      navBarItem: "navItem",                  // Link item class
      pageTitle: props.title                  // Page-specific title from props
    }
  }

  // Change navbar style when scrolling
  onScroll = () => {
    if (window.scrollY > 100) {
      // When scrolled down: switch to light mode & black logo
      this.setState({
        navBarTitle: 'navTitleScroll',
        navBarLogo: [blackLogo],
        navBarBack: 'navBackgroundScroll',
        navBarItem: 'navItemScroll',
        navVariant: 'light'
      });
    } else if (window.scrollY < 100) {
      // When at top: switch to dark mode & white logo
      this.setState({
        navBarTitle: 'navTitle',
        navBarLogo: [whiteLogo],
        navBarBack: 'navBackground',
        navBarItem: 'navItem',
        navVariant: 'dark'
      });
    }
  }

  // Set up scroll listener after component mounts
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <Fragment>
        {/* Dynamically set the page title */}
        <title>{this.state.pageTitle}</title>

        {/* Main Navbar */}
        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant={this.state.navVariant}
        >
          {/* Add some horizontal padding by wrapping with a container */}
          <div className="container">
            <Navbar.Brand className={this.state.navBarTitle}>
              <NavLink to="/">
                <img src={this.state.navBarLogo} alt="Logo" style={{ height: '40px' }} />
              </NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex gap-4">
                <Nav.Link>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    HOME
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    SERVICE
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/course"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    COURSES
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/porfolio"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    PORTFOLIO
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? `${this.state.navBarItem} activeNav` : this.state.navBarItem
                    }
                  >
                    CONTACT US
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation;
