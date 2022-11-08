import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import py from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

SyntaxHighlighter.registerLanguage("python", py);

export const About = () => {
  const about = `
  class Jie:
      def __init__(self):
          self.name = "Jie Chen"
          self.hometown = "Fuzhou, China"
          self.college = "Stony Brook University"
          self.expected_graduation_date = "May 2025"
          self.interests_and_hobbies =
          [
              "Gaming 🎮",
              "Eating 😋",
              "Data Visualization 📊",
              "Cloud Infrastructure ☁️",
              "Automation 🤖",
          ]`;

  return (
    <div id="about" className="">
      <h1 className="text-2xl light:text-gray-700 dark:text-base-content font-bold text-center my-4">
        About Me
      </h1>
      <div className="flex justify-center">
        <div className="mockup-code w-full mx-1 max-w-2xl whitespace-pre-wrap">
          <SyntaxHighlighter
            language="python"
            style={atomOneDark}
            customStyle={{ backgroundColor: "transparent" }}
          >
            {about}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default About;
