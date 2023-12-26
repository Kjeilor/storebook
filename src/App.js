import { React, useState, useEffect } from "react";
import Splash from "./components/splash/Splash";
import Layout from "./components/layout/Layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Splash /> : <Layout />}
    </div>
  );
}

export default App;
