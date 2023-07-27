import "./App.css";
import ImageSlider from "./ImageSlider.js";
import Newsgrid from "./Newsgrid.js";
import "./containerb.css";
import "./gridholder.css";
import Navbar from "./navbar.js";
import ImageGrid from "./ImageGrid";
import tca from "./tca.png";
import Vidcar from "./Vidcar.js";

function App() {
  const slides = [
    {
      url: "https://tcatvgh-5b603.web.app/image-1.jpg",
      title: "beach",
      textColor: "red",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-2.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-3.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-4.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-5.jpg",
      title: "This Is the news Headlines of the day",
      textColor: "red",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-6.jpg",
      title: "This Is the news Headlines of the day",
    },
    {
      url: "https://tcatvgh-5b603.web.app/image-7.jpg",
      title: "This Is the news Headlines of the day",
    },
  ];

  const containerStyles = {
    width: "fit",
    maxHeight: "fit",
    height: "500px",
    margin: "0 auto",
    position: "center",
  };

  const updateContainerHeight = () => {
    const screenWidth = window.innerWidth;

    // Adjust the height based on the screen width
    if (screenWidth <= 768) {
      containerStyles.height = "200px"; // You can set the desired height for smaller screens
    } else if (screenWidth <= 1024) {
      containerStyles.height = "400px"; // You can set the desired height for medium screens
    } else {
      containerStyles.height = "500px"; // Default height for larger screens
    }
  };

  // Call the function initially to set the height based on the current screen size
  updateContainerHeight();

  // Add an event listener to update the container height when the window is resized
  window.addEventListener("resize", updateContainerHeight);
  return (
    <>
      <div className="App"></div>
      <Navbar />
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={2000} />
      </div>
      <h2 class="font-bold text-4xl ml-auto mr-auto mt-5 w-3/5">HEADLINES</h2>
      <ImageGrid />
      <h2 class="font-bold text-4xl ml-auto mr-auto mt-5 w-3/5">NEWS</h2>
      <div className="gridholder">
        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-3.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />
      </div>

      <h2 class="font-bold text-4xl ml-auto mr-auto mt-5 w-3/5">SPORTS</h2>
      <div className="gridholder">
        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-3.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />
      </div>

      <h2 class="font-bold text-4xl ml-auto mr-auto mt-5 w-3/5">
        ENTERTAINMENT
      </h2>
      <div className="gridholder">
        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-3.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />

        <Newsgrid
          title="News Title"
          imageUrl="https://tcatvgh-5b603.web.app/image-1.jpg"
          body="This wil be the text that will be shown under the newscards find a way to not make them change heights after creating them"
        />
      </div>
      <h2 class="font-bold text-4xl ml-auto mr-auto mt-5 w-3/5">VIDEOS</h2>
      <div className="vidcar">
        <Vidcar />
      </div>
      <div class="bg-black h-96 w-screen flex items-center justify-between ">
        <img src={tca} class=" w-24 md: ml-5  w-10" />
        <h2 class="font-bold text-cyan-50 text-xl   md:text-xl ml-5">
          About Us
          <p class="font-normal text-sm text-left border-solid border-2 border-transparent w-2/4 md:m-5 ">
            TCA tv is a fast rising television channel which delivers a lot of
            news,sports and Entertainment news headlines and all jibli
          </p>
        </h2>
        <h2 class="font-bold text-cyan-50 text-xl  md: mr-5">Follow Us</h2>
      </div>
    </>
  );
}

export default App;
