import { Link, NavLink } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes.js";
import '../styles/style.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand active" to="/">Esmart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">action</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Todo
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-1">task1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-2">task2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-3">task 3 & 4</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-5">task 5</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-6">task 6</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-8">task 8</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/task-9">task 9</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;