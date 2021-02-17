import React, { Component } from "react";
import Skill from "./skill.jsx";
import { GiSkills } from "react-icons/gi";
export default class Skills extends Component {
  componentDidMount() {}
  render() {
    return (
      <article id="Skills">
        <h1>
          <GiSkills /> <span className="pa3">Skills</span>
        </h1>
        <div className="flex flex-wrap justify-around">
          <Skill
            name="Front-end"
            rank={4.5}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="React"
            rank={4.5}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="Back-end"
            rank={4}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="Photoshop"
            rank={4.5}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="PostGre SQL"
            rank={3.5}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="Node.js"
            rank={4}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
          <Skill
            name="Responsive design"
            rank={5}
            class="tcem ma3"
            classstars="tcem"
            classtext="tc1 f3 b"
            size={35}
          />
        </div>
      </article>
    );
  }
}
