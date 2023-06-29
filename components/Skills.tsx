"use client";
import { TypeAnimation } from "react-type-animation";
export default function Skills() {
  const skills = [
    {
      title: "Languages",
      content: "Java, JavaScript, C, Python, HTML, CSS, SQL",
    },
    {
      title: "Tools",
      content: "AJAX, Node.js, Firebase, jQuery, Bootstrap, Git and GitHub",
    },
    {
      title: "Database",
      content: "Firestore, MySQL",
    },
    {
      title: "Workflow",
      content: "Agile Development, Trello, Figma",
    },
  ];

  return (
    <div className="flex p-5">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl">Skills</h2>
        {skills.map((item, index) => (
          <div
            key={index}
            className="transform rounded bg-gray-800 p-4 transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
            <TypeAnimation
              sequence={[item.content, 1000]}
              cursor={false}
              repeat={Infinity}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
