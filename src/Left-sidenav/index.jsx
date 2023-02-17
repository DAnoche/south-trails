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
      <nav className="sidenav col-2 sticky-top vh-100">
        {/* Logo */}
        <Link
          onClick={() => {
            props.setCurrentLink("/");
          }}
          to="/"
          className="text-decoration-none text-light w-100"
        >
          <img
            className="sidenav-logo img-fluid"
            src={"/images/South-Trails-logo.svg"}
            alt="South Trails Logo"
          />
        </Link>

        {/* Menu */}
        <div className="container">
          <ul className="navbar-nav decoration-none">
            <li className="nav-item mb-3 pb-3 border-bottom border-light">
              <Link
                onClick={() => {
                  props.setCurrentLink("/");
                }}
                to="/"
                className="text-decoration-none text-light w-100"
              >
                <span className="fa fa-home mx-3" />
                Home
              </Link>
            </li>
            <li className="nav-item mb-3 pb-3 border-bottom border-light">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Gallert");
                }}
                to="/Gallery"
                className="text-decoration-none text-light w-100"
              >
                <span className="fa fa-photo mx-3" />
                Gallery
              </Link>
            </li>
            <li className="nav-item mb-3 pb-3 border-bottom border-light">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Trails");
                }}
                to="/Trails"
                className="text-decoration-none text-light w-100"
              >
                <span className="fa fa-bolt  mx-3" />
                Trails
              </Link>
            </li>
            <li className="nav-item mb-3 pb-3 border-bottom border-light">
              <Link
                onClick={() => {
                  props.setCurrentLink("/Maps");
                }}
                to="/Maps"
                className="text-decoration-none text-light w-100"
              >
                <span className="fa fa-map mx-3" />
                Maps
              </Link>
            </li>

            <li className="nav-item mb-5 pb-3 border-bottom border-light">
              <Link
                to="/Login"
                className="text-decoration-none text-light w-100"
                onClick={SignOut}
              >
                Sign-Out
              </Link>
            </li>
          </ul>
        </div>

        {/* News Letter */}
        <div className="text-center text-light">
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
        <div className="text-center text-light">
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
