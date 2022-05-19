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
            <div className="appearance-none flex justify-center items-end mt-5 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="animate-bounce w-6 h-6"
              >
                <path
                  fill="#FFFFFF"
                  d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 302.6l-103.1 103.1C270.7 414.6 260.9 416 256 416c-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0S395.1 290.1 382.6 302.6z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
