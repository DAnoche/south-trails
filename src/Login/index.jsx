import { LoginAPI } from "../Utils/fetch";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  let isUserLoggedIn = false;

  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "https://DAnoche.github.io/south-trails/";
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
          window.location.href = "https://DAnoche.github.io/south-trails/";
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
        <div className="container login-form col-md-10 col-lg-7 col-xl-5 d-flex justify-content-center align-items-center text-light">
          <form className="text-center">
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
            <div className="mb-4">
              <input
                id="password"
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-lg w-100 btn-color mb-4" onClick={login}>
              Login
            </button>

            <div className="login-icon text-center d-block d-md-none">
              <button className="btn btn-lg w-100 btn-color">
                <i className="fab fa-facebook-f me-2" />
              </button>
            </div>

            <div className="text-center">
              Dont have an account yet?&nbsp;
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
