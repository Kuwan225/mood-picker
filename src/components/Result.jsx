import React from "react";

const Result = () => {
  const name = localStorage.getItem("name");

  return (
    <div>
      <h1
        style={{
          fontSize: "48px",
          color: "white",
          textAlign: "center",
          backgroundColor: "#36E85D",
          padding: "5px 10px",
          borderRadius: "10px",
        }}
      >
        Hello, {name} semoga harimu indah:)
      </h1>
    </div>
  );
};

export default Result;
