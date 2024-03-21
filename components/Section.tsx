export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-5xl px-6 py-8 sm:px-16 sm:py-12"
    >
      {children}
    </section>
  );
}
