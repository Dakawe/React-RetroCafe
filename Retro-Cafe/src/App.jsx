import "./index.css";
import { Mainsection } from "./modules/mainsection";
import { Navbar } from "./modules/navbar";

function App() {
  return (
    <>
      <Navbar names={main} />
      <Mainsection main={main} />
    </>
  );
}

const main = [
  {
    name: "Hot",
    text: ["Hot freshly ground black coffee or a cup of exquisite tea?", "We give you that perfect cup every time."],
    list: [
      { left: "Mocha Latte", right: "€ 7.50" },
      { left: "Caffe Formaggio", right: "€ 5.50" },
      { left: "Espresso", right: "€ 3.50" },
      { left: "Chai Verde Latte", right: "€ 5.50" },
    ],
  },
  {
    name: "Juicy",
    text: ["Ripe fruit - freshly squeezed.", "It's as simple as that. Chunky or smooth - it's your choice."],
    list: [
      { left: "Branched Apricots", right: "€ 4.20" },
      { left: "Deep Rasberries", right: "€ 3.50" },
      { left: "Smooth Oranges", right: "€ 6.50" },
    ],
  },
  {
    name: "Cosy",
    text: ["Hang around. Enjoy the settings.", "Use our fast WiFi. Borrow a newspaper or a novel."],
    list: [
      { left: "Mon-Sun", right: "8am – 11pm" },
      { left: "Caffe Retro", right: "Canto VI" },
      { left: "0123-45 67 89", right: "caffe@lorem.pge" },
    ],
  },
];

export default App;
