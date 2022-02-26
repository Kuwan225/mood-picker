import React from "react";
import Result from "../components/Result";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Halaman3 = () => {
  return (
    <div>
      <Result />
      <div
        className="buttonLast"
        style={{
          width: "550px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Link to="/halaman2">
          <Button type="secondary" label="Back" />
        </Link>
        <Link to="/">
          <Button type="primary" label="Back to home" />
        </Link>
      </div>
    </div>
  );
};

export default Halaman3;
