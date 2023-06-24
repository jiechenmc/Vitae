import ProjectEntries from "./ProjectEntries";
import PROJECTS, { ProjectElement } from "../../data/projects";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
    const recentProjects = PROJECTS.filter((e) => e.status != "").reverse();
    return (
        <div id="projects" className="">
            <div className="">
                <h1 className="my-4 text-2xl light:text-gray-700 dark:text-base-content font-bold text-center">
                    Projects
                </h1>
                <div className="flex-col justify-center mx-3">
                    {recentProjects.map((project: ProjectElement) => (
                        <ProjectEntries
                            key={uuidv4()}
                            {...project}
                        />
                    ))}
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
