"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center px-4 py-8 ">
      <h1 className="mb-4 text-center text-5xl font-bold">
        <span className="bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
          Welcome to My Website!
        </span>
      </h1>

      <TypeAnimation
        sequence={[
          "Hello!",
          500,
          "I love crafting unique web experiences using NextJs and the principles of Object-Oriented Programming...",
          500,
          "As a problem solver and designer at heart, I appreciate the visible creativity of frontend development and the supportive, feature-rich possibilities of backend...",
          500,
          "Recently, I've been getting the hang of Tailwind CSS and I'm liking its approach...",
          500,
          "My approach to problem-solving involves breaking down tasks into manageable parts, tackling them one at a time...",
          500,
          "I'm on a journey to become a full-stack developer by 2024. Check out the profile section to know more about me...",
          500,
          "If you have any queries or would like to connect, you can find my contact information on the Contact page...",
        ]}
        cursor={true}
        repeat={Infinity}
        wrapper="p"
        className="text-center text-xl"
      />
    </div>
  );
}
