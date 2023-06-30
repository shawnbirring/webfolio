import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex w-full transform flex-col items-center justify-center rounded bg-gray-800 p-16 transition-transform duration-200 ease-in-out hover:scale-105 sm:mx-20 sm:mt-20 sm:w-min">
      <Image
        src="/FaceShot.png"
        alt="Profile picture"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="space-y-4 pt-5 text-center text-xl">
        <h2 className="mb-2 text-2xl font-bold">Contact Me 👋</h2>
        <p>
          <strong>Location:</strong> Surrey, BC 🍁
        </p>
        <p>
          📞 <strong>Phone:</strong> 236-380-2753
        </p>
        <p>
          📧 <strong>School Email:</strong>{" "}
          <Link
            href="mailto:sbirring4@my.bcit.ca"
            className="text-blue-500 underline"
          >
            sbirring4@my.bcit.ca
          </Link>
        </p>
        <p>
          📧 <strong>Personal Email:</strong>{" "}
          <Link
            href="mailto:shawnbirring21@gmail.com"
            className="text-blue-500 underline"
          >
            shawnbirring21@gmail.com
          </Link>
        </p>
        <p className="m-2 flex justify-center">
          🐙
          <Link
            href="https://github.com/shawnbirring"
            target="_blank"
            className="mr-2 text-blue-500 underline"
          >
            Github
          </Link>
          🔗
          <Link
            href="https://linkedin.com/in/shawnbirring"
            target="_blank"
            className="text-blue-500 underline"
          >
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}
