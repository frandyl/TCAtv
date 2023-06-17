import "./App.css";
import "./button.css";
import "./diffbuton.css";
import ImageSlider from "./ImageSlider.js";
import tca from "./tca.png";

function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    { url: "http://localhost:3000/image-6.jpg", title: "italy" },
    { url: "http://localhost:3000/image-7.jpg", title: "italy" },
  ];

  const containerStyles = {
    width: "fit",
    height: "400px",
    margin: "0 auto",
    position: "center",
  };

  return (
    <>
      <div className="App" style={{ display: "flex" }}>
        <button className="diffbuton">
          <img src={tca} imagewidth={45} height={45} />
        </button>
        <button className="buttonstyle" style={{ marginLeft: "auto" }}>
          News
        </button>
        <button className="buttonstyle">Sports</button>
        <button className="buttonstyle">Entertainment</button>
        <button className="buttonstyle">Travel</button>
        <button className="buttonstyle">Culture</button>
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
}

export default App;
