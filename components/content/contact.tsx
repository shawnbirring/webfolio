import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex max-w-5xl flex-col px-6 py-10 sm:px-16 sm:py-16"
    >
      <Image
        src="/FaceShot.png"
        alt="Profile picture"
        width={100}
        height={100}
        quality={100}
        priority={true}
        className="rounded-full"
      />
      <div className="space-y-4 pt-5 text-xl">
        <h2 className="mb-2 text-2xl font-bold">Contact👋</h2>
        <p>
          <strong>School Email:</strong> <br />
          <Link
            href="mailto:sbirring4@my.bcit.ca"
            className="underline hover:text-purple-600"
          >
            sbirring4@my.bcit.ca
          </Link>
        </p>
        <p>
          <strong>Personal Email:</strong> <br />
          <Link
            href="mailto:shawnbirring21@gmail.com"
            className="underline hover:text-purple-600"
          >
            shawnbirring21@gmail.com
          </Link>
        </p>
        <p>
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
    </section>
  );
}
