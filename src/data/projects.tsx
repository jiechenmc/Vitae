export interface ProjectElement {
  title: string;
  date: string;
  description: string;
  repo: string;
  status: string;
  stack: string;
  demo: string;
  thumbnail?: string
}

export default [
  {
    title: "jiechen.dev",
    date: "June 2022",
    description:
      "Portfolio Website to show the world who I am and what I've accomplished!",
    repo: "https://github.com/jiechenmc/jiechen.dev",
    demo: "https://jiechen.dev/",
    status: "complete",
    stack: "TypeScript,React,Docker,Tailwind,Firebase",
    thumbnail: "/thumbnails/jiechen.dev.jpg"
  },
  {
    title: "Gradus",
    date: "November 2022",
    description:
      "RESTful API for grade distribution data scraped from SBU Classie Evals.",
    repo: "https://github.com/jiechenmc/Gradus",
    demo: "https://gradus.jiechen.dev/",
    status: "complete",
    stack: "Python,MongoDB,Playwright,FastAPI,Docker,Heroku",
    thumbnail: "/thumbnails/gradus.jpg"
  },
  {
    title: "Distr",
    date: "December 2022",
    description:
      "Distr is a way for students to view past grade data distribution with interactive charts created by Chart.js",
    repo: "https://github.com/jiechenmc/Distr",
    demo: "https://distr.jiechen.dev/",
    status: "complete",
    stack: "TypeScript,React,NextJS,Tailwind",
    thumbnail: "/thumbnails/distr.jpg"
  },
  {
    title: "Cls",
    date: "January 2023",
    description:
      "A Go script to retrieve real-time data from SBU Class Find to quickly check the availability of seats in a class",
    repo: "https://github.com/jiechenmc/Cls",
    demo: "#",
    status: "complete",
    stack: "Go,Playwright",
    thumbnail: "/thumbnails/cls.jpg"
  },
  {
    title: "Loqi",
    date: "January 2023",
    description:
      "Loqi is a student-focused chat application that enables current students to connect with past students of courses they are interested in, fostering community and increasing educational resources",
    repo: "https://github.com/viLoqi",
    demo: "https://vm1.cs.stonybrook.edu/",
    status: "complete",
    stack: "Go,NextJS,Docker,NGINX",
    thumbnail: "/thumbnails/loqi.png"
  },
];

