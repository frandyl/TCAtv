import { Component } from "react";
import tca from "./tca.png";
import menu from "./menu.png";
import cancel from "./cancel.png";
import "./navstyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    const { clicked } = this.state;
    return (
      <>
        <nav>
          <a href="index.html">
            <img src={tca} width={40} />
          </a>

          <div>
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
              <li class="text-3xs font-bold text-white">
                <a href="index.html" class="underline-animation">
                  NEWS
                </a>
              </li>
              <li class="text-3xs font-bold text-white">
                <a href="index.html" class="underline-animation">
                  SPORTS
                </a>
              </li>
              <li class="text-3xs font-bold text-white">
                <a href="index.html" class="underline-animation">
                  ENTERTAINMENT
                </a>
              </li>
              <li class="text-3xs font-bold text-white">
                <a href="index.html" class="underline-animation">
                  TRAVEL
                </a>
              </li>
              <li class="text-3xs font-bold text-white">
                <a href="index.html" class="underline-animation">
                  CULTURE
                </a>
              </li>
            </ul>
          </div>
          <div id="mobile">
            <img
              id="bar"
              className={this.state.clicked ? "menu" : "cancel"}
              src={this.state.clicked ? menu : cancel}
              width={20}
              onClick={this.handleClick}
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
