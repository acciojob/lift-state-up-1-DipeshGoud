import ParentComponent from "./Parent";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ParentComponent />
    </div>
  )
}

export default App
