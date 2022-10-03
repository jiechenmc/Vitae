import WORK from "../data/WORK";
import WorkEntries from "./subcomponents/WorkEntries";
import { v4 as uuidv4 } from "uuid";

export interface WorkElement {
  period: string;
  company: string;
  role: string;
  // description: string;
}

export const Work = () => {
  return (
    <div id="work" className="">
      <h1 className="text-2xl light:text-gray-700 dark:text-base-content font-bold text-center my-4">
        Experiences
      </h1>
      <div className="flex justify-center">
        <div className="mockup-code w-full mx-1 max-w-lg hd:max-w-5xl">
          {[...WORK]?.reverse().map((work: WorkElement) => (
            <WorkEntries
              key={uuidv4()}
              period={work?.period}
              company={work?.company}
              role={work?.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
