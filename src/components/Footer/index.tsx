import { ReactComponent as LinkedinFooterIcon } from "../../assets/icons/LinkedinFooterIcon.svg";
import { ReactComponent as GithubFooterIcon } from "../../assets/icons/GithubFooterIcon.svg";

const Footer = () => {
    return (
        <footer className="footer footer-center items-center p-2 bg-base-300 text-base">
            <div className="grid grid-cols-2">
                <div>
                    <p>Jie Chen</p>
                    <p>CS @ Stony Brook University</p>
                </div>
                <div>
                    <a href="https://github.com/jiechenmc">
                        <button className="btn dark:fill-white bg-transparent w-fit h-fit border-0 hover:bg-gray-300 dark:hover:bg-gray-30">
                            <GithubFooterIcon />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/jiechen-sbu/">
                        <button className="btn dark:fill-white bg-transparent w-fit h-fit border-0 hover:bg-gray-300 dark:hover:bg-gray-30">
                            <LinkedinFooterIcon />
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
