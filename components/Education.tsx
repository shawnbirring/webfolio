"use client";
import { TypeAnimation } from "react-type-animation";

export default function Education() {
  const education = [
    {
      title: "Computer Systems Technology",
      school: "British Columbia Institute of Technology",
      date: "September 2021 - Present",
      content: [
        "Object-oriented and Procedural programming",
        "Relational databases",
        "Web development",
        "Group software projects",
      ],
    },
  ];

  return (
    <div className="flex p-5">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl">Education</h2>
        {education.map((item, index) => (
          <div
            key={index}
            className="transform rounded bg-gray-800 p-4 transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
            <h3 className="text-xl">{item.school}</h3>
            <h3 className="text-xl">{item.date}</h3>
            <ul className="list-disc pl-4">
              {item.content.map((contentItem, contentIndex) => (
                <li key={contentIndex}>
                  <TypeAnimation
                    sequence={[contentItem, 1000]}
                    cursor={false}
                    repeat={Infinity}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
