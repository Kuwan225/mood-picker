import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1
        style={{
          fontSize: "48px",
          color: "white",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
