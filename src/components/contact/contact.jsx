import React, { Component } from "react";
import { BsEnvelope, BsPersonCheck } from "react-icons/bs";
import { RiCake2Line, RiMessage2Line } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { ImGithub } from "react-icons/im";
export default class Contact extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="Contact" className="f4-l f5-m tc1">
        <h1>
          <RiMessage2Line />
          <span className="pa3">{this.props.title}</span>
        </h1>
        <div className="flex flex-wrap justify-around items-center flex-row-l">
          {this.props.contact.reduce((acc, val) => {
            acc.push(
              <div
                className="ma2 flex flex-column items-center"
                key={acc.length}
              >
                {val.icon}
                <div className="ph2 ph0-ns ma2">{val.text}</div>
              </div>
            );
            return acc;
          }, [])}
        </div>
        <div className="pa2 justify-around w5 center flex flex-row">
          {this.props.social.reduce((acc, val) => {
            acc.push(
              <div
                className="pa2 justify-around w5 center flex flex-row"
                key={acc.length}
              >
                <a href={val.href}>
                  {val.icon}
                  <p className="ph2 ph0-ns ma2">{val.text}</p>
                </a>
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
}
