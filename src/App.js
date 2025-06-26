// Import React so we can use JSX and build components
import React from 'react';

// Import the TopBanner component we made earlier
import TopBanner from './components/TopBanner/TopBanner';

// Create a functional component named App
function App() {
  // Return some JSX (HTML-like code) to show on the web page
  return (
    <div>
      {/* Show the TopBanner component here */}
      <TopBanner />
    </div>
  );
}

// Export this App component so it can be used in other files
export default App;
