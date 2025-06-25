// Import React and necessary features from the React library
import React, { Component, Fragment } from 'react'

// Import Container from react-bootstrap (used for layout and spacing)
import { Container } from 'react-bootstrap'

// Import custom CSS styling from local asset folder
import '../../asset/css/custom.css';

// Create a class-based React component called TopBanner
class TopBanner extends Component {
    
    // The render() method defines what will be displayed on the screen
    render() {
        return (
            // Fragment is a wrapper used to group multiple elements without adding extra HTML tags
            <Fragment>
                {/* Container is a Bootstrap component that gives margin and center alignment */}
                <Container className="topFixedBanner">
                    
                </Container>
            </Fragment>
        )
    }
}

// Export the TopBanner component so it can be used in other parts of the app
export default TopBanner
