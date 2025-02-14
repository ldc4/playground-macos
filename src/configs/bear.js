import { FaPaw } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GoRepo } from "react-icons/go";
import { HiFire } from "react-icons/hi";

const bear = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a dragon lost in human world...",
      },
    ],
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "react",
        title: "React",
        file: "https://raw.githubusercontent.com/facebook/react/master/README.md",
        icon: <HiFire />,
        excerpt: "A JavaScript library for building user interfaces...",
        link: "https://reactjs.org/",
      },
    ],
  },
];

export default bear;
