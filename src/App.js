import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Halaman1 from "./pages/Halaman1";
import Halaman2 from "./pages/Halaman2";
import Halaman3 from "./pages/Halaman3";
function App() {
  const [backColor, setBackColor] = useState();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: backColor || "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <Routes>
        <Route path="/" element={<Halaman1 />} />
        <Route
          path="halaman2"
          element={
            <Halaman2 changeBg={(backColor) => setBackColor(backColor)} />
          }
        />
        <Route path="halaman2/halaman3" element={<Halaman3 />} />
      </Routes>
    </div>
  );
}

export default App;
