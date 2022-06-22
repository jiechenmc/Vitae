import { ReactComponent as GitHubLogo } from "../../assets/GithubLogo.svg";
import useIcon from "../../hooks/useIcon";

interface ProjectEntriesProps {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
  stack: string;
}

const ProjectEntries = ({
  title,
  date,
  description,
  URL,
  status,
  stack,
}: ProjectEntriesProps) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-emerald-400",
    incomplete: "border-amber-200",
  };

  const handleOnClick = () => {
    window.open(URL, "_blank");
  };

  const icons = stack.split(",").map((e) => useIcon(e));

  return (
    <div className="flex justify-center mb-2 flex-grow-1">
      <div
        className={`relative p-6 rounded-lg shadow-lg bg-white max-w-sm w-full h-full ${
          statusStyles[status] ?? "border-red-500"
        } border-2`}
      >
        <div className="h-[65%]">
          <h5 className="text-gray-800 text-xl leading-tight font-medium mb-0 border-b-2">
            {title}
          </h5>
          <p className="appearance-none mb-2 text-gray-500 text-sm mt-1 italic">
            {date}
          </p>
          <p className="text-gray-500 text-base mb-4 animation-element">
            {description}
          </p>
        </div>
        <div className="flex text-gray-500 text-xl mb-1 animation-element border-t-2 pt-1 gap-1">
          {icons}
        </div>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#333] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#4078c0] hover:shadow-lg focus:bg-[#4078c0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleOnClick}
        >
          <GitHubLogo className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectEntries;
