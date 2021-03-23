import im1 from "../../media/img/projects/project1.gif";
import im3 from "../../media/img/projects/project3.gif";
import im2 from "../../media/img/projects/project2.gif";
export const sectionTitle = "Projects";
export const button = "Know more";

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
  ,
  {
    name: "Wineyard company page",
    href: "https://captain-inch.github.io/lcc_export/",
    text:
      "Fully responsive React App designed for a wineyard. The concept was to create a B2B web-App, introducing their products, story and their specificities, so that companies could inquire them.",
    perks: ["Real-world project", "React", "Responsive"],
    img: im2,
  },
  {
    name: "Background-generator",
    href: "https://captain-inch.github.io/background-generator/",
    text:
      "First website created during my training course. Allows the user to generate and visualize gradient background and copy CSS code. The user can change and add multiple colors, and a 'Feeling lucky' button generates nice-matching colors.",
    perks: ["Javascript"],
    img: im3,
  },
];
