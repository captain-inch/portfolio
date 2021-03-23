import React, { Component } from "react";
import Skill from "./skill.jsx";
import { GiSkills } from "react-icons/gi";
export default class Skills extends Component {
  componentDidMount() {}
  render() {
    return (
      <article id="Skills">
        <h1>
          <GiSkills /> <span className="pa3">{this.props.title}</span>
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-around w-80-ns">
            {this.props.skills.reduce((acc, val) => {
              acc.push(
                <Skill
                  name={val.name}
                  rank={val.rank}
                  key={acc.length}
                  class="tcem ma3"
                  classstars="tcem"
                  classtext="tc1 f3 b"
                  size={35}
                />
              );
              return acc;
            }, [])}
          </div>
        </div>
      </article>
    );
  }
}
