import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${className} container px-4 lg:px-0`}>{children}</div>
  );
}
