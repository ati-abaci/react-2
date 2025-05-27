import React from "react";

export default function Card({ image, cardTitle, cardDescription, button }) {
  return (
    <div className="card m-5">
      <img
        className="card-img-top  mx-auto"
        style={{
          height: "auto",
          width: "400px",
          paddingTop: "15px",
          borderRadius: "30px",
        }}
        src={image}
        alt="Card image cap"
      />

      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <a href={button.url} className="btn btn-primary">
          {button.label}
        </a>
      </div>
    </div>
  );
}
