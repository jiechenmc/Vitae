import { WorkElement } from "../Work";

const WorkEntries = ({ period, company, role, description }: WorkElement) => {
  const desc = description.split("\n").map((e) => (
    <pre data-prefix=">">
      <code>{e}</code>
    </pre>
  ));

  return (
    <div className="flex justify-center">
      <div className="mockup-code max-w-4xl w-full mx-1 hd:max-w-5xl">
        <pre data-prefix="!" className="text-info">
          <code>{period}</code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>{company}</code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>{role}</code>
        </pre>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default WorkEntries;
