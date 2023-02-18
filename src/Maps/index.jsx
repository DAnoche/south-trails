import "./map.css";

function Maps() {
  return (
    <>
      <div className="container"></div>
      <div className="map-frame container-fluid">
        <iframe
          className="map-embedded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27845.972088023587!2d120.74849964906474!3d14.107087641299028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9bae83943f23%3A0x3f1089e964f9d499!2sMt.%20Talamitam!5e1!3m2!1sen!2sph!4v1676718392919!5m2!1sen!2sph"
        ></iframe>
      </div>
    </>
  );
}

export default Maps;
