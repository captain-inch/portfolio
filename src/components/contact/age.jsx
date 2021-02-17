import React, { Component } from "react";
import { gsap } from "gsap";
const digits = 11;
const timeIncrement = 800 * 2;
const animationSpeed = Math.min(timeIncrement / 3000, 2);
export default class Age extends Component {
  constructor(props) {
    super(props);
    const bd = new Date("Aug 30, 1993 13:37:25").getTime();
    this.state = { bd: bd, age: [], ageOld: [] };
  }
  getAge() {
    return Array.from(
      String((new Date().getTime() - this.state.bd) / 31536000000, Number)
    ).slice(0, digits);
  }
  componentDidMount() {
    const counter = () => {
      const age = this.getAge();
      const y = 50;
      const rX = 90;
      this.setState({ ageOld: this.state.age });
      this.setState({ age }, () => {
        for (let i = 0; i < this.state.age.length; i++) {
          if (this.state.ageOld[i] !== this.state.age[i]) {
            gsap
              .timeline()
              .fromTo(
                "#age_" + i,
                { opacity: 1, rotateX: 0, yPercent: 0 },
                {
                  opacity: 0,
                  rotateX: rX,
                  yPercent: y,
                  duration: animationSpeed,
                }
              )
              .fromTo(
                "#age_" + i,
                { yPercent: -y, rotateX: -rX, opacity: 0 },
                {
                  yPercent: 0,
                  rotateX: 0,
                  opacity: 1,
                  duration: animationSpeed,
                }
              );
          }
        }
      });
    };
    // Update the count down every 1 second
    setInterval(counter.bind(this), timeIncrement);
  }
  render() {
    return (
      <div id="Age" className={this.props.class}>
        {this.state.age.reduce((acc, val) => {
          acc.push(
            <span className="dib" key={acc.length} id={"age_" + acc.length}>
              {val}
            </span>
          );
          return acc;
        }, [])}{" "}
        y.o
      </div>
    );
  }
}
