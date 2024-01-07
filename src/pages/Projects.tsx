import Card from "../components/Card";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[75%] py-20">
        <span className="font-extrabold text-zinc-600 text-2xl my-10">
          Projects
        </span>
        <br />
        <span className="text-zinc-600 text-sm">Things I've build so far</span>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              image={project.image}
              title={project.title}
              languagesUsed={project.languagesUsed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
