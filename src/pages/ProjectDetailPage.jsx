import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import { useParams } from 'react-router-dom';
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';

const ProjectDetailPage = () => {
    const { projectID } = useParams(); // Get ID from URL
    const [projectName, setProjectName] = useState("Project Details"); // Default title

    // Scroll to top and fetch project name
    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch project name based on projectID
        RestClient.PostRequest(AppUrl.ProjectDetails, { id: projectID })
            .then(result => {
                if (result && result[0]) {
                    setProjectName(result[0].project_name); // Set project name to state
                }
            })
            .catch(error => {
                console.error("Failed to fetch project details", error);
            });
    }, [projectID]);

    return (
        <Fragment>
            <TopNavigation title="Project Details" />
            <PageTop pagetitle={projectName} />
            <ProjectDetails id={projectID} />
            <Footer />
        </Fragment>
    );
}

export default ProjectDetailPage;
