import LeftNavBar from "../Left-sidenav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";

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

  const [likes, setLikes] = useState(77);
  const [dislikes, setDislikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(77);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikes(dislikes - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes(0);
      setIsDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
    }
  };

  const likeButtonClasses = `btn bg-light p-1 me-3 align-items-center ${
    isLiked ? "text-primary" : ""
  }`;

  const dislikeButtonClasses = `btn bg-light p-1 align-items-center ${
    isDisliked ? "text-danger" : ""
  }`;

  const renderOutlet = () => {
    if (currentLink == "/") {
      return (
        <>
          {/* Video 1 */}
          <div className="row row-cols-1 mb-3">
            <div className="col">
              <div className="card shadow-sm">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/XVIuoWBRV5c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <div className="card-body">
                  <div className="card-text">
                    <strong>
                      Mt. Batulao, Nasugbu, Batangas, Philippines | Trail
                      Running
                    </strong>
                    <br />
                    Posted by: Nomad Terra Crawlers TV
                    <br />
                    <p>Uploaded: 1 year ago</p>
                  </div>
                  <div className="card-footer bg-light">
                    <button className={likeButtonClasses} onClick={handleLike}>
                      <span className="fa fa-thumbs-o-up" />
                      &nbsp;{likes}&nbsp;Likes
                    </button>
                    <button
                      className={dislikeButtonClasses}
                      onClick={handleDislike}
                    >
                      <span className="fa fa-thumbs-down" />
                      &nbsp;{dislikes}&nbsp;Dislikes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video 2 */}
          <div className="row row-cols-1 mb-3">
            <div className="col">
              <div className="card shadow-sm">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/MviwwvE5Vvw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <div className="card-body">
                  <div className="card-text">
                    <strong>Hiking Mt. Maculot | Hiking Series Vlog</strong>
                    <br />
                    Posted by: Bianca Mikaehla
                    <br />
                    <p>Uploaded: 2 years ago</p>
                  </div>
                  <div className="card-footer bg-light">
                    <button className={likeButtonClasses} onClick={handleLike}>
                      <span className="fa fa-thumbs-o-up" />
                      &nbsp;{likes}&nbsp;Likes
                    </button>
                    <button
                      className={dislikeButtonClasses}
                      onClick={handleDislike}
                    >
                      <span className="fa fa-thumbs-down" />
                      &nbsp;{dislikes}&nbsp;Dislikes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video 3 */}
          <div className="row row-cols-1 mb-3">
            <div className="col">
              <div className="card shadow-sm">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/5xkGflH-UiQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <div className="card-body">
                  <div className="card-text">
                    <strong>
                      A beginners hike in Nasugbu, Batangas | Mt.Talamitam
                    </strong>
                    <br />
                    Posted by: Coby Sarreal
                    <br />
                    <p>Uploaded: 1 year ago</p>
                  </div>
                  <div className="card-footer bg-light">
                    <button className={likeButtonClasses} onClick={handleLike}>
                      <span className="fa fa-thumbs-o-up" />
                      &nbsp;{likes}&nbsp;Likes
                    </button>
                    <button
                      className={dislikeButtonClasses}
                      onClick={handleDislike}
                    >
                      <span className="fa fa-thumbs-down" />
                      &nbsp;{dislikes}&nbsp;Dislikes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <Outlet />;
    }
  };

  // Weather API
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });
  // }, [lat, long]);

  // let params = new URLSearchParams({
  //   access_key: "cd51865404614b1ba4755834231802",
  //   q: [lat, long],
  // });

  // fetch(`http://api.weatherapi.com/v1/forecast.json?key=${params}`)
  //   .then((res) => res.json())
  //   .then(console.log);

  return !!isUserLoggedIn ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar setCurrentLink={setCurrentLink} />
          <main className="home-section col-10 col-md-10 col-lg-9 col-xl-10">
            <div className="home-dashboard d-flex justify-content-end align-items-center pt-3 pb-2 pe-4 mb-3 sticky-top">
              <h1 className="display-5 fw-bold text-light">Weather API</h1>
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
