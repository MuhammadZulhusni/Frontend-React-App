import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook to extract URL parameters
import CourseDetails from '../components/CourseDetails/CourseDetails'; // Component to display course details
import Footer from '../components/Footer/Footer';       // Footer component
import PageTop from '../components/PageTop/PageTop';     // Page top title component
import TopNavigation from '../components/TopNavigation/TopNavigation'; // Top navigation bar
import RestClient from '../RestAPI/RestClient';         // API client for making requests
import AppUrl from '../RestAPI/AppUrl';                 // API endpoint definitions
import { Container } from 'react-bootstrap';            // For layout and messages

// Functional component for displaying a single course's details page
const CourseDetailsPage = () => {
    // Get courseID and courseName from the URL parameters
    const { courseID, courseName } = useParams();

    // State variables for course data, loading status, and error status
    const [courseData, setCourseData] = useState([]); // Stores fetched course data
    const [loading, setLoading] = useState(true);   // Tracks data loading status
    const [error, setError] = useState(false);     // Tracks if an error occurred

    // Effect hook to fetch data when component mounts or courseID changes
    useEffect(() => {
        window.scroll(0, 0); // Scrolls to the top of the page

        // Fetch data only if courseID is present
        if (courseID) {
            const url = AppUrl.CourseDetails + courseID; // Construct API URL

            RestClient.GetRequest(url)
                .then(result => {
                    // Update state based on successful data fetch
                    if (result && Array.isArray(result) && result.length > 0) {
                        setCourseData(result);
                        setLoading(false);
                        setError(false);
                    } else {
                        // Handle no data found scenario
                        setLoading(false);
                        setError(true);
                        setCourseData([]);
                        console.error("No course data found for ID:", courseID, result);
                    }
                })
                .catch(err => {
                    // Handle API request errors
                    console.error("Error fetching course details:", err);
                    setLoading(false);
                    setError(true);
                    setCourseData([]);
                });
        } else {
            // Handle case where courseID is missing from URL
            setLoading(false);
            setError(true);
        }
    }, [courseID]); // Dependency array: effect re-runs if courseID changes

    // Conditional rendering based on loading, error, or data availability
    if (loading) {
        return (
            <Fragment>
                <TopNavigation title="Course Details" />
                <PageTop pagetitle="Loading..." /> {/* Loading message for page top */}
                <Container className="text-center my-5"><p className="lead">Loading course details...</p></Container>
                <Footer />
            </Fragment>
        );
    }

    if (error || courseData.length === 0) {
        return (
            <Fragment>
                <TopNavigation title="Course Details" />
                {/* Dynamic title for error state */}
                <PageTop pagetitle={courseName ? `Course: ${courseName}` : "Course Details Error"} />
                <Container className="text-center my-5">
                    <p className="text-danger lead">Error loading course details or course not found. Please verify the URL and backend data.</p>
                </Container>
                <Footer />
            </Fragment>
        );
    }

    // Render course details if data is successfully loaded
    return (
        <Fragment>
            <TopNavigation title="Course Details" />
            <PageTop pagetitle={courseName || "Course Details"} /> {/* Page title from URL or default */}
            <CourseDetails courseallData={courseData} /> {/* Pass fetched data to CourseDetails component */}
            <Footer />
        </Fragment>
    );
};

export default CourseDetailsPage; // Export the component