import LeftNavBar from "../Left-sidenav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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

  // Weather API
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  let params = new URLSearchParams({
    access_key: "cd51865404614b1ba4755834231802",
    q: [lat, long],
  });

  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${params}`)
    .then((res) => res.json())
    .then(console.log);

  return !!isUserLoggedIn ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar setCurrentLink={setCurrentLink} />
          <main className="col-10 col-md-10 col-lg-9 col-xl-10">
            <div className="d-flex align-items-center pt-3 pb-2 mb-3 border-bottom sticky-top bg-light">
              <h1 className="display-5 fw-bold">Dashboard</h1>
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
