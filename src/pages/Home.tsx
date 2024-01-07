import TechStacks from "../components/TechStacks";
import Main from "../components/Main";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="w-ful flex flex-col justify-center items-center">
      <Main />
      <TechStacks />
      <Projects />
    </div>
  );
};

export default Home;
