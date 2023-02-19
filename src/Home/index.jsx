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
  // Video likes/dislikes
  const videoUrls = [
    "https://www.youtube.com/embed/XVIuoWBRV5c",
    "https://www.youtube.com/embed/MviwwvE5Vvw",
    "https://www.youtube.com/embed/5xkGflH-UiQ",
  ];

  const Video = ({ src, initialLikes, initialDislikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);

    const handleLike = () => {
      setLikes((prevLikes) => prevLikes + 1);
    };

    const handleDislike = () => {
      setDislikes((prevDislikes) => prevDislikes + 1);
    };

    return (
      <div>
        <iframe src={src} width="560" height="315" title="video" />
        <div>
          <button onClick={handleLike}>Like {likes}</button>
          <button onClick={handleDislike}>Dislike {dislikes}</button>
        </div>
      </div>
    );
  };

  const videos = [
    {
      src: "https://www.youtube.com/embed/XVIuoWBRV5c",
      initialLikes: 10,
      initialDislikes: 2,
    },
    {
      src: "https://www.youtube.com/embed/MviwwvE5Vvw",
      initialLikes: 5,
      initialDislikes: 1,
    },
    {
      src: "https://www.youtube.com/embed/5xkGflH-UiQ",
      initialLikes: 7,
      initialDislikes: 3,
    },
  ];

  const renderOutlet = () => {
    if (currentLink == "/") {
      return (
        <>
          <div>
            {videos.map((video, index) => (
              <Video
                key={index}
                src={video.src}
                initialLikes={video.initialLikes}
                initialDislikes={video.initialDislikes}
              />
            ))}
          </div>
          {/* First try */}
          {/* Video 1 */}
          {/* <div className="row row-cols-1 mb-3">
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
          </div> */}
          {/* Video 2 */}
          {/* <div className="row row-cols-1 mb-3">
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
          </div> */}
          {/* Video 3 */}
          {/* <div className="row row-cols-1 mb-3">
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
          </div> */}
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
