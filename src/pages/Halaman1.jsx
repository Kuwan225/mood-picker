import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Home = () => {
  const [values, setValues] = useState();

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Title title={"What's your name?"} />
        <div style={{ display: "flex" }}>
          <Input changeValue={(values) => setValues(values)} />
          <Link to="/halaman2">
            <Button
              type="primary_radius"
              label={"Save"}
              klikButton={() =>
                localStorage.setItem("name", values || "no name")
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
