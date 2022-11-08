import ProjectEntries from "./core/ProjectEntries";
import PROJECTS from "../data/PROJECTS";
import { v4 as uuidv4 } from "uuid";

export interface ProjectElement {
  title: string;
  date: string;
  description: string;
  repo: string;
  status: string;
  stack: string;
  demo: string;
}

const Projects = () => {
  const recentProjects = PROJECTS.filter((e) => e.status != "").reverse();
  const outdatedProjects = PROJECTS.filter((e) => e.status == "");
  return (
    <div id="projects" className="">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h1 className="my-4 text-2xl light:text-gray-700 dark:text-base-content font-bold text-center">
            Projects
          </h1>
          <div className="text-center my-4">
            <label htmlFor="my-drawer" className="btn btn-accent drawer-button">
              Show Outdated Projects
            </label>
          </div>

          <div className="sm:flex-col lg:grid lg:grid-cols-2 lgp:grid-cols-3 hd:grid-cols-3 mba:grid-cols-5 justify-center ">
            {recentProjects.map((project: ProjectElement) => (
              <ProjectEntries
                key={uuidv4()}
                title={project?.title}
                date={project?.date}
                description={project?.description}
                repo={project?.repo}
                status={project?.status}
                stack={project?.stack}
                demo={project?.demo}
              />
            ))}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {outdatedProjects.map((project: ProjectElement) => (
              <ProjectEntries
                key={uuidv4()}
                title={project?.title}
                date={project?.date}
                description={project?.description}
                repo={project?.repo}
                status={project?.status}
                stack={project?.stack}
                demo={project?.demo}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-full md:w-[60%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]"
          id="GithubStats"
        />
      </div>
    </div>
  );
};

export default Projects;
