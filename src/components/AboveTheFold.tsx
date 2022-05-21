import React from "react";
import Avatar from "./Avatar";
import SocialMediaBar from "./SocialMediaBar";
import ViewResumeButton from "./ViewResumeButton";
import { ReactComponent as DownArrow } from "../assets/DownArrow.svg";

const AboveTheFold = () => {
  return (
    <div className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover bg-[url('https://i.imgur.com/dWAqrGJ.jpg')] h-screen">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center h-full">
          <div className="">
            <h2 className="font-semibold mb-4">
              <Avatar
                name="Jie Chen"
                title="CS Student at Stony Brook University"
                imageSource="https://i.imgur.com/X4IAN4u.jpg"
              />
            </h2>
            <h4 className="font-semibold leading-none mb-6">
              <SocialMediaBar />
            </h4>
            <ViewResumeButton />
            <div className="appearance-none flex justify-center items-end mt-5">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
