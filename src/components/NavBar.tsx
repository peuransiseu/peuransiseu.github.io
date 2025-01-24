import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container d-flex justify-content-between align-items-center mt-3 mb-0">
        <div className="container text-center mb-0">
          <div className="row justify-content-md-center mb-0">
            <div className="col col-lg-3 navbar-nav align-items-center justify-content-start gap-4 ps-5 mb-0">
              <Link
                to="/"
                className="nav-link logo-hover ms-5"
                aria-current="page"
              >
                <span className="fs-4">Home</span>
              </Link>
              <Link to="/about" className="nav-link logo-hover ms-3">
                <span className="fs-4">About</span>
              </Link>
            </div>
            <div className="col-1 d-flex ps-5 justify-content-center">
              <a className="navbar-brand" href="#">
                <img
                  src="src\assets\FAF_nobg.png"
                  alt="Bootstrap"
                  width="100"
                  height="100"
                  className="logo-hover logo-scale"
                />
              </a>
            </div>
            <div className="col col-lg-3 navbar-nav ms-5 align-items-center gap-4">
              <Link to="/projects" className="nav-link logo-hover">
                <span className="fs-4">Projects</span>
              </Link>
              <Link to="/orgsexp" className="nav-link logo-hover">
                <span className="fs-4">Organizations</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
