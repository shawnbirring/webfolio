"use client";
import { usePathname } from "next/navigation";
export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <MotionDiv
      key={path}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      {children}
    </MotionDiv>
  );
}
