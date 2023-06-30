"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "Computer Systems Technology",
      school: "British Columbia Institute of Technology",
      date: "September 2022 - Present",
      content: [
        "Object-oriented and Procedural programming",
        "Relational databases",
        "Group software projects with Agile Development",
        "Data structures & algorithms",
      ],
    },
  ];

  return (
    <div className="flex p-5">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl">Education</h2>
        {education.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="transform rounded bg-gray-800 p-4"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
