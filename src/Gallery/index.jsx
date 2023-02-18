import React from "react";
import { useState, useEffect } from "react";
import "./gallery.css";

import Lightbox from "bs5-lightbox";

const options = {
  keyboard: true,
  size: "fullscreen",
};

document.querySelectorAll(".my-lightbox-toggle").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  })
);

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
      <h1>Hi im Gallery</h1>
    </>
  );
}

export default Gallery;
