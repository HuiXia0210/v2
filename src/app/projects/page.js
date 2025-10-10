"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import TrainImage from "../assets/projects/train.png";
import CrowdedCampusImage from "../assets/projects/crowdedcampus.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import NutriTrackImage from "../assets/projects/nutritrack.png";
import OceanImage from "../assets/projects/ocean.png";
import RunMonashImage from "../assets/projects/runmonash.png";
import RunImage from "../assets/projects/run2.jpg";
import LangImage from "../assets/projects/lang.png";
import BritishAirwaysImage from "../assets/projects/britishairways.png";
import LanaImage from "../assets/projects/lana_image.png"
import Lana2Image from "../assets/projects/lana4.webp"
import BedImage from "../assets/projects/bbb.png"
import ArabImage from "../assets/projects/arab.webp"


import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Lana Del Rey Dashboard",
      description:
        "An interactive music analytics dashboard exploring Lana Del Rey’s discography. It visualizes trends in audio features, popularity, and lyrical sentiment across albums using Python and Tableau. The project highlights data wrangling, sentiment analysis, and storytelling through visuals that reveal how her music style evolved over time.",
      image: Lana2Image,
      imageAlt: "Lana Del Rey",
      technologies: ["Tableau, Python (pandas, seaborn, TextBlob)"],
      github: "https://public.tableau.com/app/profile/hui.ooi/viz/FIT3179DATAVISUALIZATION1/Dashboard1?publish=yes",
    },
    {
      title: "British Airways",
      description:
        "This project analyzes customer reviews of British Airways to uncover key patterns in satisfaction, service quality, and travel experience. The interactive dashboard highlights factors that influence passenger ratings across various aspects like comfort, value, and crew service.",
      image: BritishAirwaysImage,
      imageAlt: "British Airways Review",
      technologies: ["Tableau", "Data Visualization"],
      github: "https://public.tableau.com/app/profile/hui.ooi/viz/BritishAirwaysReviews_17600637515150/Dashboard1?publish=yes",
    },
    {
      title: "Bed Bath & Beyond",
      description:
        "An interactive R Shiny dashboard analyzing sales, inventory, and customer data to uncover factors behind the retailer’s performance decline. It highlights data wrangling, KPI visualization, and business insight generation for strategic decision-making.",
      image: BedImage,
      imageAlt: "Bed",
      technologies: ["R Shiny", "R"],
      github: "https://github.com/HuiXia0210/bedbath_andbeyond.git",
    },
    {
      title: "Arab Restaurant Reviews Analysis",
      description:
        "A text analytics project that extracts and analyzes Google Maps reviews from Los Angeles–based Arab restaurants to uncover customer sentiment and service insights. It combines data scraping (Apify), NLP, and visualization in Google Colab to identify trends in food quality, price, and delivery experience.",
      image: ArabImage,
      imageAlt: "Arab",
      technologies: ["Google Colab", "Apify", "Python"],
      github: "https://github.com/HuiXia0210/restaurant_review_analysis.git",
    },
    {
      title: "Run Monash",
      description:
        "A database project for a running carnival platform that uses SQL and MongoDB to manage event entries, teams, competitors, and fundraising analytics. ",
      image: RunImage,
      imageAlt: "Run 2 Monash",
      technologies: ["MongoDB", "Oracle SQL Developer"],
      github: "https://github.com/HuiXia0210/RunMonash.git",
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
      title: "Tic-Tac-Toe AI Solver",
      href: "https://huixia0210.github.io/tictactoeee/",
      description:
        "A web app that uses the minimax algorithm and alpha-beta pruning to let you play against an unbeatable AI.Showcases game logic, search algorithms, and decision-making optimization.",
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
      title: "Locomotion",
      description:
        "Developed an efficient pathfinding algorithm to intercept a moving passenger on a circular high-speed train loop by minimizing travel cost and time across dynamic road and train networks. The solution simulates real-time interception planning and runs in O(|R| log |L|) time using graph algorithms.",
      image: TrainImage,
      imageAlt: "Train Interception",
      technologies: ["Python"],
      github: "https://github.com/HuiXia0210/Locomotion.git",
    },
    /*
    {
      
      title: "Lang",
      description:
        "An interpreted programming language with variable scope, error catching, loops and statements. Users can run programs from a file or an interactive repl. ",
      image: LangImage,
      imageAlt: "Lang ",
      technologies: ["Python"],
      github: "https://github.com/HuiXia0210/lang.git",
    },*/
    
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
