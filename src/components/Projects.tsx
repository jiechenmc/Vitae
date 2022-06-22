import ProjectEntries from "./subcomponents/ProjectEntries";
import PROJECTS from "../data/PROJECTS";
import { v4 as uuidv4 } from "uuid";

interface ProjectElement {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
  stack: string;
}

const Projects = () => {
  return (
    <div id="projects" className="snap-center">
      <h1 className="relative text-2xl text-gray-700 font-bold text-center mt-3 mb-3">
        My Projects
      </h1>
      {[...PROJECTS]?.reverse().map((project: ProjectElement) => (
        <ProjectEntries
          key={uuidv4()}
          title={project?.title}
          date={project?.date}
          description={project?.description}
          URL={project?.URL}
          status={project?.status}
          stack={project?.stack}
        />
      ))}
    </div>
  );
};

export default Projects;
