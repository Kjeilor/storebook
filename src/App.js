import { React, useState, useEffect } from "react";
import Splash from "./components/splash/Splash";
import Layout from "./components/layout/Layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API request, data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false to hide the splash screen
    }, 3000); // Adjust the delay as per your preference
  }, []);

  return (
    <div className="App">
      {isLoading ? <Splash /> : <Layout />}
    </div>
  );
}

export default App;
