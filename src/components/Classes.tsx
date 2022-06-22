import ClassEntries from "./subcomponents/ClassEntries";
import JOURNIES from "../data/CLASSES";
import { v4 as uuidv4 } from "uuid";

interface JourneyElement {
  date: string;
  title: string;
  events: string[];
}

const Classes = () => {
  return (
    <div className="snap-center">
      <h1 className="relative text-2xl text-gray-700 font-bold text-center my-3">
        Education
      </h1>
      <div className="flex justify-center ml-3">
        <ol className="border-l border-gray-300">
          {[...JOURNIES]?.reverse().map((journey: JourneyElement) => (
            <ClassEntries
              key={uuidv4()}
              date={journey?.date}
              title={journey?.title}
              events={journey?.events}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Classes;
