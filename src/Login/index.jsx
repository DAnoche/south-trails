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
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <input id="username" className="" type="text" placeholder="Username" />

      <input
        id="password"
        className=""
        type="password"
        placeholder="Password"
      />

      <div className="">
        <button className="login100-form-btn" onClick={login}>
          Login
        </button>
      </div>

      <div className="m">
        <Link to="/Register" className="login100-form-btn">
          Sign-up
        </Link>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Login;
