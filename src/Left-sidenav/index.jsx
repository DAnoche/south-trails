import { Link } from "react-router-dom";
import { useState } from "react";
import "./Left-nav.css";

function LeftNavBar(props) {
  const SignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [email, setEmail] = useState("");

  return (
    <>
      <nav className="sidenav col-2 col-lg-3 col-xl-2 sticky-top overflow-hidden vh-100">
        {/* Logo */}
        <Link
          onClick={() => {
            props.setCurrentLink("/");
          }}
          to="/"
          className="text-decoration-none text-light w-100 d-none d-lg-block"
        >
          <img
            className="sidenav-logo img-fluid"
            src={"/images/South-Trails-logo.svg"}
            alt="South Trails Logo"
          />
        </Link>

        {/* Menu */}

        <ul className="navbar-nav decoration-none">
          <li className="sidenav-li nav-item mb-3 pb-3 mt-5 mt-lg-0 text-center text-lg-start">
            <Link
              onClick={() => {
                props.setCurrentLink("/");
              }}
              to="/"
              className="text-decoration-none text-light w-100"
            >
              <span className="fa fa-home mx-3 sidenav-icon" />
              <span className="d-none d-lg-inline">Home</span>
            </Link>
          </li>
          <li className="sidenav-li nav-item mb-3 pb-3 text-center text-lg-start">
            <Link
              onClick={() => {
                props.setCurrentLink("/Gallery");
              }}
              to="/Gallery"
              className="text-decoration-none text-light w-100"
            >
              <span className="fa fa-photo mx-3 sidenav-icon" />
              <span className="d-none d-lg-inline">Gallery</span>
            </Link>
          </li>
          <li className="sidenav-li nav-item mb-3 pb-3 text-center text-lg-start">
            <Link
              onClick={() => {
                props.setCurrentLink("/Trails");
              }}
              to="/Trails"
              className="text-decoration-none text-light w-100"
            >
              <span className="fa fa-bolt mx-3 sidenav-icon" />
              <span className="d-none d-lg-inline">Trails</span>
            </Link>
          </li>
          <li className="sidenav-li nav-item mb-3 pb-3 text-center text-lg-start">
            <Link
              onClick={() => {
                props.setCurrentLink("/Maps");
              }}
              to="/Maps"
              className="text-decoration-none text-light w-100"
            >
              <span className="fa fa-map mx-3 sidenav-icon" />
              <span className="d-none d-lg-inline">Maps</span>
            </Link>
          </li>

          <li className="sidenav-li sidenav-li-logout nav-item pb-3 text-center text-lg-start">
            <Link
              to="/Login"
              className="text-decoration-none text-light w-100"
              onClick={SignOut}
            >
              <span className="fa fa-sign-out mx-3 sidenav-icon" />
              <span className="d-none d-lg-inline">Log out</span>
            </Link>
          </li>
        </ul>

        {/* News Letter */}
        <div className="text-center text-light d-none d-lg-block">
          <div className="mb-5 mt-2">
            <h3 className="h5 mb-3">Subscribe for newsletter</h3>
            <form>
              <div className="form-group justify-content-center d-flex">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control w-75 opacity-75"
                  placeholder="Email Address"
                />
              </div>
              <button
                id="newsletterBtn"
                className="btn w-75 border mt-2"
                disabled={
                  !email || email.indexOf("@") === -1 || !email.endsWith(".com")
                }
                onClick={() => {
                  alert("Subscribed!");
                }}
              >
                <span className="fa fa-paper-plane text-light" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-light d-none d-lg-block">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved
          </p>
          <Link
            to="/Privacy-Policy"
            className="text-decoration-underline text-light w-100"
          >
            Privacy Policy
          </Link>
        </div>
      </nav>
    </>
  );
}

export default LeftNavBar;
