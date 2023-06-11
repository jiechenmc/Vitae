import { ReactComponent as GithubIcon } from "../../assets/icons/GithubFooterIcon.svg";

const ViewGithubButton = () => {
    return (<a
        className="btn btn-accent"
        href="https://github.com/jiechenmc"
    >
        <GithubIcon className="dark:fill-white light:fill-black" />
    </a>);
}

export default ViewGithubButton;