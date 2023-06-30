"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function Projects() {
  const projects = [
    {
      name: "IntelliPaws",
      description:
        "A web application that uses AI to reccomend a dog breed based on your lifestyle and provide customized trainining lessons.",
      technologies:
        "OpenAI API, TypeScript, NextJS, ReactJS, NextAuth, Prisma, Mantine, Material UI",
      image: "/IntelliPaws.png",
      links: [
        {
          label: "GitHub",
          link: "https://github.com/agrawaladityaraj/2800-202310-BBY35",
        },
        {
          label: "Website",
          link: "https://intellipaws.vercel.app/",
        },
      ],
    },
    {
      name: "Project Buddy",
      description:
        'A web application that allows users to kickstart their projects with guidance from a dedicated "project buddy".',
      technologies:
        "TypeScript, NextJS, ReactJS, Supabase, Axios, NextAuth, Mantine, Material UI",
      image: "/ProjectBuddy.png",
      links: [
        {
          label: "GitHub",
          link: "https://github.com/agrawaladityaraj/hack-the-break",
        },
        {
          label: "Website",
          link: "https://project-buddy.vercel.app/",
        },
      ],
    },
    {
      name: "CVSS",
      description:
        "A personal hair dresser's website, users can inquire for more information, book appointments and make payments.",
      technologies: "TypeScript, NextJS, ReactJS, TailWind CSS, Stripe",
      image: "/CVSS.png",
      links: [
        {
          label: "GitHub",
          link: "https://github.com/shawnbirring/cvss",
        },
        {
          label: "Website",
          link: "https://cvss.vercel.app/",
        },
      ],
    },
    {
      name: "Jayden Jump",
      description:
        "A platform game where users can compete for the highscore while collecting powerups and defeating enemies.",
      technologies: "Java, PApplet, MongoDB",
      image: "/JaydenJump.png",
      links: [
        {
          label: "GitHub",
          link: "https://github.com/ShawnBirring/jaydenjump",
        },
      ],
    },
    {
      name: "ONI",
      description:
        "A web application that helps users with a sedentary lifestyle find exercices to help out with sore body parts.",
      technologies: "Firebase, VanillaJS, Bootstrap",
      image: "/ONI.png",
      links: [
        {
          label: "GitHub",
          link: "https://github.com/hyukpk/1800_202210_BBY03",
        },
        {
          label: "Website",
          link: "https://comp1800-relaxapp.web.app/index.html",
        },
      ],
    },
  ];

  return (
    <div className="mt-2 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-2 text-6xl">Projects</h1>
      {projects.map((project, index) => (
        <div
          className="m-4 w-4/5 rounded bg-gray-800 p-8 transition-transform duration-200 ease-in-out hover:scale-105 lg:w-1/2"
          key={index}
        >
          <div className="flex flex-col ">
            <Image
              className="rounded-full"
              src={project.image}
              alt={project.name}
              width={100}
              height={100}
              quality={100}
              priority={true}
            />
            <h2 className="mt-4 text-2xl font-bold">{project.name}</h2>
          </div>
          <p className="text-lg text-gray-600">
            <TypeAnimation sequence={[project.description]} cursor={false} />
          </p>
          <p className="mt-4 text-lg text-gray-600">
            <span className="font-bold">Technologies Used:</span>
            <br />
            <TypeAnimation sequence={[project.technologies]} cursor={false} />
          </p>
          <div className="mt-4 flex flex-wrap ">
            {project.links.map((link, index) => (
              <a
                className="mr-4 text-lg underline underline-offset-4 hover:text-purple-600"
                href={link.link}
                key={index}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
