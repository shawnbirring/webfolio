"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center px-4 py-8 ">
      <h1 className="mb-4 text-center text-5xl font-bold text-white shadow-md">
        <span className="bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
          Welcome to My Website!
        </span>
      </h1>

      <TypeAnimation
        sequence={[
          "Hello!",
          500,
          "I'm a software developer in frontend and backend development for web apps...",
          500,
          "I enjoy learning about new web technologies...",
          500,
          "Check out my project portfolio and profile page for more information about me...",
          500,
          "Find my contact information in the Contact page...",
        ]}
        cursor={true}
        repeat={Infinity}
        wrapper="p"
        style={{ fontSize: "1.5em", textAlign: "center" }}
      />
    </div>
  );
}
