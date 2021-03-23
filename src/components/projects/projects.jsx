import React, { Component } from "react";
import Project from "./project.jsx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export default class Projects extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="Projects">
        <h1>
          <AiOutlineFundProjectionScreen /> {this.props.title}
          <span className="pa3"></span>
        </h1>
        {this.props.projects.reduce((acc, val) => {
          acc.push(
            <Project
              key={acc.length}
              id={acc.length}
              name={val.name}
              text={val.text}
              href={val.href}
              img={val.img}
              perks={val.perks}
              button={this.props.button}
            />
          );
          return acc;
        }, [])}
      </div>
    );
  }
}
