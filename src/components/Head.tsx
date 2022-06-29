import ViewResumeButton from "./ViewResumeButton";
import SocialMediaBar from "./SocialMediaBar";
import worry from "../assets/worry_study.webp";
import NavBar from "./NavBar";

const Head = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-3">
        <img src={worry} />
      </div>
      <div className="flex justify-center">
        <p className="appearance-none my-3 text-5xl">Jie Chen;</p>
      </div>
      <SocialMediaBar />
      <ViewResumeButton />
    </div>
  );
};

export default Head;
