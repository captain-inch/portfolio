import React, { Component } from "react";
import { TiTickOutline } from "react-icons/ti";
export default class Projects extends Component {
  componentDidMount() {}
  showPerks() {
    return this.props.perks.reduce((acc, value) => {
      acc.push(
        <div className="ma2 i">
          <TiTickOutline /> {value}
        </div>
      );
      return acc;
    }, []);
  }
  render() {
    return (
      <div id={"Project_" + this.props.key} className="tc1 mb3 mb0-ns">
        <a href={this.props.href} className="pointer">
          <h2>{this.props.name}</h2>
        </a>
        <div className="pa2 flex flex-row-ns flex-column-reverse justify-around items-center center">
          <div className="w-60-ns w80-m w-60-l ma3 f4-l">
            {this.props.text}
            {this.showPerks()}
          </div>
          <a
            href={this.props.href}
            className="flex flex-column justify-center pointer ma3"
          >
            <img src={this.props.img} alt={this.props.name} />
            <a className="mt2 tc b f4 f3-l link dim br-pill ba bw2 ph3 pv2 mb2 dib tcem">
              Try it yourself
            </a>
          </a>
        </div>
      </div>
    );
  }
}
