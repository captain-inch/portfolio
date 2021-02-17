import React, { Component } from "react";
import Age from "./age.jsx";
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
          <span className="pa3">Contact</span>
        </h1>
        <div className="flex flex-wrap justify-around items-center flex-row-l">
          <div className="ma2 flex flex-column items-center">
            <BsPersonCheck size={40} />
            <p className="ph2 ph0-ns ma2">Etienne Pousse</p>
          </div>
          <div className="ma2 flex flex-column items-center">
            <RiCake2Line size={40} />
            <Age className="tc ph2 ph0-ns ma2" /> {/* ====== LOCATION ====== */}
          </div>
          <div className="ma2 flex flex-column items-center">
            <BiMapPin size={40} />
            <p className="ph2 ph0-ns ma2">Toulouse, France</p>
          </div>{" "}
          <div className="ma2 flex flex-column items-center">
            <BsEnvelope size={40} />
            <p className="ph2 ph0-ns ma2">etiennepousse@live.fr</p>
          </div>
          <div className="ma2 flex flex-column items-center">
            <FiPhone size={40} />
            <p className="ph2 ph0-ns ma2"> (+33) 688 182 904</p>
          </div>
        </div>
        <div className="pa2 justify-around w5 center flex flex-row">
          <a href="https://github.com/captain-inch">
            <ImGithub size={60} className="grow" />
          </a>
          <a href="mailto:etiennepousse@live.fr">
            <BsEnvelope size={60} className="grow" />
          </a>
        </div>
      </div>
    );
  }
}
