import { BsBuilding } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { educations, workexperiences } from "../constants";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[75%]">
        <div className="md:w-[50%]">
          <div className="mt-20 my-10">
            <h1 className="font-extrabold text-zinc-600 text-2xl my-10">
              About Me
            </h1>
            <p className="text-zinc-600 text-sm">
              Dedicated and experienced Full Stack Developer with over 3 years
              of hands-on expertise in software development. Proven track record
              in designing, developing, and deploying web applications
            </p>
          </div>
          <div className="my-5">
            <h1 className="font-extrabold text-zinc-600 text-2xl">
              Work Experience
            </h1>
            {workexperiences.map((exp) => (
              <div
                key={exp.org}
                className="flex flex-col gap-y-2 border-b-2 py-8"
              >
                <div className="flex justify-between">
                  <p className="text-zinc-600 text-md tracking-wider">
                    {exp.designation}
                  </p>
                  <p className="text-zinc-600 text-xs px-5 py-1 rounded-2xl bg-green-200">
                    {exp.shift}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-sm text-zinc-600 tracking-wider">
                    <BsBuilding />
                    <p> {exp.org}</p>
                    <p> {exp.location}</p>
                  </div>
                  <div className="flex text-xs gap-2 text-zinc-600 tracking-wider items-center">
                    <SlCalender />
                    <p> {exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-10">
            <h1 className="font-extrabold text-zinc-600 text-2xl">Education</h1>
            {educations.map((edu) => (
              <div
                key={edu.course}
                className="flex flex-col gap-y-2 border-b-2 py-8"
              >
                <div className="flex justify-between">
                  <p className="text-zinc-600 text-md tracking-wider">
                    {edu.course}
                  </p>
                  <p className="text-zinc-600 text-xs px-5 py-1 rounded-2xl bg-green-200">
                    {edu.shift}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-sm text-zinc-600 tracking-wider">
                    <BsBuilding />
                    <p> {edu.college}</p>
                    {/* <p> {edu.location}</p> */}
                  </div>
                  <div className="flex text-xs gap-2 text-zinc-600 tracking-wider items-center">
                    <SlCalender />
                    <p> {edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
