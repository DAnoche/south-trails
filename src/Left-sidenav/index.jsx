import { Link } from "react-router-dom";

function LeftNavBar(props) {
  const SignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-1 col-lg-2 sticky-top bg-secondary vh-100"
      >
        <div className="text-center my-3">
          <img
            className="profile-image border border-3 border-light"
            src="images/tomeee.jpg"
            alt="Profile-Pic"
          />
          <h2 className="text-light mt-2">Hi!, I'm Tomeee</h2>
          <Link
            onClick={() => {
              props.setCurrentLink("/Someting");
            }}
            to="/Someting"
            className="link-light"
          >
            View Profile
          </Link>
        </div>

        <div className=" container border-top border-bottom border-light pt-3">
          <ul className="navbar-nav mb-5  text-light">
            <li className="nav-item active mb-3">
              <Link
                onClick={() => {
                  props.setCurrentLink("/");
                }}
                to="/"
                className="btn btn-light w-100"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Dashboard");
                }}
                to="/Dashboard"
                className="btn text-light w-100"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Contact-us");
                }}
                to="/Contact-us"
                className="btn text-light w-100"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Support");
                }}
                to="/Support"
                className="btn text-light w-100"
              >
                Support
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Someting");
                }}
                to="/Someting"
                className="btn text-light w-100"
              >
                Documents
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                to="/Login"
                className="btn text-light w-100"
                onClick={SignOut}
              >
                Sign-Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer text-center text-muted">
          <ul className="justify-content-center list-unstyled d-flex pt-3">
            <li className="ms-3">
              <a href="https://www.facebook.com" target="_blank">
                <i className="bi bi-facebook social-icons text-light"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.twitter.com" target="_blank">
                <i className="bi bi-twitter social-icons text-light"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com" target="_blank">
                <i className="bi bi-instagram social-icons text-light"></i>
              </a>
            </li>
          </ul>
          <p className="">SPACE KITTIES &copy; 2023</p>
        </div>
      </nav>
    </>
  );
}

export default LeftNavBar;
