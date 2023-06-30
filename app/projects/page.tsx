import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      name: "IntelliPaws",
      description:
        "A web application that allows users to upload images of their pets and get a prediction of the breed of the pet.",
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
        "A web application that allows users to create projects and tasks and assign them to other users.",
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
        "A web application that allows users to create a resume and export it as a PDF.",
      technologies: "TypeScript, NextJS, ReactJS, TailWind CSS",
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
      name: "ONI",
      description:
        "A web application that allows users to create a resume and export it as a PDF.",
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
      <h1 className="text-6xl font-bold">Projects</h1>
      {projects.map((project, index) => (
        <div
          className="m-4 w-1/2 items-center justify-center rounded bg-gray-800 p-8 transition-transform duration-200 ease-in-out hover:scale-105"
          key={index}
        >
          <div className="flex flex-col items-center justify-center">
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
            <p className="text-lg text-gray-600">{project.description}</p>
            <p className="mt-4 text-lg text-gray-600">
              <span className="font-bold">Technologies Used:</span>
              <br />
              {project.technologies}
            </p>
            <div className="mt-4 flex flex-wrap justify-center">
              {project.links.map((link, index) => (
                <a
                  className="mr-4 text-lg underline underline-offset-4 hover:text-purple-800"
                  href={link.link}
                  key={index}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
