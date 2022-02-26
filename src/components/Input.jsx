import React from "react";

const Input = (props) => {
  const { changeValue } = props;

  return (
    <div>
      <input
        onChange={(newValue) => changeValue(newValue.target.value)}
        type="text"
        placeholder="Masukan nama kamu"
        style={{
          width: "804px",
          height: "56px",
          paddingLeft: "25px",
          outlineWidth: "0",
          borderStyle: "none",
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          fontSize: "25px",
        }}
      />
    </div>
  );
};

export default Input;
