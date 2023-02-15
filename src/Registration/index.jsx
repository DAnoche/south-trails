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
        <div className="register-quote col-lg-7 d-none d-lg-block position-absolute bottom-0 start-0 ms-5">
          <h1 className="text-light display-2 ">
            Not all who wander are lost.
          </h1>
          <p className="text-light lead">
            The sun shines brightest from the peaks of mountains.
          </p>
        </div>

        <div className="container register-form col-lg-5 me-0 h-100 d-flex justify-content-center align-items-center text-light">
          <form className="container-fluid text-center p-md-5 p-lg-2">
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

      {/* End of line */}
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5">Sign-up</span>

              <div className="wrap-input100">
                <input
                  id="username"
                  className="input100"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  id="password"
                  className="input100"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="wrap-input100">
                <input
                  id="fullName"
                  className="input100"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="wrap-input100">
                <input
                  id="email"
                  className="input100"
                  type="Email"
                  placeholder="Email"
                />
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={register}>
                  Register now
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign in using</span>
              </div>

              <div className="login100-form-social flex-c-m">
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg1 m-r-5"
                >
                  <i className="fa fa-facebook-f" aria-hidden="true"></i>
                </a>

                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </form>

            <div
              className="login100-more"
              style={{
                backgroundImage: `url(images/loginbg.jpg)`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Register;
