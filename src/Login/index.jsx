import { LoginAPI } from "../Utils/fetch";
import { Link } from "react-router-dom";

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
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5">
                Login to continue
              </span>

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

              <div className="flex-sb-m w-full pt-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>

                <div>
                  <a href="#" className="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={login}>
                  Login
                </button>
              </div>

              <div className="mt-3 container-login100-form-btn">
                <Link to="/Register" className="login100-form-btn">
                  Sign-up
                </Link>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign up using</span>
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

export default Login;
