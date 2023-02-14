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
      <div className="login-image vh-100">
        <div className="container me-0 w-25 h-100 opacity-75 d-flex justify-content-center align-items-center bg-light">
          <form>
            <img
              className="login-logo"
              src={"/images/South-Trails-logo.svg"}
              alt="South Trails Logo"
            />
            <h1 className="mb-3 text-center">LOGIN</h1>
            <div className="mb-3">
              <input
                id="username"
                className="form-control"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button className="btn btn-lg w-100 btn-primary" onClick={login}>
              Login
            </button>

            <div className="mt-2">
              Dont have an account yet ? &nbsp;
              <Link to="/Register" className="login100-form-btn">
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
