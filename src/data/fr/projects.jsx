import im1 from "../../media/img/projects/project1.gif";
import im3 from "../../media/img/projects/project3.gif";
import im2 from "../../media/img/projects/project2.gif";
export const sectionTitle = "Projets";
export const button = "En savoir plus";

export const dataProjects = [
  {
    name: "Générateur de mots-clés",
    href: "https://taggenerator.herokuapp.com/",
    text:
      "Utilisation de l'IA à travers une API pour générer des tags (mots-clés) à partir d'une image. Enregistrement et authetification des utilisateurs pour accéder à l'application. Visualisation des tags les plus générés",
    perks: [
      "React",
      "Authentification des utilisateurs",
      "API",
      "Postgre SQL",
      "Node.js server",
      "Interface réactive",
    ],
    img: im1,
  },

  {
    name: "Site web domaine viticole",
    href: "https://captain-inch.github.io/lcc_export/",
    text:
      "Projet réel, ayant pour but de faire connaître un vignoble à des importateurs de vin étrangers. Site statique permettant la prise de contact.",
    perks: ["Projet réél", "React", "Interface réactive"],
    img: im2,
  },
  {
    name: "Générateur de dégradé d'arrière-plan",
    href: "https://captain-inch.github.io/background-generator/",
    text:
      "Permet à l'utilisateur de générer différents types de dégradés, de prévisualiser le rendu, d'ajouter et de modifier différentes couleurs, puis de copier coller le code CSS. Génération de couleurs pré-appairées via un algorithme en colorimétrie.",
    perks: ["Javascript"],
    img: im3,
  },
];
