import useIcon from "../../hooks/useIcon";
import { ReactComponent as GithubProjectIcon } from "../../assets/GithubProjectIcon.svg";
import { ReactComponent as DemoIcon } from "../../assets/DemoIcon.svg";
import { ProjectElement } from ".";

const ProjectEntries = ({
  title,
  date,
  description,
  repo,
  status,
  stack,
  demo,
  star,
}: ProjectElement) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-success",
    incomplete: "border-warning",
  };

  const icons = stack.split(",").map((e) => useIcon(e.trim()));

  return (
    <div className="flex justify-center mb-2">
      <div
        className={`flex max-w-xl w-full mb-2 border-2 rounded-lg shadow-lg indicator ${statusStyles[status] ?? "border-red-500"
          }`}
      >
        <div className="card card-side w-full">
          <figure><img src="https://picsum.photos/800/800" alt="Movie" width={800} height={800} /></figure>
          <div className="card-body">
            <h2 className="card-title text-center ">
              <p>{title}</p>
            </h2>
            <div className="flex justify-center">
              <div className="badge badge-md mr-1 capitalize mt-auto mb-auto bg-transparent text-current">
                <p>{date}</p>
              </div>
              <div className="flex gap-1">
                <a href={repo}>
                  <button className="btn bg-transparent p-1 border-0 hover:bg-gray-300 dark:hover:bg-gray-300 text-xl">
                    <GithubProjectIcon className="dark:fill-white light:fill-black" />
                  </button>
                </a>
                <a href={demo}>
                  <button className="btn bg-transparent p-1 border-0 hover:bg-gray-300 dark:hover:bg-gray-300 text-xl">
                    <DemoIcon className="dark:fill-white light:fill-black" />
                  </button>
                </a>
              </div>
            </div>
            <p className="text-center">{description}</p>
            <div className="divider mb-1">Tech Stack</div>
            <div className="flex gap-1 mb-1 justify-center">{icons}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntries;
