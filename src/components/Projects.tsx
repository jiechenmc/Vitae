import React from "react";
import ProjectEntries from "./subcomponents/ProjectEntries";

interface ProjectElement {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
}

const Projects = () => {
  return (
    <div className="snap-center">
      <h1 className="relative text-2xl text-gray-700 font-bold text-center mt-3 mb-3">
        My Projects
      </h1>
      <ProjectEntries
        title="Pokemon Data Explorer"
        date="May 2022"
        description="Pokedex Clone?"
        URL="https://github.com/jiechenmc/poke_data_explorer"
        status="incomplete"
      />
    </div>
  );
};

export default Projects;
