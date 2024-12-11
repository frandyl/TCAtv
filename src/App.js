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
      textColor: "white",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/08/Kwame-A-Plus-636x424.jpg",
      title: "I am not Fennec Okyere; I sleep with my gun – Kwame A-Plus",
      textColor: "white",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2021/09/Owusu-Bempah.jpeg",
      title: "Rev Owusu Bempah re-arrested as police prepare to press fresh charges",
      textColor: "white",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/12/John-Mahama-victory-speech2-636x424.jpg",
      title: "‘Victory for democracy’ – U.S. vows closer partnership with Ghana’s President-elect Mahama",
      textColor: "white",
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/08/akiyana-754x424.jpg",
      title: "I am still single because the cheating and stupidity from guys are too much – Akiyana",
      textColor: "white"
    },
    {
      url: "https://www.myjoyonline.com/wp-content/uploads/2024/12/93AAF895-119A-45D0-9B52-566206BB0840-636x424.jpeg",
      title: "Experience authentic Ghana: Your festive domestic adventure",
      textColor: "white"
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
          title="Jean Mensa must respect herself and leave EC – Joyce Bawah Mogtari"
          imageUrl="https://www.myjoyonline.com/wp-content/uploads/2024/12/Screenshot-2024-12-08-at-5.04.53%E2%80%AFpm-746x424.png"
          body="Joyce Bawah Mogtari, the special aide to President-Elect John Dramani Mahama, says she expects the chairperson of the Electoral Commission, Jean Mensa, to resign.
          Madam Mogtari says the current Commission, which is heavily partisan, needs a complete reset to restore integrity and credibility."
        />

        <Newsgrid
          title="Zambia’s ex-President Lungu barred from seeking re-election"
          imageUrl="https://www.myjoyonline.com/wp-content/uploads/2021/01/President-Edgar-Lungu-729x424.jpg"
          body="Zambia's top court has barred former President Edgar Lungu from standing for re-election in 2026.
          The Constitutional Court ruled that the 68-year-old politician had already served the maximum two terms allowed by law.
          Lungu was first elected president in January 2015 to serve the remaining 20 months of his predecessor's term."
        />

        <Newsgrid
          title="ECL’s F5 training shows industries how to go Next-Gen"
          imageUrl="https://www.myjoyonline.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-10-at-15.51.36-908x424.jpeg"
          body="Enterprise Computing Ltd. (ECL), a leading provider of IT solutions and consultancy services, recently held an exclusive workshop on F5 products, tailored for stakeholders across various industries.
          Themed Unlocking Next-Gen Web Application Delivery with F5, the training session offered participants an in-depth understanding of how F5 solutions are reshaping web application delivery, security, and performance."
        />

        <Newsgrid
          title="Police declare 3 persons wanted for Tepa warehouse, radio station break-in"
          imageUrl="https://www.myjoyonline.com/wp-content/uploads/2024/12/suspects-614x424.jpg"
          body="The Ghana Police Service has declared three individuals wanted in connection with a break-in at a private warehouse and a radio station in Tepa, Ashanti Region.
          The suspects identified are Akakpo, the Assembly Member for Akwasiase; George, the Assembly Member for Maabang; and a third individual identified as Muteed."
        />
      </div>

      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        SPORTS
      </h2>
      <div className="gridholder">
    
        <Newsgrid
          title="Real Madrid's stars stun at Gewiss Stadium"
          imageUrl="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1211%2Fr1426519_1296x518_5%2D2.jpg&w=944&h=377&scale=crop&cquality=80&location=origin&format=jpg"
          body=" Tuesday's 3-2 win over Atalanta showed that Carlo Ancelotti is starting to find a balance between Real Madrid's star quality and grit."
        />

        <Newsgrid
          title="Paris Saint-Germain 'can still be out' of UCL, Luis Enrique says"
          imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1211%2Fr1426522_1296x518_5%2D2.jpg&w=944&h=377&scale=crop&cquality=80&location=origin&format=jpg"
          body="Paris Saint-Germain boss Luis Enrique praised his side after their 3-0 win at RB Salzburg in the Champions League on Tuesday, but said they must improve if they want to stay in the competition"
        /> 
         <Newsgrid
        title="Nigerian basketball coach"
        imageUrl="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1210%2Fr1426069_1296x729_16%2D9.jpg&w=570&format=jpg"
        body="After finishing third at the last Basketball Africa League tournament in 2024, Nigeria's Rivers Hoopers want to go at least one better and reach the Final of next year's tournament... perhaps even win it."
      />

      <Newsgrid
        title="Was it a penalty – and what now for Darwin Nunez?"
        imageUrl="https://static01.nyt.com/athletic/uploads/wp/2024/12/10141904/GettyImages-2188648205-1024x683.jpg?width=770&quality=70&auto=webp"
        body="Liverpool are within touching distance of the Champions League last 16.A sixth straight win in the competition this season, secured through Mohamed Salah’s penalty, controversially awarded after a VAR check for a foul on Luis Diaz, tightened Arne Slot’s grip on first place in the league phase."
      />

      </div>

      <h2 class="font-bold text-2xl ml-auto mr-auto mt-5 w-3/5 md:text-4xl md:auto">
        ENTERTAINMENT
      </h2>
      <div className="gridholder">
        <Newsgrid
          title="Beyoncé and Jay-Z Make Surprise Appearance at ‘Mufasa’ Premiere Alongside Daughter Blue Ivy"
          imageUrl="https://www.hollywoodreporter.com/wp-content/uploads/2024/12/GettyImages-2188545093.jpg?crop=0px%2C129px%2C5070px%2C2837px&resize=1440%2C810"
          body="The family walked 'The Lion King' carpet in Hollywood together on Monday, just a day after Jay-Z was accused of raping a 13-year-old girl in a lawsuit, which he called a blackmail attempt"
        />

        <Newsgrid
          title="Lawyer cites 300 potential cases against Diddy"
          imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3a96/live/24042680-b652-11ef-b91c-592d64941fec.jpg.webp"
          body="A lawyer representing several alleged victims of Sean Diddy Combs says the potential number of civil legal cases against the musician is probably in the 300 range. Tony Buzbee told the BBC his team had received about 3,000 calls since he held a news conference calling for clients in October."
        />

        <Newsgrid
          title="28 Years Later trailer has fans guessing over Cillian Murphy's fate"
          imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/edc4/live/66df9fc0-b6fc-11ef-a70a-05fc3b931447.jpg.webp"
          body="It's been quite the wait, but the highly-anticipated follow-up to horror films 28 Days Later (2002) and 28 Weeks Later (2007) is out next summer, with fans getting their first taste of what's in store, from the trailer for 28 Years Later.Many were quick to spot what appeared to be a zombie incarnation of Cillian Murphy's bike courier Jim, from 28 Days Later, who survived an apocalypse against very steep odds."
        />

        <Newsgrid
          title="Regina Daniels celebrates as she bags Bachelor’s degree in Psychology"
          imageUrl="https://www.graphic.com.gh/images/2024/dec/10/Regina.jpg"
          body="Popular Nollywood actress Regina Daniels has earned a bachelor’s degree in Psychology from Universidad Azteca, Mexico.The actress shared the news on Monday via her Instagram account, posting a video that captured the memorable moment she was conferred with the degree."
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
