import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <div className='container px-4 lg:px-0'>{children}</div>;
}
