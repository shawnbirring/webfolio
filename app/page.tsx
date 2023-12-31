import TypeAnimation from "@/components/TypingAnimation";
import Projects from "@/components/content/projects";
import Contact from "@/components/content/contact";
import Welcome from "@/components/Welcome";
import Profile from "@/components/content/profile";

export default function Home() {
  return (
    <>
      <Welcome />
      <Projects />
      <Contact />
    </>
  );
}
