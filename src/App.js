// Import the React library to use JSX and create components
import React from 'react';

// Import the TopBanner component that created earlier
import TopBanner from './components/TopBanner/TopBanner';

// Define a functional component called App
function App() {
  // This function returns JSX (looks like HTML), which is what will be shown on the web page
  return (
    <div>
      {/* This is where we use the TopBanner component to display it on the page */}
      <TopBanner />
    </div>
  );
}

// Export the App component so that other files (like index.js) can use it
export default App;
