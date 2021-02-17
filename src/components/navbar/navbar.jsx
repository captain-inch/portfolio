import { Component } from "react";
import NavListItem from "./navListItem.jsx";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuEnabled: false,
    };
  }
  menuClick = (e, ref, route) => {
    // console.log(ref);
    if (this.state.menuEnabled) {
      this.setState({ menuEnabled: false });
    }
    try {
      ref.scrollIntoView({ behavior: "smooth" }); // SCROLL
    } catch (err) {
      console.warn("Unable to scroll to, ref link is probably broken");
      // console.log(err);
    }
    // this.props.callback(route);
  };

  expendMenu = () => {
    this.setState({ menuEnabled: !this.state.menuEnabled });
    // console.log("expending", this.state.menuEnabled);
  };

  render() {
    return (
      <nav
        id="navbar"
        className="bgt1 bgblur z-2 absolute"
        style={{ position: "fixed", top: 0 }}
      >
        <div className="pt2 flex flex-column-m justify-between-l">
          {/* <a href="#home" className="flex-m justify-center-m">
            <img
              className="mr0-m ml0-m h3-m"
              src={logo}
              alt="logo"
              onClick={(e) =>
                this.menuClick(e, document.getElementById("root"), "home")
              }
            ></img>
          </a> */}
          <div
            className="hamburger db dn-ns self-center pa3"
            style={{ marginLeft: "auto" }}
            id="expandmenu"
            onClick={this.expendMenu}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-three-dots-vertical pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
          </div>
          {/*================= DESKTOP MENU =================*/}
          <ul className="dn mt2-m mb3-m list justify-around tc flex-ns pa0 self-center-l">
            {this.props.links.reduce((acc, link) => {
              acc.push(
                <NavListItem
                  key={acc.length}
                  text={link.text}
                  route={link.route}
                  refprop={this.props.refs[acc.length]}
                  active={this.props.active}
                  callback={this.menuClick}
                  className="tc1 pointer link dim f4 ma3-l mb0-l mt0-l"
                />
              );
              return acc;
            }, [])}
          </ul>
        </div>
        {/*================= MOBILE MENU =================*/}
        {this.state.menuEnabled ? (
          <ul className="dn-ns list mb0 justify-around vh-50 tc v-mid flex flex-column flex-row-ns ">
            {this.props.links.reduce((acc, link) => {
              acc.push(
                <NavListItem
                  key={acc.length}
                  text={link.text}
                  route={link.route}
                  refprop={this.props.refs[acc.length]}
                  active={this.props.active}
                  callback={this.menuClick}
                  className="tc1 pointer link dim f3"
                />
              );
              return acc;
            }, [])}
          </ul>
        ) : null}
      </nav>
    );
  }
}
