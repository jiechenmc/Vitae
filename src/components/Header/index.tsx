import ViewResumeButton from "./ViewResumeButton";
import defaultThumbnail from '/thumbnails/default.jpg'
import NavBar from "./Navbar";
import ViewGithubButton from "./ViewGithubButton";

const Head = () => {
    return (
        <div id="home" >
            <NavBar />
            <div className="hero min-h-screen bg-base-200 justify-center text-center" >
                <div className="hero-content grid lg:flex-row justify-center p-0">
                    <img src={defaultThumbnail} className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" />
                    <img id="AnimatedIntroduction" className="w-full object-center text-center justify-center flex" src={"/darkTypeWriter.svg"} />
                    <p className="text-success">GDSC Lead @ Google Developer Student Clubs</p>
                    <p className="text-content">Computer Aide Temporary @ Con Edison</p>
                    <p className="text-content">Campus Residence IT Technician and Programmer @ Stony Brook University</p>
                    <p className="text-content">Production Engineering Fellow @ Major League Hacking</p>
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