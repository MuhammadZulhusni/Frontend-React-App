import React, { Fragment, useEffect } from 'react'; // Import useEffect for window.scroll
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import { useParams } from 'react-router-dom'; // Import useParams hook directly here!

// Convert ProjectDetailPage to a functional component
const ProjectDetailPage = () => {
    // Use the useParams hook to get the URL parameters
    const { projectID } = useParams();

    // Use useEffect for side effects, similar to componentDidMount
    useEffect(() => {
        // This will run once when the component mounts
        window.scroll(0, 0);
        console.log("ProjectPassedID (from useParams):", projectID); // For debugging
    }, [projectID]); // Add projectID to dependency array if you want to re-run when ID changes

    return (
        <Fragment>
            <TopNavigation title="Project Details " />
            <PageTop pagetitle="Project Details" />
            {/* Pass the ID down to the ProjectDetails component */}
            <ProjectDetails id={projectID} />
            <Footer />
        </Fragment>
    );
}

export default ProjectDetailPage;