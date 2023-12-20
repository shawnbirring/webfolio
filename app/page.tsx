import TypeAnimation from "@/components/TypingAnimation";
import Projects from "@/components/content/projects";
import Contact from "@/components/content/contact";
import Profile from "@/components/content/profile";

export default function Home() {
  return (
    <>
      <div className="mt-40 flex flex-col items-center justify-center px-4 py-8 ">
        <TypeAnimation
          sequence={["Hi, I'm Shawn Birring", 2000]}
          cursor={true}
          repeat={Infinity}
          wrapper="h1"
          className="mb-2 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent"
        />
        <h4 className="mb-4 text-center text-2xl font-bold">
          Welcome to My Website!
        </h4>
      </div>
      <Projects />
      <Profile />
      <Contact />
    </>
  );
}
