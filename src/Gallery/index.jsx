import React from "react";
import { useState, useEffect } from "react";
import "./gallery.css";

function Gallery() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const Access_Key = "KDKl27FZneeQHL9aF2MF6q9Y3XHffCYmKmmJ2mau5fQ";

  // API request to Unplash
  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&per_page=20`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-10 form-control-sm"
              type="text"
              placeholder="Search"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button
              type="submit"
              onClick={Submit}
              className="btn bg-success text-white ms-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Display image */}
      <div className="col-lg-12 d-flex justify-content-evenly flex-wrap">
        {res.map((val) => {
          return (
            <div key={val.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <img
                className="w-100 h-100 img-fluid img-thumbnail"
                src={val.urls.small}
                alt={val.alt_description}
              />
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}

export default Gallery;
