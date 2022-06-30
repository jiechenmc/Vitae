import ViewResumeButton from "./ViewResumeButton";
import worry from "../assets/worry_study.webp";
import NavBar from "./NavBar";

const Head = () => {
  return (
    <div>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24 rounded ring ring-accent ring-offset-base-100 ring-offset-2">
                <img src={worry} />
              </div>
            </div>
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Hi I am Jie, I am currently a sophomore at Stony Brook University
              studying Computer Science!
            </p>
            <ViewResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
