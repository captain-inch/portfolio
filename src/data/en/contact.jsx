import { BsEnvelope, BsPersonCheck } from "react-icons/bs";
import { RiCake2Line, RiMessage2Line } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { ImGithub } from "react-icons/im";
import Age from "../../components/contact/age.jsx";

export const sectionTitle = "Contact";
export const contact = [
  { text: "Etienne Pousse", icon: <BsPersonCheck size={40} /> },
  { icon: <RiCake2Line size={40} />, text: <Age /> },
  { icon: <BiMapPin size={40} />, text: "Toulouse, France" },
  { icon: <BsEnvelope size={40} />, text: "etiennepousse@live.fr" },
  { icon: <FiPhone size={40} />, text: "(+33) 688 182 904" },
];
export const social = [
  {
    icon: <ImGithub size={60} className="grow" />,
    href: "https://github.com/captain-inch",
  },
  {
    icon: <BsEnvelope size={60} className="grow" />,
    href: "mailto:etiennepousse@live.fr",
  },
];
