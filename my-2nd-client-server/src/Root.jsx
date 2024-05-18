import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <Outlet/>
        </div>
    );
};

export default Root;