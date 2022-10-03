import { WorkElement } from "../Work";

const WorkEntries = ({ period, company, role }: WorkElement) => {
  // const desc = description.split("\n").map((e) => (
  //   <pre data-prefix=">">
  //     <code>{e}</code>
  //   </pre>
  // ));

  return (
    <>
      <pre data-prefix="!" className="text-info">
        <code>{period}</code>
      </pre>
      <pre data-prefix="$" className="text-warning">
        <code>{company}</code>
      </pre>
      <pre data-prefix="-" className="text-success">
        <code>{role}</code>
      </pre>
      <pre data-prefix="" className="text-success">
        <code></code>
      </pre>
    </>
  );
};

export default WorkEntries;
