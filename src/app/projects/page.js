"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import VibeDrawImage from "../assets/projects/vibedraw.gif";
import CrowdedCampusImage from "../assets/projects/crowdedcampus.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import NutriTrackImage from "../assets/projects/nutritrack.png";
import OceanImage from "../assets/projects/ocean.png";
import RunMonashImage from "../assets/projects/runmonash.png";


import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Locomotion",
      description:
        "Locomotion Commotion — like Dijkstra meets real-time train tracking. Intercept a moving passenger on a high-speed train loop using the cheapest driving route. Real-time path sync, no waiting allowed.",
      image: VibeDrawImage,
      imageAlt: "Vibe Draw",
      technologies: ["Python","Dijsktra"],
      github: "https://github.com/HuiXia0210/Locomotion.git",
    },
    {
      title: "A Crowded Campus",
      description:
        "A Crowded Campus — like a matchmaker for classrooms. Assign students to limited classes under space and time constraints while maximizing satisfaction. Just optimal allocation.",
      image: CrowdedCampusImage,
      imageAlt: "Crowded Campus",
      technologies: ["Python", "Network Flow", "Lower bound", "Eliminate demand","Trie"],
      github: "https://github.com/HuiXia0210/CrowdedCampus.git",
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
      technologies: ["Oracle SQL", "Oracle Data Modeler", "Lucidchart", "Normalization"],
      github: "https://github.com/HuiXia0210/OceanOdyssey.git",
    },
    {
      title: "Run Monash",
      description:
        "A database project for a running carnival platform that uses SQL and MongoDB to manage event entries, teams, competitors, and fundraising analytics. ",
      image: RunMonashImage,
      imageAlt: "Run Monash",
      technologies: ["Oracle SQL", "MongoDB", "Oracle SQL Developer"],
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
