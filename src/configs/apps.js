import FaceTime from "../components/apps/FaceTime";
import Terminal from "../components/apps/Terminal";
import Safari from "../components/apps/Safari";
import Bear from "../components/apps/Bear";
import VSCode from "../components/apps/VSCode";

const apps = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png",
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    show: false,
    width: 1024,
    height: 768,
    img: "img/icons/bear.png",
    content: <Bear />,
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    height: 768,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />,
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    width: 1024,
    height: 768,
    img: "img/icons/vscode.png",
    content: <VSCode />,
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    width: 1024,
    height: 768,
    img: "img/icons/facetime.png",
    content: <FaceTime />,
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    width: 1024,
    height: 768,
    img: "img/icons/terminal.png",
    content: <Terminal />,
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:youremail@gmail.com",
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "",
  },
];

export default apps;
