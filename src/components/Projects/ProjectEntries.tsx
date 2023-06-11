import useIcon from "../../hooks/useIcon";
import { ReactComponent as GithubProjectIcon } from "../../assets/icons/GithubProjectIcon.svg";
import { ReactComponent as DemoIcon } from "../../assets/icons/DemoIcon.svg";
import { ProjectElement } from "../../data/projects";
import defaultThumbnail from '../../assets/thumbnails/default.jpg'

const ProjectEntries = ({
  title,
  date,
  description,
  repo,
  status,
  stack,
  demo,
  thumbnail
}: ProjectElement) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-success",
    incomplete: "border-warning",
  };

  const icons = stack.split(",").map((e) => useIcon(e.trim()));


  return (
    <div className="flex justify-center mb-2">
      <div
        className={`flex w-max max-w-2xl mb-2 border-2 rounded-lg shadow-lg indicator ${statusStyles[status] ?? "border-red-500"
          }`}
      >
        <div className="card sm:card-side">
          <figure><img src={thumbnail ?? defaultThumbnail} className="aspect-square w-80	p-4" alt="Project Thumbnail" /></figure>
          <div className="card-body">
            <h2 className="card-title text-center ">
              <p>{title}</p>
            </h2>
            <div className="flex justify-center">
              <div className="badge badge-md mr-1 capitalize mt-auto mb-auto bg-transparent text-current w-max">
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
            <p className="">{description}</p>
            <div className="divider mb-1">Tech Stack</div>
            <div className="flex gap-1 mb-1 justify-center">{icons}</div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectEntries;
