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
          "Hello, I'm Shawn!",
          1000,
          "I'm a software developer in frontend and backend development for web apps.",
          1000,
          "I enjoy learning about new web technologies.",
          1000,
          "Want to know how I may help your project? Check out my project portfolio and online resume.",
        ]}
        cursor={true}
        repeat={Infinity}
        wrapper="p"
        style={{ fontSize: "1.5em", textAlign: "center" }}
      />
    </div>
  );
}
