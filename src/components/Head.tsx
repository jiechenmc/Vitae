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
              <div className="w-24">
                <img src={worry} />
              </div>
            </div>
            <h1>
              <img src="https://readme-typing-svg.herokuapp.com?color=000000&center=true&vCenter=true&lines=Hi+I+am+Jie!;My+interests+are+...;Data+Engineering+%F0%9F%97%84%EF%B8%8F!;Production+Engineering+%F0%9F%92%BF!;and+Software+Engineering+%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB!+" />
            </h1>
            <p className="pb-6">
              I am currently a sophomore at Stony Brook University studying
              Computer Science!
            </p>
            <ViewResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
