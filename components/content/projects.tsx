"use client";
import Image from "next/image";
import MotionDiv from "@/components/MotionDiv";
import { Roboto_Condensed } from "next/font/google";
import Section from "../Section";
const title = Roboto_Condensed({
  weight: "700",
  subsets: ["latin"],
});

export function Project(project: any) {
  return (
    <MotionDiv
      whileHover={{ scale: 1.05 }}
      className="my-5 mr-5 flex max-w-xs flex-col rounded-xl py-6 pr-4"
      onClick={() => window.open(project.link, "_blank")}
    >
      <Image
        src={project.image}
        width={300}
        height={200}
        className="mb-2 rounded-xl"
        alt={project.name}
      />
      <h1 className={`my-2 text-xl font-bold ${title.className}`}>
        {project.name}
      </h1>
      <p className="mb-2 overflow-hidden overflow-ellipsis text-gray-700">
        {project.description}
      </p>
      <p className="mb-2 text-gray-700">{project.technologies}</p>
    </MotionDiv>
  );
}

export default function Projects() {
  const projects = [
    {
      name: "IntelliPaws",
      description:
        "A web application that uses AI to reccomend a dog breed based on your lifestyle and provide customized trainining lessons",
      technologies: "OpenAI API, NextJS, NextAuth, Prisma",
      image: "/IntelliPaws.png",
      link: "https://github.com/agrawaladityaraj/2800-202310-BBY35",
    },
    {
      name: "Project Buddy",
      description:
        'A hackathon project, which allows users to kickstart their project\'s planning with guidance from a dedicated "project buddy"',
      technologies: "TypeScript, NextJS, Supabase, NextAuth",
      image: "/ProjectBuddy.png",
      link: "https://github.com/agrawaladityaraj/hack-the-break",
    },
    {
      name: "Jayden Jump",
      description:
        "A platform game where users can compete for the highscore while collecting powerups and defeating enemies",
      technologies: "Java, PApplet, MongoDB",
      image: "/JaydenJump.png",
      link: "https://github.com/COMP2522/project-team-paul",
    },
    {
      name: "ONI",
      description:
        "A web application that helps users with a sedentary lifestyle find exercices to help out with sore body parts",
      technologies: "Firebase, VanillaJS, Bootstrap",
      image: "/ONI.png",
      link: "https://github.com/hyukpk/1800_202210_BBY03",
    },
  ];

  return (
    <Section id="projects">
      <div className="">
        <h1 className="text-4xl font-bold">Projects</h1>
        <h2>
          Here are some of my projects! Click on them to open the GitHub repo
        </h2>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
}
