import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Profile() {
  return (
    <>
      <div className="min-h-screen  gap-5 p-5 text-white">
        <Skills />
        <Education />
        <Experience />
      </div>
    </>
  );
}
