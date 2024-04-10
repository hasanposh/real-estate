import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-PT_sans">
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;