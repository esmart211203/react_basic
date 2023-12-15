import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export const Base = () => {
    return (
        <>
            <div className="header">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}   