"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import TrainImage from "../assets/projects/train.png";
import CrowdedCampusImage from "../assets/projects/crowdedcampus.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import NutriTrackImage from "../assets/projects/nutritrack.png";
import OceanImage from "../assets/projects/ocean.png";
import RunMonashImage from "../assets/projects/runmonash.png";
import LangImage from "../assets/projects/lang.png";
import BritishAirwaysImage from "../assets/projects/britishairways.png";


import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Locomotion",
      description:
        "Developed an efficient pathfinding algorithm to intercept a moving passenger on a circular high-speed train loop by minimizing travel cost and time across dynamic road and train networks. The solution simulates real-time interception planning and runs in O(|R| log |L|) time using graph algorithms.",
      image: TrainImage,
      imageAlt: "Train Interception",
      technologies: ["Python"],
      github: "https://github.com/HuiXia0210/Locomotion.git",
    },
    {
      title: "A Crowded Campus",
      description:
        "Designed an efficient algorithm to allocate students to classes under classroom and scheduling constraints while maximizing student satisfaction. The solution verifies feasibility and optimizes space usage in high-demand classrooms and time slots.",
      image: CrowdedCampusImage,
      imageAlt: "Crowded Campus",
      technologies: ["Python", "Network Flow"],
      github: "https://github.com/HuiXia0210/CrowdedCampus.git",
    },
    {
      title: "British Airways",
      description:
        "This project analyzes customer reviews of British Airways to uncover key patterns in satisfaction, service quality, and travel experience. The interactive dashboard highlights factors that influence passenger ratings across various aspects like comfort, value, and crew service.",
      image: BritishAirwaysImage,
      imageAlt: "British Airways Review",
      technologies: ["Tableau", "Data Visualization"],
      github: "https://github.com/HuiXia0210/British-Airways-Review.git",
    },
    {
      title: "Lang",
      description:
        "An interpreted programming language with variable scope, error catching, loops and statements. Users can run programs from a file or an interactive repl. ",
      image: LangImage,
      imageAlt: "Lang ",
      technologies: ["Python"],
      github: "https://github.com/HuiXia0210/lang.git",
    },
    {
      title: "Tic-Tac-Toe AI Solver",
      href: "https://huixia0210.github.io/tictactoeee/",
      description:
        "a web app that uses the minimax algorithm and alpha-beta pruning to let you play against an unbeatable AI.",
      image: TicTacToeImage,
      imageAlt: "Tic-Tac-Toe AI Solver",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/HuiXia0210/tictactoeee.git",
      demo: "https://huixia0210.github.io/tictactoeee/",
    },
    {
      title: "NutriTrack",
      description:
        "a nutrition app that tracks humans' nutrition intake, developed API to generate real time AI interaction",
      image: NutriTrackImage,
      imageAlt: "NutriTrack App Tracker",
      technologies: ["Kotlin", "Android Studio"],
      github: "https://github.com/HuiXia0210/NutriTrack.git",
      demo: "https://huixia0210.github.io/NutriTrack/nutritrack-demo.html",
    },
    {
      title: "Ocean Odyssey",
      description:
        "A cruise booking platform modeled with relational database principles, featuring entity design, normalization, and schema generation using Oracle tools.",
      image: OceanImage,
      imageAlt: "Ocean Odyssey",
      technologies: ["Oracle SQL", "Oracle Data Modeler", "Lucidchart"],
      github: "https://github.com/HuiXia0210/OceanOdyssey.git",
    },
    {
      title: "Run Monash",
      description:
        "A database project for a running carnival platform that uses SQL and MongoDB to manage event entries, teams, competitors, and fundraising analytics. ",
      image: RunMonashImage,
      imageAlt: "Run Monash",
      technologies: ["MongoDB", "Oracle SQL Developer"],
      github: "https://github.com/HuiXia0210/RunMonash.git",
    },
    
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/HuiXia0210?tab=repositories">
          here
        </Link>
        .
      </p>
    </>
  );
}
