import { Link } from "react-router-dom";
import "./404.css";

function NotFound() {
  return (
    <>
      <main className="error-page">
        <div className="content text-center">
          <h1 className="error-code">404</h1>
          <h2 className="error-text">Page not found</h2>
          <p className="error-text">It seems that you are lost.</p>
          <Link to="/" className="btn btn-home">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
