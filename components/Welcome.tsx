import TypingAnimation from "./TypingAnimation";

export default function Welcome() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-10 sm:px-16 sm:py-16">
      <TypingAnimation
        sequence={[
          "Hi, I'm Shawn Birring",
          1000,
          "Welcome to my personal website!",
          1000,
        ]}
        wrapper="h1"
        repeat={Infinity}
        speed={50}
        className="text-4xl font-bold"
      ></TypingAnimation>
    </section>
  );
}
