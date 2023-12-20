export default function Skills() {
  const skills = [
    {
      title: "Languages",
      content: "Java, JavaScript, Typescript, C, HTML, CSS, SQL, React, EJS",
    },
    {
      title: "Tools",
      content:
        "AJAX, Axios, Node.js, Git and GitHub, NextJS, NextAuth, Prisma, Vercel, OpenAI API",
    },
    {
      title: "Database",
      content: "Firestore, MySQL, MongoDB, Supabase, PostgreSQL",
    },
    {
      title: "Workflow",
      content: "Agile Development, Trello, Figma, GitFlow Workflow",
    },
    {
      title: "UI Libraries",
      content: "Bootstrap, TailwindCSS, Material UI, Mantine",
    },
  ];

  return (
    <div className="flex">
      <div className="flex-1 space-y-5">
        <h2 className="text-2xl">Skills</h2>
        {skills.map((item, index) => (
          <div key={index} className="transform rounded p-4">
            <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
