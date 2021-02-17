import React, { Component } from "react";
import { gsap } from "gsap";
import Rank from "./rank.jsx";

export default class Skill extends Component {
  componentDidMount() {}
  render() {
    return (
      <div
        className={
          "flex flex-column justify-center items-center " + this.props.class
        }
      >
        <p className={this.props.classtext}>{this.props.name}</p>
        <Rank
          class={this.props.classstars}
          size={this.props.size}
          rank={this.props.rank}
        />
      </div>
    );
  }
}
