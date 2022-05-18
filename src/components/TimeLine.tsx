import React from "react";
import TimeLineEntries from "./TimeLineEntries";

const TimeLine = () => {
  return (
    <div className="ml-3">
      <ol className="border-l border-gray-300">
        <TimeLineEntries
          date="8/23/2021"
          title="Fall of U1"
          desc="Introduction to Object-Oriented Programming - A"
        />
        <TimeLineEntries
          date="1/24/2022"
          title="Spring of U1"
          desc={`Data Structures - TBA
          Foundations of Computer Science - TBA`}
        />
        <TimeLineEntries
          date="5/31/2022"
          title="Summer of U1"
          desc="MLH Production Engineering Fellow!"
        />
      </ol>
    </div>
  );
};

export default TimeLine;
