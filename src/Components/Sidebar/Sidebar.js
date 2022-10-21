import CompProfile from './CompProfile/CompProfile';
import Nav from './Navbar/Nav';
import UserProfile from './UserProfile/UserProfile';


function Sidebar() {
    return (
        <aside>
            <CompProfile />
            <Nav/>
            <UserProfile />
        </aside>
    )
}

export default Sidebar
