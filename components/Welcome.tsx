import TypingAnimation from "./TypingAnimation";
import Section from "./Section";

export default function Welcome() {
  return (
    <Section id="welcome">
      <TypingAnimation
        sequence={[
          "Hi, I'm Shawn Birring",
          400,
          "Welcome to my personal website!",
          400,
        ]}
        wrapper="h1"
        repeat={Infinity}
        speed={50}
        className="text-4xl font-bold"
      ></TypingAnimation>
    </Section>
  );
}
