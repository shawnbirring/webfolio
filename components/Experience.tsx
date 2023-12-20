export default function Experience() {
  const experiences = [
    {
      role: "Technology Assistant",
      company: "British Columbia Institute of Technology",
      date: "June 2023 - Present",
      content: [
        "Provided technical support to students and staff",
        "Troubleshoot hardware issues on computers and mobile devices",
        "Installed software applications onto personal laptops or workstations",
      ],
    },
    {
      role: "Taekwondo Instructor",
      company: "Kick It Martial Arts",
      date: "2018 - Present",
      content: [
        "Instructed taekwondo classes to students of all ages and skill levels",
        "Assisted customers with payments, scheduling, and any other concerns related to classes",
        "Developed and implemented drills that matched students' learning styles",
      ],
    },
    {
      role: "Timekeeper",
      company: "Surrey Minor Ball Hockey Association",
      date: "2018 - 2021 (Seasonal)",
      content: [
        "Kept accurate records of games and scores for officials and league reports",
        "Ensured that games were being run in line with league rules and standards",
        "Demonstrated strong attention to detail and time management skills to ensure smooth game performance",
      ],
    },
    {
      role: "Peer Tutor",
      company: "Queen Elizabeth Secondary",
      date: "January 2022 - June 2022",
      content: [
        "Helped students understand complex concepts and develop problem-solving skills",
        "Collaborated with students and teachers to help develop effective learning strategies to support the academic progress of students",
        "Implemented innovative teaching methods and resources to enhance student learning and engagement",
      ],
    },
  ];

  return (
    <div className="flex p-5">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl">Experience</h2>
        {experiences.map((item, index) => (
          <div key={index} className="transform rounded p-4">
            <h2 className="mb-3 text-2xl font-semibold">{item.role}</h2>
            <h3 className="text-xl">{item.company}</h3>
            <h3 className="text-xl">{item.date}</h3>
            <ul className="list-disc pl-4">
              {item.content.map((contentItem, contentIndex) => (
                <li key={contentIndex}>{contentItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
