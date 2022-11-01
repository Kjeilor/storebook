import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./scenes/home/Home";
import Login from "./scenes/login/Login";
import Updates from "./scenes/updates/Updates";
import General from "./scenes/general/General";
import Explore from "./scenes/explore/Explore";
import Storefront from "./scenes/storefront/Storefront";
import Teams from "./scenes/teams/Teams";
import Marketing from "./scenes/marketing/Marketing";
import SupplyDock from "./scenes/supplydock/SupplyDock";
import Documents from "./scenes/documents/Documents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/updates" element={<Updates />} />
          <Route path="/general" element={<General />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/storefront" element={<Storefront />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/supplydock" element={<SupplyDock />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
