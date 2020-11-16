import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" href="#">
        <img src="./images/logo.png" className="navbrand" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="col-md-4">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" href="#">
                <h6>Home</h6>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                <h6>Categories</h6>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                <h6>Mantabb</h6>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search course............."
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <div class="dropdown account">
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              id="menu1"
              data-toggle="dropdown"
            >
              <img src="./images/avatar.png" className="avatar" />
              <span class="caret"></span>
            </button>
            <ul
              class="dropdown-menu dropdown-account"
              role="menu"
              aria-labelledby="menu1"
            >
              <li role="presentation">
                <Link
                  className="avatar-link"
                  role="menuitem"
                  tabIndex="-1"
                  href="#"
                >
                  Setting
                </Link>
              </li>
              <li role="presentation">
                <Link
                  className="avatar-link"
                  role="menuitem"
                  tabIndex="-1"
                  href="#"
                >
                  Signout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
