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
                    {/* <img id="AnimatedIntroduction" className="object-center text-center justify-center flex" src={"/darkTypeWriter.svg"} /> */}
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-green-400">Jie Chen</h1>
                    <p className="text-success">Computer Aide Temporary @ Con Edison</p>
                    <p className="text-success">Campus Residence IT Technician and Programming Intern @ Stony Brook University</p>
                    <p>Production Engineering Fellow @ Major League Hacking</p>
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