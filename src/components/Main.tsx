import profile from "../assets/profilepic.png";
// import Typewriter from "./Typewriter";
const Main = () => {
  return (
    <div className="flex flex-wrap w-[75%] md:justify-between py-32 items-center justify-center md:text-left text-center md:gap-0 gap-10">
      <div className="font-extrabold text-2xl text-zinc-600">
        <p>Hi 👋 ,</p>
        <h1>My name is</h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Ashish Chaurasiya
        </h1>

        <h1>
          {/* <Typewriter text="I build things for web" delay={100} infinite /> */}

          I build things for web
        </h1>
      </div>
      <div className="rounded-full w-52 h-52 p-2 bg-gradient-to-r from-blue-600 via-red-500 to-purple-600">
        <img
          className="bg-white rounded-full object-cover w-52 h-48"
          src={profile}
        />
      </div>
    </div>
  );
};

export default Main;
