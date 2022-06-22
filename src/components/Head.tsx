import ViewResumeButton from "./ViewResumeButton";
import SocialMediaBar from "./SocialMediaBar";
import worry from "../assets/worry_study.webp";

const Head = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-100 to-green-800 text-neutral-800 text-center">
        &nbsp; Work in Progress!
      </div>
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
