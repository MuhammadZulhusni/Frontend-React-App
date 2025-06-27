// Import React so we can use JSX and build components
import React from 'react';

// Import the component we made
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Courses from './components/Courses/Courses';
import Video from './components/Video/Video';
import ClientReview from './components/ClientReview/ClientReview';

// Create a functional component named App
function App() {
  // Return some JSX (HTML-like code) to show on the web page
  return (
    <div>
      {/* Show the TopBanner component here */}
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
      <ClientReview />
      <Services />
    </div>
  );
}

// Export this App component so it can be used in other files
export default App;
