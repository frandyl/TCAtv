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
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/12/Akufo-Addo_national_advice_polls_eve-602x424.jpg",
      title: "Akufo-Addo’s governance was darkest period in Ghana’s history – President-elect Mahama",
      textColor: "white",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-09-at-21.25.18-763x424.jpeg" ,
      title: "The great elephant has been slaughtered mercilessly – Asiedu Nketia",
      textColor: "black",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/08/Kwame-A-Plus-636x424.jpg",
      title: "I am not Fennec Okyere; I sleep with my gun – Kwame A-Plus",
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
    width: "100%",
    height: "500px",
    margin: "0 auto",
    position: "center",
  };

  const updateContainerHeight = () => {
    const screenWidth = window.innerWidth;

    // Adjust the height based on the screen width
    if (screenWidth <= 768) {
      containerStyles.height = "300px"; // You can set the desired height for smaller screens
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
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentwidth={2000} />
        </div>
      </div>
      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        HEADLINES
      </h2>
      <ImageGrid />
      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        NEWS
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

      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        SPORTS
      </h2>
      <div className="gridholder">
      <Newsgrid
          title="Nigerian basketball coach"
          imageUrl="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1210%2Fr1426069_1296x729_16%2D9.jpg&w=570&format=jpg"
          body="After finishing third at the last Basketball Africa League tournament in 2024, Nigeria's Rivers Hoopers want to go at least one better and reach the Final of next year's tournament... perhaps even win it."
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

      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
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
      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        VIDEOS
      </h2>
      <div className="vidcar">
        <Vidcar />
      </div>
      <div class="bg-black h-96 w-full flex items-center justify-between ">
        <img src={tca} class=" w-24 md: ml-10  w-10 " />
        <h2 class="font-bold text-cyan-50 text-xl   md:text-xl ml-5">
          About Us
          <p class="font-normal text-sm text-left border-solid border-2 border-transparent w-2/4 md:m-5 ">
            TCA tv is a fast rising television channel which delivers a lot of
            news,sports and Entertainment news headlines and all jibli
          </p>
        </h2>
        <h2 class="font-bold text-cyan-50 text-xl  md: mr-2/4 ">Follow Us</h2>
      </div>
    </>
  );
}

export default App;
