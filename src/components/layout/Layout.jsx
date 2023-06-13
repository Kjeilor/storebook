import {React , useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./layout.scss";

function Layout() {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="layout">
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
  );
}

export default Layout;
