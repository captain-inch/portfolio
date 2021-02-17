import React, { Component } from "react";

import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
export default class Rank extends Component {
  constructor(props) {
    super(props);
    let stars = [];
    for (let i = 0; i < 5; i++) {
      const delta = Math.round((this.props.rank - i) * 2) / 2;
      if (delta <= 0) {
        stars.push(
          <TiStarOutline
            className="star"
            key={i}
            size={this.props.size ? this.props.size : 30}
          />
        );
      } else if (delta <= 0.5) {
        stars.push(
          <TiStarHalfOutline
            className="starhalf"
            key={i}
            size={this.props.size ? this.props.size : 30}
          />
        );
      } else {
        stars.push(
          <TiStarFullOutline
            className="starfull"
            key={i}
            size={this.props.size ? this.props.size : 30}
          />
        );
      }
    }
    this.state = { stars };
  }
  render() {
    return <div className={this.props.class}>{this.state.stars}</div>;
  }
}
