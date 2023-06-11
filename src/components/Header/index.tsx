import ViewResumeButton from "./ViewResumeButton";
import meme from '../../assets/meme.jpg'
import NavBar from "./Navbar";
import ViewGithubButton from "./ViewGithubButton";

const Head = () => {
    return (
        <div id="home">
            <NavBar />
            <div className="hero min-h-screen bg-base-200 justify-center text-center">
                <div className="hero-content grid lg:flex-row justify-center ">

                    <div className="grid grid-cols-1 object-center justify-center">
                        <div> <img src={meme} className="max-w-sm rounded-lg shadow-2xl" /></div>
                    </div>
                    <img id="AnimatedIntroduction" className="object-center text-center justify-center flex" />

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