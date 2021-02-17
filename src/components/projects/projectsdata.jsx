import im1 from "../../media/img/projects/project1.gif";
import im2 from "../../media/img/projects/project2.gif";
import im3 from "../../media/img/projects/project3.gif";

export const dataProjects = [
  {
    name: "Tag Generator",
    href: "https://taggenerator.herokuapp.com/",
    text:
      "Use remote AI through an API to generate tags from any image. Sign-up required to access tag recognition form. See trending tags.",
    perks: [
      "React",
      "Sign-in/Sign-up credentials",
      "API",
      "Postgre SQL",
      "Node.js server",
      "Responsive",
    ],
    img: im1,
  },
  {
    name: "Tag Generator",
    href: "https://captain-inch.github.io/background-generator/",
    text: "First project",
    perks: ["Javascript", ""],
    img: im2,
  },
  {
    name: "Wineyard company page",
    href: "https://captain-inch.github.io/lcc_export/",
    text:
      "Fully responsive React App designed for a wineyard. The concept was to create a B2B web-App, introducing their products, story and their specificities, so that companies could inquire them.",
    perks: ["Real-world project", "React", "Responsive"],
    img: im3,
  },
];
