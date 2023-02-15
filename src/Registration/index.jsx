import { RegisterAPI } from "../Utils/fetch";
import { Link } from "react-router-dom";
import "./register.css";
function Register() {
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000/";
    }
  } catch (error) {}

  const register = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    RegisterAPI(username, password, fullName, email)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log("result: ", result);
        console.log("localStorage: ", localStorage);
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("user", JSON.stringify(result.userData)); // put back if you want to automatically login
          window.location.href = "http://localhost:3000/"; // change to http://localhost:3000/ if you want to automatically login
        } else {
          // alert user that credentials is invalid
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return !isUserLoggedIn ? (
    <>
      <div className="register-image row g-0 align-items-center vh-100 d-flex">
        <div className="register-quote col-lg-7 d-none d-lg-block text-end position-absolute bottom-0 end-0 me-5 order-lg-1">
          <h1 className="text-light display-2 ">
            Not all who wander are lost.
          </h1>
          <p className="text-light lead">
            The sun shines brightest from the peaks of mountains.
          </p>
        </div>

        <div className="register-form col-lg-5 order-lg-2 me-0 h-100 d-flex align-items-center">
          <div className="container d-flex col justify-content-center text-light">
            <form className="text-center p-md-5 p-lg-2">
              <img
                className="register-logo img-fluid d-inline-block"
                src={"/images/South-Trails-logo.svg"}
                alt="South Trails Logo"
              />
              <h2 className="text-center display-6 mb-5">Create Account</h2>
              <div className="mb-3">
                <input
                  id="username"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <input
                  id="password"
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  id="fullName"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-5">
                <input
                  id="email"
                  className="form-control form-control-lg"
                  type="Email"
                  placeholder="Email"
                />
              </div>
              <button className="btn btn-lg w-100 btn-color" onClick={register}>
                Register now
              </button>

              <div className="register-divider d-flex align-items-center my-4"></div>

              <div className="text-center">
                Already have an account ?&nbsp;
                <Link to="/Login" className="register-link">
                  Login
                </Link>
                &nbsp;here instead.
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Register;
