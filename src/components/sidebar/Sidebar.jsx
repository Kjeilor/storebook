import BizProfile from "./sidebarComponents/bizProfile/BizProfile";
import UserProfile from "./sidebarComponents/userProfile/UserProfile";

const Sidebar = () => {
    <cssBaseline/>
    return (
        <div className ="sidebar">
            <div className ="biz-prof">
                <BizProfile />
            </div>
            <div className ="menu-bar">
                <ul>
                    <li>Updates</li>
                    <li>General</li>
                    <li>Explore</li>
                </ul>
                <h3>Workstation</h3>
                <ul>
                    <li>Storefront</li>
                    <li>Teams</li>
                    <li>Marketing</li>
                    <li>Supply Dock</li>
                    <li>Documents</li>
                </ul>
            </div>
            <div className ="usr-Prof ">
                <UserProfile />
            </div>
        </div>
    )
}

export default Sidebar
