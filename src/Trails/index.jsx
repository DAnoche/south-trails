import React, { Component } from "react";
import { Link } from "react-router-dom";

function Trails() {
  const mtBatulaoLink =
    "https://www.google.com/maps/place/Mount+Batulao+Peak,+Batangas/@14.0378667,120.806075,15z/data=!4m6!3m5!1s0x33bd9eb53e3c3949:0x45eae461bc85fab6!8m2!3d14.0378669!4d120.806075!16s%2Fg%2F11fmzcccl2";
  const mtMaculotLink =
    "https://www.google.com/maps/place/Mount+Maculot,+Cuenca,+Batangas/@13.9212692,121.0496571,16z/data=!4m9!1m2!2m1!1smount+maculot,+cuenca,+batangas!3m5!1s0x33bd0d3dc3eda773:0xa89b0a11060939eb!8m2!3d13.9173766!4d121.0478433!16s%2Fg%2F11bc6wx9bp";
  const mtTalamitamLink =
    "https://www.google.com/maps/place/Mt.+Talamitam,+Barangay,+Nasugbu,+Batangas/@14.1078543,120.7600194,17z/data=!4m6!3m5!1s0x33bd9bae83943f23:0x3f1089e964f9d499!8m2!3d14.1078543!4d120.7600194!16s%2Fg%2F11h3z5czbs";

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="thumbnail"
              src={"/images/batulao.jpg"}
              alt="Batulao"
            />

            <div className="card-body">
              <p className="card-text">
                <strong>Batulao Trail</strong>
                <br />
                Nasugbu, Batangas
                <br />
                <div className="my-2">
                  Difficulty:&nbsp;
                  <span className="text-warning fa fa-star" />
                  <span className="text-warning fa fa-star" />
                  <span className="text-warning fa fa-star" />
                  <span className="text-warning fa fa-star-half-empty" />
                  <span className="text-warning fa fa-star-o" />
                </div>
                <p>
                  Verdant, rugged mountain with a day hike to the top, offering
                  dramatic panoramas of the region.
                </p>
                <p className="h6">
                  Latitude: 14.037639
                  <br />
                  Longitude: 120.806007
                </p>
              </p>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={() => openInNewTab(mtBatulaoLink)}
                  >
                    Visit Map <span className="fa fa-external-link" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trails;
