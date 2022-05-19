import React from "react";
import Avatar from "./Avatar";
import SocialMediaBar from "./SocialMediaBar";

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
            <a
              className="inline-block px-7 py-3 mb-1 border-2 border-gray-500 md:text-gray-500 sm:text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              href="https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
