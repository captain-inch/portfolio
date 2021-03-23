import React, { Component } from "react";
import { gsap } from "gsap";
const timeIncrement = 1500;
const animationRatio = 0.25;
const animationSpeed = (timeIncrement * animationRatio) / 1000;
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    const welcome = [
      "Willkommen",
      "¡Bienvenido!",
      "Bienvenue !",
      "Benvenuto!",
      "Bem-vindo!",
      "Välkommen!",
      "Hoş geldin!",
      "Добро пожаловать!",
      "欢迎",
    ];
    this.state = {
      i: 0,
      welcome: this.shuffleArray(welcome),
      welcometext: welcome[0],
    };
  }
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  componentDidMount() {
    const counter = () => {
      const yPercent = 10;
      gsap
        .timeline()
        .fromTo(
          "#welcome",
          { opacity: 1, yPercent: 0 },
          {
            opacity: 0,
            yPercent: yPercent,
            duration: animationSpeed,
            onComplete: () => {
              if (!this.props.welcometext) {
                this.setState({
                  i: (this.state.i + 1) % this.state.welcome.length,
                  welcometext: this.state.welcome[
                    (this.state.i + 1) % this.state.welcome.length
                  ],
                });
              }
            },
          }
        )
        .fromTo(
          "#welcome",
          { yPercent: -yPercent },
          { opacity: 1, yPercent: 0, duration: animationSpeed }
        );
    };
    this.interval = setInterval(counter.bind(this), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div id="welcome" className={this.props.class}>
        {this.props.welcometext
          ? this.props.welcometext
          : this.state.welcometext}
      </div>
    );
  }
}
