import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DownloadResume from "@/components/DownloadResume";

export default function Profile() {
  return (
    <>
      <DownloadResume />
      <div className="grid min-h-screen grid-cols-1 gap-5 p-5 text-white md:grid-cols-2">
        <div className="space-y-5 md:col-span-1">
          <Skills />
          <Education />
        </div>
        <div className="space-y-5 md:col-span-1">
          <Experience />
        </div>
      </div>
    </>
  );
}
