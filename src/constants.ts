import amazon from "./assets/amazon.png";
import trafikalarm from "./assets/trafikalarm.png";
import dro from "./assets/dro.png";
import parkone from "./assets/parkone.png";


export const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const workexperiences = [
  {
    designation: "Full Stack Developer",
    org: "Cropsly Pvt Ltd",
    location: "Mohali, Chandigarh",
    period: "Oct 2020 - Present",
    shift: "Full Time",
  },
];

export const educations = [
  {
    course: "Bachelor in Technologies",
    college: "Ambalika Institute of Management & Technologies",
    duration: "2015 - 2019",
    shift: "Full Time",
    location: "Lucknow",
  },
  {
    course: "Intermediate",
    college: "Lucknow Model Public Inter College",
    duration: "2014 - 2015",
    shift: "Full Time",
    location: "Lucknow",
  },
  {
    course: "High School",
    college: "Lucknow Model Public Inter College",
    duration: "2012 - 2013",
    shift: "Full Time",
    location: "Lucknow",
  },
];


export const projects = [
  {
    image: amazon,
    title: "Amazon Clone",
    languagesUsed: ["NextJS 13", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
  },
  {
    image: trafikalarm,
    title: "Trafikalarm",
    languagesUsed: [
      "ReactJS",
      "Redux Query",
      "Tailwind CSS",
      "TypeScript",
      "NodeJs",
      "AWS Lambdas",
      "MySQL",
    ],
  },
  {
    image: parkone,
    title: "ParkOne",
    languagesUsed: ["ReactJS", "Redux", "Redux Saga", "NodeJS", "PostgreSQL"],
  },
  {
    image: dro,
    title: "DriveOne",
    languagesUsed: ["ReactJS", "Redux", "Redux Saga", "NodeJS", "MongoDB"],
  },
];