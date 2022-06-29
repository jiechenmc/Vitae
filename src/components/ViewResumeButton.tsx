const ViewResumeButton = () => {
  return (
    <div className="flex justify-center">
      <a
        className="w-max px-7 py-3 mb-1 border-2 border-gray-500 dark:text-base-content font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        href="https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        role="button"
      >
        View Resume
      </a>
    </div>
  );
};

export default ViewResumeButton;
