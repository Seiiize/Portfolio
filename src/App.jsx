import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./app.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Chafik Sofiane CHIKH";
  });
  return (
    <div className="App" style={{ backgroundColor: "#e0e0e0" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        integrity="sha512-A7AYb/ebgn7U3+G9g5eZj1M+1rTglV9kYO2HtYpOC16PAwVPQ+N9bVv3UO1D6lJ8bHHxMLYkQ/bmFV8HdFlHVA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <Navbar />
      <Home />
    </div>
  );
}

export default App;
