import { projects } from "../constants";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="text-center text-zinc-600 w-[75%] justify-center items-center">
      <div>
        <h1 className="font-bold text-3xl mb-4">Projects</h1>
        <h1 className="text-lg">Things I've worked on</h1>
      </div>
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
  );
};

export default Projects;
