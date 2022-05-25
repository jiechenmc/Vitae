import React from "react";
import TimeLineEntries from "./subcomponents/TimeLineEntries";

const TimeLine = () => {
  return (
    <div className="flex justify-center ml-3">
      <ol className="border-l border-gray-300">
        <TimeLineEntries
          date="August 2022"
          title="Fall of U2"
          desc={["Programming Abstractions\n"]}
        />
        <TimeLineEntries
          date="May 2022"
          title="Summer of U1"
          desc={[
            "MLH Production Engineering Fellowship!\n",
            <a
              href="https://github.com/jiechenmc/poke_browser/"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              &gt;&gt; Pokémon Data Explorer
            </a>,
          ]}
        />
        <TimeLineEntries
          date="January 2022"
          title="Spring of U1"
          desc={["Data Strucutres\n", "Foundations of Computer Science"]}
        />
        <TimeLineEntries
          date="August 2021"
          title="Fall of U1"
          desc={["Introduction to Object-Oriented Programming"]}
        />
      </ol>
    </div>
  );
};

export default TimeLine;
