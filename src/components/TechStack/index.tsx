import useIcon from "../../hooks/useIcon";

const Skills = () => {
  const proficient = [
    "React",
    "Python",
    "TypeScript",
    "Tailwind",
    "Playwright",
    "FastAPI",
    "Java",
  ].map((e) => useIcon(e));
  const intermediate = [
    "Docker",
    "Nginx",
    "MongoDB",
    "Nodejs",
    "SQLite",
    "Github Actions",
    "Bash",
    "Flask",
  ].map((e) => useIcon(e));
  const learning = ["c", "nextJS", "go"].map((e) => useIcon(e));

  return (
    <div id="skills" className="mb-4">
      <h1 className="flex-col text-2xl text-base-content font-bold text-center my-4">
        Tech Stack
        <div className="grid sm:flex gap-2 justify-center mt-4">
          <button className="badge text-success">All</button>
          <button className="badge text-warning">Web Development</button>
          <button className="badge text-success">Web Design</button>
          <button className="badge text-warning">DevOps</button>
        </div>
      </h1>

      <div className="grid lg:flex justify-center gap-4">
      </div>
    </div>
  );
};

export default Skills;
