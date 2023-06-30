import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-10 flex transform flex-col items-center justify-center rounded bg-gray-800 px-12 py-14 transition-transform duration-200 ease-in-out hover:scale-105">
        <Image
          src="/FaceShot.png"
          alt="Profile picture"
          width={100}
          height={100}
          quality={100}
          priority={true}
          className="rounded-full"
        />
        <div className="space-y-4 pt-5 text-center text-xl">
          <h2 className="mb-2 text-2xl font-bold">Contact Me 👋</h2>
          <p>
            <strong>Location:</strong> <br />
            Surrey, BC 🍁
          </p>
          <p>
            📞 <strong>Phone:</strong> <br />
            236-380-2753
          </p>
          <p>
            📧 <strong>School Email:</strong> <br />
            <Link
              href="mailto:sbirring4@my.bcit.ca"
              className="text-blue-500 underline"
            >
              sbirring4@my.bcit.ca
            </Link>
          </p>
          <p>
            📧 <strong>Personal Email:</strong> <br />
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
    </div>
  );
}
