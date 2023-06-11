import ClassEntries from "./ClassEntries";
import CLASSES, { ClassElement, GPA } from "../../data/classes";
import { v4 as uuidv4 } from "uuid";
import SBULogo from "../../assets/sbu.webp";


const Education = () => {
    return (
        <div id="education" className="">
            <h1 className="relative text-2xl text-base-content font-bold text-center my-4">
                Education
            </h1>

            <div className="flex justify-center mb-6 gap-2">
                <img className="" src={SBULogo} width="96px" />
                <div className="whitespace-nowrap ">
                    <p className="font-bold w-36 ">Stony Brook University</p>
                    <p className="font-bold w-36 ">B.S. — Computer Science</p>
                    <small className="font-bold ">Expected Graduation: May 2025</small>
                    <br />
                    <small className="font-bold">GPA: {GPA}</small>
                </div>
            </div>

            <div className="flex justify-center ml-3">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-base-200 md:text-base-content">
                                    Course Code
                                </th>
                                <th>Course Name</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...CLASSES]?.reverse().map((project: ClassElement) => (
                                <ClassEntries
                                    key={uuidv4()}
                                    courseCode={project?.courseCode}
                                    courseName={project?.courseName}
                                    instructor={project?.instructor}
                                    completed={project?.completed}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Education;
