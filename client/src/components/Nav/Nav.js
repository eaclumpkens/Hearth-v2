import React, { Component } from "react";
import "./Nav.css";
import { MenuItems } from "./MenuItem";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import GoogleLogout from "../GoogleAuth/GoogleLogout/GoogleLogout";

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <Logo />
        <div className="menu-icon" onClick={this.handleClick} pullRight>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <a className={item.name} href={item.url}>
                  {item.title}
                </a>
              </div>
            );
          })}

          <GoogleLogout />
          {/* <SearchBar /> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
