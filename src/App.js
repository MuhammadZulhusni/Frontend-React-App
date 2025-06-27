// Import React so we can use JSX and build components
import React from 'react';

// Import the TopBanner component we made earlier
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';

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
    </div>
  );
}

// Export this App component so it can be used in other files
export default App;
