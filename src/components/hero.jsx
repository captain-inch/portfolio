import React, { Component } from "react";
import { gsap } from "gsap";
const arrowcolor = "#2b257c";

export default class Hero extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="Hero" className="w-100 vh-100 relative">
        <div className="flex vh-100 flex-wrap justify-center">
          <div className="HeroCoverText w-100 self-center mt5 f1-ns f2 pa3 ">
            {this.props.text[0]}{" "}
            <span id="CoverName" className="b tracked tcem">
              {this.props.text[1]}
            </span>
            , <br className="dn dib-l" />
            {this.props.text[2]}
          </div>
          <a
            className="knowmore self-end ph3 mb3 pointer flex flex-row tc b f4 f3-l link dim br-pill ba bw2 ph3 pv2 mb2 dib tcem"
            onClick={() =>
              this.props.target.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {this.props.button}
          </a>
        </div>
      </div>
    );
  }
}
