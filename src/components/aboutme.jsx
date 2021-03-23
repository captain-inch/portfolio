import React, { Component } from "react";
import profile from "./../media/img/profile2.png";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaRegPaperPlane,
  FaRegLightbulb,
} from "react-icons/fa";
import { CgBoy } from "react-icons/cg";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  highlightYears(txt) {
    const plaintxt = txt.split(RegExp("[0-9]{4}", "g"));
    const years = txt.matchAll(RegExp("[0-9]{4}", "g"));
    let ret = [];
    let index = 0;
    for (let year of years) {
      ret.push(plaintxt[index]);
      ret.push(
        <span className="year" key={ret.length}>
          {year}
        </span>
      );
      index++;
    }
    if (index < plaintxt.length) {
      ret.push(plaintxt[plaintxt.length - 1]);
    }
    return ret;
  }
  render() {
    return (
      <div id="AboutMe" className="w-100 pa3">
        <h1 className="tcem v-mid">
          <FaRegLightbulb /> <span className="pa3">{this.props.title}</span>
        </h1>
        <div className="flex flex-row-l flex-column contents-center tj">
          <div>
            {this.props.text.reduce((acc, val) => {
              acc.push(
                <div key={acc.length}>
                  <h2>
                    {val[0]}
                    <span>{val[1]}</span>
                  </h2>
                  {this.highlightYears(val[2])}
                </div>
              );
              return acc;
            }, [])}
          </div>

          <div className="pa2 flex content-center items-center">
            <img className="mw5 center" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}
