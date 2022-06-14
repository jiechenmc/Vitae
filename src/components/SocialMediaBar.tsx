import React from "react";
import { ReactComponent as GithubLogo } from "../assets/GithubLogo.svg";
import { ReactComponent as LinkedinLogo } from "../assets/LinkedinLogo.svg";

const SocialMediaBar = () => {
  return (
    <div className="flex space-x-1 justify-center">
      {/* Github */}
      <a href="https://github.com/jiechenmc" target="_blank" rel="noreferrer">
        <button
          type="button"
          className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-[#333]"
        >
          <GithubLogo className="w-4 h-4" />
        </button>
      </a>
      {/* Linkedin */}
      <a
        href="https://www.linkedin.com/in/jiechen-sbu/"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-[#0077b5]"
        >
          <LinkedinLogo className="w-4 h-4" />
        </button>
      </a>
    </div>
  );
};

export default SocialMediaBar;
