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

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/XVIuoWBRV5c",
      title: "Video 1",
      initialLikes: 10,
      initialDislikes: 3,
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/MviwwvE5Vvw",
      title: "Video 2",
      initialLikes: 15,
      initialDislikes: 2,
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/5xkGflH-UiQ",
      title: "Video 3",
      initialLikes: 7,
      initialDislikes: 1,
    },
  ];

  const VideoCard = ({ video }) => {
    const [likes, setLikes] = useState(video.initialLikes);
    const [dislikes, setDislikes] = useState(video.initialDislikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleLike = () => {
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        setLikes(likes - 1);
        setLiked(false);
      }
    };

    const handleDislike = () => {
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      if (!disliked) {
        setDislikes(dislikes + 1);
        setDisliked(true);
      } else {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    };

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <div className="embed-responsive embed-responsive-16by9 mb-3">
            <iframe
              className="embed-responsive-item"
              title={video.title}
              src={video.src}
              allowFullScreen
            ></iframe>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className={`btn btn-outline-primary me-2 ${
                liked ? "active" : ""
              }`}
              onClick={handleLike}
            >
              <i className="bi bi-hand-thumbs-up me-1"></i>
              {likes} Likes
            </button>
            <button
              className={`btn btn-outline-danger ${disliked ? "active" : ""}`}
              onClick={handleDislike}
            >
              <i className="bi bi-hand-thumbs-down me-1"></i>
              {dislikes} Dislikes
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderOutlet = () => {
    if (currentLink == "/") {
      return (
        <>
          <div className="container my-5">
            <div className="row">
              {videos.map((video) => (
                <div className="col-md-4 my-3" key={video.id}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
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
