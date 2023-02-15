import { LoginAPI } from "../Utils/fetch";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  let isUserLoggedIn = false;

  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000/";
    }
  } catch (error) {}

  const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("username: ", username);
    console.log("password: ", password);

    LoginAPI(username, password)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log("Result: ", result);
        if (result.success) {
          localStorage.setItem("user", JSON.stringify(result.userData));
          window.location.href = "http://localhost:3000/";
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return !isUserLoggedIn ? (
    <>
      <div className="login-image row g-0 align-items-center vh-100 d-flex">
        <div className="login-quote col-lg-7 d-none d-lg-block position-absolute bottom-0 start-0 ms-5">
          <h1 className="text-light display-2 ">Discover something new.</h1>
          <p className="text-light lead">
            The journey of a thousand miles begins with a single step.
          </p>
        </div>

        <div className="container login-form col-lg-5 me-0 h-100 d-flex justify-content-center align-items-center text-light">
          <form className="container-fluid text-center p-md-5 p-lg-2">
            <img
              className="login-logo img-fluid d-inline-block"
              src={"/images/South-Trails-logo.svg"}
              alt="South Trails Logo"
            />
            <h2 className="text-center display-6 mb-5">
              Login To Your Account
            </h2>
            <div className="mb-3">
              <input
                id="username"
                className="form-control form-control-lg"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-5">
              <input
                id="password"
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-lg w-100 btn-color" onClick={login}>
              Login
            </button>

            <div className="login-divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <div className="login-icon text-center">
              <button className="btn btn-lg w-100 btn-color">
                <i className="fab fa-facebook-f me-2" />
                Continue with Facebook
              </button>
            </div>

            <div className="text-center">
              Dont have an account yet ? &nbsp;
              <Link to="/Register" className="login-link">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Login;
