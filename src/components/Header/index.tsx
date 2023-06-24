import ViewResumeButton from "./ViewResumeButton";
import defaultThumbnail from '/thumbnails/default.jpg'
import NavBar from "./Navbar";
import ViewGithubButton from "./ViewGithubButton";

const Head = () => {
    return (
        <div id="home">
            <NavBar />
            <div className="hero min-h-screen bg-base-200 justify-center text-center">
                <div className="hero-content grid lg:flex-row justify-center p-0">

                    <img src={defaultThumbnail} className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" />
                    <img id="AnimatedIntroduction" className="object-center text-center justify-center flex" src={"src/components/Header/darkTypeWriter.svg"} />

                    <div className="hero-content flex-col">
                        <div className="flex gap-2">
                            <ViewResumeButton />
                            <ViewGithubButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;