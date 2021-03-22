import React, { Component } from "react";
import Project from "./project.jsx";
import { dataProjects } from "../../data/en/projects.jsx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export default class Projects extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="Projects">
        <h1>
          <AiOutlineFundProjectionScreen />{" "}
          <span className="pa3">Projects</span>
        </h1>
        {dataProjects.reduce((acc, val) => {
          acc.push(
            <Project
              key={acc.length}
              name={val.name}
              text={val.text}
              href={val.href}
              img={val.img}
              perks={val.perks}
            />
          );
          return acc;
        }, [])}
      </div>
    );
  }
}
