import ViewResumeButton from "./ViewResumeButton";
import meme from '../../assets/meme.jpg'
import NavBar from "./Navbar";
import About from "../About";
import ViewGithubButton from "./ViewGithubButton";

const Head = () => {
    return (
        <div id="home">
            <NavBar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10 justify-center align-middle">

                    <div className="grid grid-cols-1 object-center">
                        <div> <img src={meme} className="max-w-sm rounded-lg shadow-2xl" /></div>
                        <img id="AnimatedIntroduction" className="object-center" />
                    </div>
                    <div className="hero-content flex-col">
                        <About />
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