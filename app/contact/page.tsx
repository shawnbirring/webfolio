import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-5 mt-6 flex transform flex-col items-center justify-center rounded bg-gray-800 px-10 py-8 transition-transform duration-200 ease-in-out hover:scale-105 lg:m-10 lg:p-14">
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
              className="underline hover:text-purple-600"
            >
              sbirring4@my.bcit.ca
            </Link>
          </p>
          <p>
            📧 <strong>Personal Email:</strong> <br />
            <Link
              href="mailto:shawnbirring21@gmail.com"
              className="underline hover:text-purple-600"
            >
              shawnbirring21@gmail.com
            </Link>
          </p>
          <p className="m-2 flex justify-center">
            🐙
            <Link
              href="https://github.com/shawnbirring"
              target="_blank"
              className="mr-2 underline hover:text-purple-600"
            >
              Github
            </Link>
            🔗
            <Link
              href="https://linkedin.com/in/shawnbirring"
              target="_blank"
              className="underline hover:text-purple-600"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
