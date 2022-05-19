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
              className="inline-block px-7 py-3 mb-1 border-2 border-gray-500 text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
      <div className="flex justify-center items-end h-full">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="animate-bounce w-10 h-10"
          >
            <path
              fill="#FFFFFF"
              d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
