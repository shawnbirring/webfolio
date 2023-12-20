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
          <div className="transform rounded p-4" key={index}>
            <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
            <h3 className="text-xl">{item.school}</h3>
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
