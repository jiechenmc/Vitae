import React from "react";

export const Work = () => {
  return (
    <div className="mx-1">
      <h1 className=" text-2xl light:text-gray-700 dark:text-base-content font-bold text-center mt-3 mb-1">
        Work Experience
      </h1>
      <div className="flex justify-center">
        <div className="mockup-code max-w-md w-full">
          <pre data-prefix="!" className="text-info">
            <code>May 2022 - August 2022</code>
          </pre>
          <pre data-prefix="$" className="text-warning">
            <code>MLH Production Engineering Fellowship</code>
          </pre>
          <pre data-prefix=">">
            <code>...</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
