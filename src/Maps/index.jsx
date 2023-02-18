import React, { useState } from "react";
import "./map.css";

function Maps() {
  const showHideMap = ["batulao", "maculot", "talamitam"];
  const [showMap, setShowMap] = useState("");
  const [showImage, setShowImage] = useState(true);

  const handleSelect = (event) => {
    const selectedMap = event.target.value;
    setShowMap(selectedMap.toLowerCase());
    setShowImage(false);
  };

  return (
    <>
      <div>
        <select
          className="form-select form-select-lg ms-2 mb-3 w-100"
          ariaLabel="Default select example"
          onChange={handleSelect}
        >
          <option selected>Choose Map</option>
          <option value="MT. BATULAO">MT. BATULAO</option>
          <option value="MT. MACULOT">MT. MACULOT</option>
          <option value="MT. TALAMITAM">MT. TALAMITAM</option>
        </select>
      </div>

      {showImage && (
        <div className="text-center">
          <img
            className="map-image"
            src={"/images/map-marker.png"}
            alt="Map-icon"
          />
        </div>
      )}

      {/* BATULAO */}
      <div className={`${showMap === "mt. batulao" ? "" : "d-none"}`}>
        <div className="map-frame container-fluid">
          <div className="lead">
            <p>Address: Nasugbu, Batangas</p>
            <p>Latitude: 14.037639 | Longitude: 120.806007</p>
          </div>
          <iframe
            className="map-embedded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23422.686142968792!2d120.79585053675069!3d14.03771345205498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9eb53e3c3949%3A0x45eae461bc85fab6!2sMount%20Batulao%20Peak!5e1!3m2!1sen!2sph!4v1676720873673!5m2!1sen!2sph"
          ></iframe>
        </div>
      </div>
      {/* MACULOT */}
      <div className={` ${showMap === "mt. maculot" ? "" : "d-none"}`}>
        <div className="map-frame container-fluid">
          <div className="lead">
            <p>Address: Cuenca, Batangas</p>
            <p>Latitude: 13.917177 | Longitude: 121.047819</p>
          </div>
          <iframe
            className="map-embedded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11717.523107026753!2d121.04342965189862!3d13.91627266067799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0d3dc3eda773%3A0xa89b0a11060939eb!2sMount%20Maculot!5e1!3m2!1sen!2sph!4v1676720971742!5m2!1sen!2sph"
          ></iframe>
        </div>
      </div>
      {/* TALAMITAM */}
      <div className={`${showMap === "mt. talamitam" ? "" : "d-none"}`}>
        <div className="map-frame container-fluid">
          <div className="lead">
            <p>Address: Nasugbu, Batangas</p>
            <p>Latitude: 14.107750 | Longitude: 120.760019</p>
          </div>

          <iframe
            className="map-embedded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27845.972088023587!2d120.74849964906474!3d14.107087641299028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9bae83943f23%3A0x3f1089e964f9d499!2sMt.%20Talamitam!5e1!3m2!1sen!2sph!4v1676718392919!5m2!1sen!2sph"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Maps;
