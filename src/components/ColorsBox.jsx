import React from "react";
import "./css/hover.css";

const ColorsBox = (props) => {
  const { changeBg } = props;
  const boxColors = [
    "red",
    "white",
    "greenYellow",
    "yellow",
    "black",
    "pink",
    "salmon",
    "aqua",
    "lightSkyBlue",
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "375px",
          height: "375.97px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "300px",
          margin: "50px auto",
        }}
      >
        {boxColors.map((el, idx) => {
          return (
            <div
              onClick={() => changeBg(el)}
              key={idx}
              className="button"
              style={{
                backgroundColor: el,
                width: "96.69px",
                height: "96.69px",
                border: "5px solid black",
                cursor: "pointer",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsBox;
