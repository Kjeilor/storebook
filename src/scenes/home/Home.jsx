import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./home.css";

const  Home = () => {
    return (
        <div className = "home">
            <Sidebar/>
            <Main />
        </div>
    )
}

export default Home;
