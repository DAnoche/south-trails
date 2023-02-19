import LeftNavBar from "../Left-sidenav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [currentLink, setCurrentLink] = useState("/");
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
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/XVIuoWBRV5c",
      title: "Mt. Batulao, Nasugbu, Batangas, Philippines | Trail Running",
      uploader: "Posted by: Nomad Terra Crawlers TV",
      uploadDate: "Uploaded: 1 year ago",
      initialLikes: 77,
      initialDislikes: 0,
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/MviwwvE5Vvw",
      title: "Hiking Mt. Maculot | Hiking Series Vlog",
      uploader: "Posted by: Bianca Mikaehla",
      uploadDate: "Uploaded: 2 years ago",
      initialLikes: 69,
      initialDislikes: 0,
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/5xkGflH-UiQ",
      title: "A beginners hike in Nasugbu, Batangas | Mt.Talamitam",
      uploader: "Posted by: Coby Sarreal",
      uploadDate: "Uploaded: 1 year ago",
      initialLikes: 197,
      initialDislikes: 0,
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
      <div className="card shadow-sm mb-3">
        <iframe
          className="embed-responsive-item"
          width="100%"
          height="500px"
          title={video.title}
          src={video.src}
          allowFullScreen
        ></iframe>
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <p className="mb-4">
            {video.uploader} <br /> {video.uploadDate}
          </p>
          <div className="embed-responsive embed-responsive-16by9 mb-3"></div>
          <div className="d-flex justify-content-start">
            <button
              className={`btn btn-outline-primary me-2 ${
                liked ? "active" : ""
              }`}
              onClick={handleLike}
            >
              <span className="fa fa-thumbs-up me-1" />
              {likes} Likes
            </button>
            <button
              className={`btn btn-outline-danger ${disliked ? "active" : ""}`}
              onClick={handleDislike}
            >
              <span className="fa fa-thumbs-down me-1" />
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
          <div className="container">
            <div className="row row-cols-1 mb-3"></div>
            <div className="col">
              {videos.map((video) => (
                <div key={video.id}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else {
      return <Outlet />;
    }
  };

  // Weather API
  const [weather, setWeather] = useState({
    long: "",
    lat: "",
    temp: "",
    condition: "",
    icon: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setWeather({
        ...weather,
        long: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, []);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c5f9b56eef2b40a180b55248231902&q=${weather.lat},${weather.long}`
    )
      .then((res) => res.json())
      .then((res) =>
        setWeather({
          ...weather,
          temp: res.current.temp_c,
          icon: res.current.condition.icon,
          condition: res.current.condition.text,
        })
      );
  }, [weather.lat, weather.long]);
  console.log(weather);

  return !!isUserLoggedIn ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar setCurrentLink={setCurrentLink} />
          <main className="home-section col-10 col-md-10 col-lg-9 col-xl-10">
            <div className="home-dashboard d-flex justify-content-end align-items-center pt-3 pb-2 pe-4 mb-3 sticky-top">
              <h1 className="display-5 fw-bold text-light">
                {weather.temp} &#176;c&nbsp;{weather.condition}&nbsp;
                <img src={`https:${weather.icon}`} />
              </h1>
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
