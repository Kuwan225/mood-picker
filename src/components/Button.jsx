import React from "react";
import "./css/hover.css";

const Button = (props) => {
  const { type, klikButton } = props;

  const buttonType = {
    primary_radius: {
      borderBottomRightRadius: "50px",
      borderTopRightRadius: "50px",
      backgroundColor: "#36E85D",
      color: "white",
    },
    primary: {
      borderRadius: "10px",
      color: "white",
      border: "3px solid black",
      backgroundColor: "#36E85D",
    },
    secondary: {
      borderRadius: "10px",
      backgroundColor: "white",
      color: "black",
    },
  };
  return (
    <div>
      <button
        onClick={klikButton}
        className="button"
        style={{
          width: "220px",
          height: "58px",
          backgroundColor: buttonType[type].backgroundColor,
          padding: "8px 20px",
          borderRadius: buttonType[type].borderRadius,
          borderBottomRightRadius:
            buttonType[type].borderBottomRightRadius || "10px",
          borderTopRightRadius: buttonType[type].borderTopRightRadius || "10px",
          borderStyle: "none",
          color: buttonType[type].color,
          fontWeight: "bold",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
