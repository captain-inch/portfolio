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
  componentDidMount() {}
  render() {
    return (
      <div id="AboutMe" className="w-100 pa3">
        <h1 className="tcem v-mid">
          <FaRegLightbulb /> <span className="pa3">About me</span>
        </h1>
        <div className="flex flex-row-l flex-column contents-center tj">
          <div>
            <h2>
              <CgBoy /> <span className="pa3">Youth</span>
            </h2>
            Born in 93 in Toulouse, I grew up watching my older brother
            discovering the 2000's internet era. During my teenage years, I
            started discovering web programming and really enjoyed its logic.
            <h2>
              <FaUserGraduate /> <span className="pa3">Engineering</span>
            </h2>
            After graduating from high school in{" "}
            <span className="year">2011</span>, I enrolled for a mechanical
            engineering degree. The choice of my major was not easy for me, as I
            was balancing between mechanical engineering and IT, but in the end
            I found out by then that Mech. Engineering combined both of my
            interests : programming (through numerical analysis and Finite
            Element Analysis) and mechanics. During my degree, I managed to
            learn to code in Python, Java, and to extend my knownledge in web
            development. I graduated from Polytech Montpellier with a M.Eng in{" "}
            <span className="year">2016</span>
            <h2>
              <FaRegPaperPlane />
              <span className="pa3">Aeronautics</span>
            </h2>
            Alongside with my engineering degree, I started taking flight
            lessons. I enjoyed the freedom that flying gave me. In 2015, I
            managed to complet my PPL (Private Pilot Licence). In{" "}
            <span className="year">2018</span>, while working as Numerical
            Simulation engineer in Automotive in Toulouse, I applied at Air
            France for their cadet program and managed to enroll for two years
            of professionnal pilot training across France and also Florida. I
            obtained my CPL (Commercial Pilot Licence) in late
            <span className="year"> 2020</span>.
            <h2>
              <FaLaptopCode /> <span className="pa3">Web development</span>
            </h2>
            At the end of my program, I took again some online classes for
            several months, in order to acquire precise knownledge about the
            latests technologies and frameworks used. The fact that the course
            was remote gave me a lot of freedom to deeply understand - by myself
            - the key aspects of full-stack web development : understanding the
            need, defining the outline and the structure, using frameworks and
            APIs, creating a dedicated server to fetch data, using databases,
            etc ...
          </div>
          <div className="pa2 flex content-center items-center">
            <img className="mw5 center" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}
