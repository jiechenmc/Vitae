import ViewResumeButton from "./ViewResumeButton";
import worry from "../assets/worry_study.webp";
import NavBar from "./NavBar";

const Head = () => {
  return (
    <div id="home">
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24">
                <img
                  src={worry}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            </div>
            <img
              id="AnimatedIntroduction"
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
            <p className="pb-6">⚡⚡⚡ Blazingly Fast ⚡⚡⚡</p>
            <ViewResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
