import "./App.css";
import "./button.css";
import "./diffbuton.css";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import tca from "./tca.png";

function App() {
  const slide1Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\DEout.jpg"
        alt="German"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide2Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\fli-launch.jpg"
        alt="white"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide3Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\iwind.jpg"
        alt="blue"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide4Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\NIKE-CAMPAIGNGB.jpg"
        alt="green goo"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide5Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\pivotal-statement.jpg"
        alt="blackwhite"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide6Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\tiedye.jpg"
        alt="tiedye"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );

  const slide7Template = () => (
    <figure className="img-container">
      <img
        src="src\imagefolder\wpfd.jpg"
        alt="press"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        This is Hdeadline , major news
      </figcaption>
    </figure>
  );
  return (
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

      <div className="carousel-sample">
        <CarouselComponent cssClass="default-carousel">
          <CarouselItemsDirective>
            <CarouselItemDirective>
              template={slide1Template}
              template={slide2Template}
              template={slide3Template}
              template={slide4Template}
              template={slide5Template}
              template={slide6Template}
              template={slide7Template}
            </CarouselItemDirective>
          </CarouselItemsDirective>
        </CarouselComponent>
      </div>
    </div>
  );
}

export default App;
