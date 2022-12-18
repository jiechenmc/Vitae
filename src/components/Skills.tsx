import useIcon from "../hooks/useIcon";
import SkillCircle from "./core/SkillCircle";

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
        Skills
        <div className="flex gap-2 justify-center mt-4">
          <span className="badge text-success">Proficient</span>
          <span className="badge text-warning">Intermediate</span>
          <span className="badge text-gray">Learning</span>
        </div>
      </h1>

      <div className="grid lg:flex justify-center gap-4">
        <SkillCircle color="text-success" icons={proficient} />
        <SkillCircle color="text-warning" icons={intermediate} />
        <SkillCircle color="text-gray" icons={learning} />
      </div>
    </div>
  );
};

export default Skills;
