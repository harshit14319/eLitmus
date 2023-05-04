import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.webp";
import Work3 from "./assets/project-3.webp";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Ques1 from "./assets/2.jpg"
import Ques2 from "./assets/3.jpg";
import Ques3 from "./assets/4.jpg";
import Ques4 from "./assets/5.jpg";


import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const portfolio = [
  {
    id: 1,
    img: Work2,
    title: "Missing Numbers",
    link: "/puzz",

    details: [
      {
        icon: <FiFileText />,
        title: "Overview : ",
        desc: "Here you are given multiple Logical Question and by solving it correctly you will decrease the monster energy..",
      },
    ],
  },
  {
    id: 2,
    img: Work1,
    title: "3 basket ",
    link: "/quiz",
    details: [
      {
        icon: <FiFileText />,
        title: "Overview : ",
        desc: "Here you are given with Statements and some clues you have to solve some questions for killing the monster.",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const QuizData = [
  {
    question: "What color is the house that the Norwegian lives in?",
    options: ["Red", "Yellow", "Green", "Blue"],
    answer: 2,
  },
  {
    question: "What pet does the person who drinks juice own?",
    options: ["Snail", "Dog", "Cat", "fish"],
    answer: 1,
  },
  {
    question: "What  is the third houses from left to right?",
    options: ["Yellow ", "Blue", "Red", "Green"],
    answer: 3,
  },
  {
    question: "Which person owns the snail?",
    options: ["Yellow", "Blue", "Red", "Green"],
    answer: 2,
  },
  {
    question: "What beverage does the person who owns a horse drink?",
    options: ["Water", "Coffee", "Tea", "juice"],
    answer: 1,
  },
];

export const PuzzData = [
  {
    img: Ques1,
    options: ["270", "280", "300", "190"],
    answer: 2,
  },
  {
    img: Ques2,
    options: ["157", "162", "168", "200"],
    answer: 3,
  },
  {
    img: Ques3,
    options: ["97 ", "98", "95", "99"],
    answer: 2,
  },
  {
    img: Ques4,
    question: "Find Sum",
    options: ["6", "7", "17", "11"],
    answer: 2,
  },
  {
    question: "77, 85, 69, 101, 37, __",
    options: ["105", "165", "125", "185"],
    answer: 2,
  },
];
