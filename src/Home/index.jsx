import LeftNavBar from "../Left-sidenav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [currentLink, setCurrentLink] = useState("");
  let isUserLoggedIn = false;

  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      // do nothing, continue lang
    } else {
      localStorage.clear();
      window.location.href = "http://localhost:3000/login";
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = "http://localhost:3000/login";
  }

  const renderOutlet = () => {
    if (currentLink == "/") {
      return (
        <>
          <h1>Im home content</h1>
        </>
      );
    } else {
      return <Outlet />;
    }
  };

  return !!isUserLoggedIn ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar setCurrentLink={setCurrentLink} />
          <main className="col-12 col-md-10 col-lg-9 col-xl-10 ms-sm-auto px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom sticky-top bg-light">
              <h1 className="display-5 fw-bold">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-lg btn-outline-dark">
                    <span>
                      <i className="bi bi-cart"></i>
                    </span>
                    &nbsp;Cart
                  </button>
                  <button type="button" className="btn btn-lg btn-outline-dark">
                    <span>
                      <i className="bi bi-chat-dots"></i>
                    </span>
                    &nbsp;Chat
                  </button>
                </div>
              </div>
            </div>
            {renderOutlet()}
          </main>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
export default Home;
