import React from "react";
import Button from "../components/Button";
import ColorsBox from "../components/ColorsBox";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Halaman2 = (props) => {
  const { changeBg } = props;
  return (
    <div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <div>
          <Title title={"Select your favorite color"} />
          <ColorsBox changeBg={changeBg} />
        </div>
        <div
          style={{
            width: "550px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Button type="secondary" label={"Back"} />
          </Link>
          <Link to="halaman3">
            <Button type="primary" label={"Finnish"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Halaman2;
