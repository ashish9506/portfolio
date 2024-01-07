import html from "../assets/techicons/html.png";
import css from "../assets/techicons/css.png";
import js from "../assets/techicons/js.png";
import reactjs from "../assets/techicons/reactjs.png";
import aws from "../assets/techicons/aws.png";
import bootstrap from "../assets/techicons/bootstrap.png";
import docker from "../assets/techicons/docker.png";
// import git from "../assets/techicons/git.png";
import lambda from "../assets/techicons/lambda.png";
import mongodb from "../assets/techicons/mongodb.png";
import mysql from "../assets/techicons/mysql.png";
import nextjs from "../assets/techicons/nextjs.png";
import nodejs from "../assets/techicons/nodejs.png";
import pg from "../assets/techicons/postgresql.png";
import postman from "../assets/techicons/postman.png";
import jest from "../assets/techicons/jest.png";
import redis from "../assets/techicons/redis.png";
import redux from "../assets/techicons/redux.png";
import tailwind from "../assets/techicons/tailwind.png";
import ts from "../assets/techicons/typescript.png";
import vite from "../assets/techicons/vite.png";
// import vscode from "../assets/techicons/vscode.png";
import webpack from "../assets/techicons/webpack.png";

const techstacks = {
  frontend: [
    {
      img_source: html,
      name: "HTML",
    },
    {
      img_source: css,
      name: "CSS",
    },
    {
      img_source: js,
      name: "Javascript",
    },
    {
      img_source: reactjs,
      name: "ReactJS",
    },
    {
      img_source: nextjs,
      name: "NextJS",
    },
    {
      img_source: redux,
      name: "Redux",
    },
    {
      img_source: bootstrap,
      name: "Bootsrap",
    },
    {
      img_source: tailwind,
      name: "Tailwind CSS",
    },
    {
      img_source: ts,
      name: "Typescript",
    },
    {
      img_source: vite,
      name: "Vite-React",
    },
    {
      img_source: webpack,
      name: "Webpack",
    },
  ],
  backend: [
    {
      img_source: nodejs,
      name: "NodeJS",
    },
    {
      img_source: pg,
      name: "PostgreSQL",
    },
    {
      img_source: mongodb,
      name: "MongoDB",
    },
    {
      img_source: mysql,
      name: "MySQL",
    },
    {
      img_source: jest,
      name: "Jest",
    },
    {
      img_source: aws,
      name: "AWS",
    },
    {
      img_source: lambda,
      name: "Lambda",
    },
    {
      img_source: docker,
      name: "Docker",
    },
    {
      img_source: redis,
      name: "Redis",
    },
    {
      img_source: postman,
      name: "Postman",
    },
  ],
};

const TechStacks = () => {
  return (
    <div className="flex flex-col w-[75%] gap-20 text-center text-zinc-600 mb-28">
      <div className="w-full">
        <h1 className="font-bold text-3xl mb-4">My Tech Stack</h1>
        <h1 className="text-lg">
          Technologies I've been working with recently
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full">
          <p className="font-bold text-2xl mb-10 border-t border-b">Frontend</p>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {techstacks.frontend.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col justify-center items-center"
              >
                <img src={tech.img_source} width={50} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div> 
        <div className="w-full">
          <p className="font-bold text-2xl mb-10 border-t border-b">Backend</p>
          <div className="flex flex-wrap gap-10 place-content-center">
            {techstacks.backend.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col text-center items-center"
              >
                <img src={tech.img_source} width={50} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          <p className="font-bold text-2xl mb-10">Other</p>
          <div className="grid grid-cols-8 gap-5 gap-y-10 content-center">
            {techstacks.other.map((tech) => (
              <div className="flex flex-col justify-center items-center">
                <img src={tech.img_source} width={50} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TechStacks;
