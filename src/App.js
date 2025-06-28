// Import React and BrowserRouter from react-router-dom
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import the AppRouter which contains all your defined routes
import AppRouter from './router/AppRouter';

// Main App component
function App() {
  return (
    // Wrap entire application in BrowserRouter 
    // so that routing works throughout the app
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
