import {Link, NavLink} from "react-router-dom";

export function Header()
{
    return (
    <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Link to="/">
                    <img src="../../public/images/logo.png"/>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Dancing">
                            TRAININGS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Classes">
                            CLASSES
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Hours">
                            SHOWS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/About">
                            ABOUT
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="search_icon">
                        <Link to="/"><img src="../../public/images/search-icon.png"/></Link>
                    </div>
                </form>
            </div>
        </nav>
    </div>)
}