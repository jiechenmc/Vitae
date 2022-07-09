import useIcon from "../../hooks/useIcon";
import { ReactComponent as GithubProjectIcon } from "../../assets/GithubProjectIcon.svg";
import { ReactComponent as DemoIcon } from "../../assets/DemoIcon.svg";
import { ProjectElement } from "../Projects";

const ProjectEntries = ({
  title,
  date,
  description,
  repo,
  status,
  stack,
  demo,
}: ProjectElement) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-emerald-200",
    incomplete: "border-amber-200",
  };

  const icons = stack.split(",").map((e) => useIcon(e.trim()));

  return (
    <div className="flex justify-center mt-2 mx-1">
      <div
        className={`flex max-w-sm min-w-sm mb-2 border-2 rounded-lg shadow-lg ${
          statusStyles[status] ?? "border-red-500"
        }`}
      >
        <div className="card w-full">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-start">
              <div className="badge badge-md mr-1 capitalize mt-auto mb-auto">
                <p>{date}</p>
              </div>
              <div className="flex gap-1">
                <a href={repo}>
                  <button className="btn p-1 border-0 bg-white hover:bg-gray-300 dark:hover:bg-gray-300 dark:bg-base-100 text-xl">
                    <GithubProjectIcon className="dark:fill-white light:fill-black" />
                  </button>
                </a>
                <a href={demo}>
                  <button className="btn p-1 border-0 bg-white hover:bg-gray-300 dark:hover:bg-gray-300 dark:bg-base-100 text-xl">
                    <DemoIcon className="dark:fill-white light:fill-black" />
                  </button>
                </a>
              </div>
            </div>
            <p>{description}</p>
            <div className="divider mb-1">Tech Stack</div>
            <div className="flex gap-1 mb-1 justify-center">{icons}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntries;
