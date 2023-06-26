import "./App.css";
import "./button.css";
import "./diffbuton.css";
import ImageSlider from "./ImageSlider.js";
import Newsgrid from "./Newsgrid.js";
import "./containerb.css";
import "./gridholder.css";
import ImageGrid from "./ImageGrid";
import tca from "./tca.png";

function App() {
  const slides = [
    {
      url: "http://localhost:3000/image-1.jpg",
      title: "beach",
      textColor: "red",
    },
    {
      url: "http://localhost:3000/image-2.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "http://localhost:3000/image-3.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "http://localhost:3000/image-4.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "http://localhost:3000/image-6.jpg",
      title: "This Is the news Headlines of the day",
    },
    {
      url: "http://localhost:3000/image-7.jpg",
      title: "This Is the news Headlines of the day",
    },
  ];

  const containerStyles = {
    width: "fit",
    height: "500px",
    margin: "0 auto",
    position: "center",
  };

  return (
    <>
      <div className="App" style={{ display: "flex" }}>
        <button className="diffbuton">
          <img src={tca} width={50} height={45} />
        </button>
        <div className="bcontainer">
          <button className="buttonstyle">News</button>
          <button className="buttonstyle">Sports</button>
          <button className="buttonstyle">Entertainment</button>
          <button className="buttonstyle">Travel</button>
          <button className="buttonstyle">Culture</button>
        </div>
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={2000} />
      </div>
      <h2 class="font-regular text-5xl ml-60">HEADLINES</h2>
      <ImageGrid />
      <h2 class="font-regular text-5xl ml-60">NEWS</h2>
      <div className="gridholder">
        <Newsgrid
          title="News Title"
          imageUrl="http://localhost:3000/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="http://localhost:3000/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="http://localhost:3000/image-3.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="http://localhost:3000/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />
      </div>
    </>
  );
}

export default App;
