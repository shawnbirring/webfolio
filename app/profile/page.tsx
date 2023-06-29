import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DownloadResume from "@/components/DownloadResume";

export default function Resume() {
  return (
    <>
      <DownloadResume />
      <div className="grid min-h-screen grid-cols-2 gap-5 p-5 text-white">
        <div className="space-y-5">
          <Skills />
          <Education />
        </div>
        <div className="col-span-2 space-y-5 md:col-span-1">
          <Experience />
        </div>
      </div>
    </>
  );
}
