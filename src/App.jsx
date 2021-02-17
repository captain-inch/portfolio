// ==== IMPORTS ====
// ====   >   MODULES
import React, { Component } from "react";
import "tachyons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ====   >   COMPONENTS
import Navbar from "./components/navbar/navbar.jsx";
import Anchor from "./components/anchor.jsx";
import Hero from "./components/hero.jsx";
import AboutMe from "./components/aboutme.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";

// ====   >   FILES
import { links } from "./components/navbar/navbar_content.jsx";
gsap.registerPlugin(ScrollTrigger);

export default class App extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < links.length; i++) {
      refs.push(React.createRef());
    }
    this.state = { refs };
  }

  componentDidMount() {
    this.state.refs[0].current.scrollIntoView({ behavior: "smooth" });
    const routes = links.reduce((acc, link) => {
      acc.push(link.route);
      return acc;
    }, []);
    const triggerDown = (id) => {
      this.setState({ route: id });
    };
    const triggerUp = (id) => {
      try {
        this.setState({ route: routes[routes.indexOf(id) - 1] });
      } catch {
        console.warn("Error on the sequence of nav items when moving upwards");
      }
    };
    routes.map((name) =>
      ScrollTrigger.create({
        trigger: "#Anchor_" + name,
        start: "50% 50%",
        end: "50% 50%",
        onEnter: (trigger) =>
          triggerDown(trigger.vars.trigger.split("#Anchor_")[1]), // Triggers when scrolling down (entering) a specific section
        onLeaveBack: (trigger) =>
          triggerUp(trigger.vars.trigger.split("#Anchor_")[1]), // // Triggers when scrolling up (leaving, going backwards from) a specific section
      })
    );
  }

  render() {
    return (
      <div id="ReactApp" className="bg-gray">
        <Anchor id="Anchor_home" refprop={this.state.refs[0]} />
        <Navbar
          // callback={this.routeChange}
          links={links}
          refs={this.state.refs}
          active={this.state.route}
        />
        <Hero target={this.state.refs[1]} />
        <Anchor
          id="Anchor_aboutme"
          className="navbarOffset"
          refprop={this.state.refs[1]}
        />
        <AboutMe />
        <Anchor
          id="Anchor_skills"
          className="navbarOffset"
          refprop={this.state.refs[2]}
        />
        <Skills />
        <Anchor
          id="Anchor_projects"
          className="navbarOffset"
          refprop={this.state.refs[3]}
        />
        <Projects />
        <Anchor
          id="Anchor_contact"
          className="navbarOffset"
          refprop={this.state.refs[4]}
        />
        <Contact />
      </div>
    );
  }
}
