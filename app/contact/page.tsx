import Link from "next/link";

export default function Contact() {
  return (
    <div className="text-center">
      <div className="space-y-2 text-xl">
        <Link
          href="https://github.com/shawnbirring "
          target="_blank"
          className="text-blue-300 underline"
        >
          Github
        </Link>
        <span className="m-2">|</span>
        <span>
          236-380-2753<span className="m-2">|</span>sbirring4@my.bcit.ca
        </span>
        <span className="m-2">|</span>
        <Link
          href="https://linkedin.com/in/shawnbirring "
          target="_blank"
          className="text-blue-300 underline"
        >
          Linkden
        </Link>
      </div>
    </div>
  );
}
