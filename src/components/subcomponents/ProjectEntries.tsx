import useIcon from "../../hooks/useIcon";
import useIsDarkTheme from "../../hooks/useIsDarkTheme";
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
    complete: "border-emerald-200",
    incomplete: "border-amber-200",
  };

  const handleOnClick = () => {
    window.open(URL, "_blank");
  };

  const icons = stack.split(",").map((e) => useIcon(e));

  return (
    <div className="flex justify-center mb-2">
      <div
        className={`flex max-w-sm min-w-sm mb-2 border-2 rounded-lg shadow-lg ${
          statusStyles[status] ?? "border-red-500"
        }`}
      >
        <div className="card w-full">
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <button
                className="btn ml-auto border-0 bg-white hover:bg-gray-300 dark:bg-base-100 text-xl"
                onClick={handleOnClick}
              >
                {useIsDarkTheme() ? useIcon("githubWhite") : useIcon("github")}
              </button>
            </h2>
            <p>{description}</p>
            <div className="divider mb-1">Tech Stack</div>

            <div className="flex gap-1 mb-1">{icons}</div>
            <div className="card-actions justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntries;
