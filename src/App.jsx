// ==== IMPORTS ====
// ====   >   MODULES
import React, { Component } from "react";
import "tachyons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ====   >   COMPONENTS
import Welcome from "./components/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Anchor from "./components/anchor.jsx";
import Hero from "./components/hero.jsx";
import AboutMe from "./components/aboutme.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";

// ====   >   DATA (CONTENT)
import { links as links_en } from "./data/en/navbar.jsx";
import { links as links_fr } from "./data/fr/navbar.jsx";
import {
  text as heroText_en,
  button as heroButton_en,
} from "./data/en/hero.jsx";
import {
  text as heroText_fr,
  button as heroButton_fr,
} from "./data/fr/hero.jsx";
import {
  text as aboutmeText_en,
  sectionTitle as aboutmeTitle_en,
} from "./data/en/aboutme.jsx";
import {
  text as aboutmeText_fr,
  sectionTitle as aboutmeTitle_fr,
} from "./data/fr/aboutme.jsx";
import {
  skills as skills_en,
  sectionTitle as skillsTitle_en,
} from "./data/en/skills.jsx";
import {
  skills as skills_fr,
  sectionTitle as skillsTitle_fr,
} from "./data/fr/skills.jsx";
import {
  dataProjects as projects_en,
  sectionTitle as projectsTitle_en,
  button as projectsButton_en,
} from "./data/en/projects.jsx";
import {
  dataProjects as projects_fr,
  sectionTitle as projectsTitle_fr,
  button as projectsButton_fr,
} from "./data/fr/projects.jsx";
import {
  contact as contact_en,
  social as social_en,
  sectionTitle as contactTitle_en,
} from "./data/en/contact.jsx";
import {
  contact as contact_fr,
  social as social_fr,
  sectionTitle as contactTitle_fr,
} from "./data/fr/contact.jsx";
gsap.registerPlugin(ScrollTrigger);

export default class App extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < links_en.length; i++) {
      refs.push(React.createRef());
    }
    this.state = {
      refs,
      languageSet: false,
      language: "fr",
      links: {},
      welcometext: "",
    };
  }

  componentDidMount() {
    if (!this.state.languageSet) {
      // Page de selection de langue
      gsap.fromTo(
        ["#fr", "#en"],
        { opacity: 0, yPercent: 20 },
        { opacity: 1, duration: 2, yPercent: 0 }
      );
    }
  }
  setupApp() {
    // Appli lancée
    const routes = (this.state.language === "fr" ? links_fr : links_en).reduce(
      (acc, link) => {
        acc.push(link.route);
        return acc;
      },
      []
    );
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
    routes.map((name) => {
      ScrollTrigger.create({
        trigger: "#Anchor_" + name,
        start: "50% 50%",
        markers: true,
        end: "50% 50%",
        onEnter: (trigger) => {
          console.log("Entering ", trigger.vars.trigger);
          triggerDown(trigger.vars.trigger.split("#Anchor_")[1]);
        }, // Triggers when scrolling down (entering) a specific section
        onLeaveBack: (trigger) => {
          console.log("Leaving ", trigger.vars.trigger);
          triggerUp(trigger.vars.trigger.split("#Anchor_")[1]); // // Triggers when scrolling up (leaving, going backwards from) a specific section
        },
      });
    });
  }
  languageSelection(language) {
    const duration = 1.2;
    let on = "#en";
    let off = "#fr";
    let welcometext = "Welcome";
    if (language == "fr") {
      on = "#fr";
      off = "#en";
      welcometext = "Bievenue";
    }
    this.setState({ welcometext });
    gsap
      .timeline()
      .to(
        on,
        {
          scale: 2.5,
          opacity: 0,
          duration,
          onComplete: () => {
            this.setState({
              language: language,
              languageSet: true,
              links: language === "fr" ? links_fr : links_en,
            });
            this.setupApp();
          },
        },
        0
      )
      .to(off, { scale: 0.5, opacity: 0, duration }, 0)
      .fromTo(
        "#welcome",
        { opacity: 1 },
        {
          scale: 2,
          xPercent: 50,
          opacity: 0,
          duration,
          ease: "power1.out",
        },
        0
      );
  }
  render() {
    if (!this.state.languageSet) {
      return (
        <div id="ReactApp" className="bg-gray">
          <div className="flex flex-column justify-around vh-75">
            <Welcome
              active={!this.props.languageSet}
              class="f2  tc2 h4 v-mid ml5"
              welcometext={this.state.welcometext}
            />
            <div className="center w-50-ns f1.ns f2 w-100 flex justify-around tc1">
              <div
                id="fr"
                className="pointer"
                onClick={(e) => this.languageSelection(e.target.id)}
              >
                Français
              </div>
              <div
                id="en"
                className="pointer"
                onClick={(e) => this.languageSelection(e.target.id)}
              >
                English
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="ReactApp" className="bg-gray">
          <Anchor id="Anchor_home" refprop={this.state.refs[0]} />
          <Navbar
            links={this.state.links}
            refs={this.state.refs}
            active={this.state.route}
          />
          <Hero
            target={this.state.refs[1]}
            text={this.state.language === "fr" ? heroText_fr : heroText_en}
            button={
              this.state.language === "fr" ? heroButton_fr : heroButton_en
            }
          />
          <Anchor
            id="Anchor_aboutme"
            className=""
            refprop={this.state.refs[1]}
          />
          <AboutMe
            text={
              this.state.language === "fr" ? aboutmeText_fr : aboutmeText_en
            }
            title={
              this.state.language === "fr" ? aboutmeTitle_fr : aboutmeTitle_en
            }
          />
          <Anchor
            id="Anchor_skills"
            className=""
            refprop={this.state.refs[2]}
          />
          <Skills
            skills={this.state.language === "fr" ? skills_fr : skills_en}
            title={
              this.state.language === "fr" ? skillsTitle_fr : skillsTitle_en
            }
          />
          <Anchor
            id="Anchor_projects"
            className=""
            refprop={this.state.refs[3]}
          />
          <Projects
            projects={this.state.language === "fr" ? projects_fr : projects_en}
            title={
              this.state.language === "fr" ? projectsTitle_fr : projectsTitle_en
            }
            button={
              this.state.language === "fr"
                ? projectsButton_fr
                : projectsButton_en
            }
          />

          <Contact
            contact={this.state.language === "fr" ? contact_fr : contact_en}
            social={this.state.language === "fr" ? social_fr : social_en}
            title={
              this.state.language === "fr" ? contactTitle_fr : contactTitle_en
            }
          />
          <Anchor
            id="Anchor_contact"
            className=""
            refprop={this.state.refs[4]}
          />
        </div>
      );
    }
  }
}
