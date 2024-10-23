import { clsx } from "clsx";
import { SignUpButton } from "@clerk/nextjs";

export default function RegisterBtn({ isHomeBtn }: { isHomeBtn: boolean }) {
  return (
    <button
      className={clsx(
        { "!bg-[--secondary]": isHomeBtn },
        "hidden md:block text-white !text-[1rem] bg-[--primary] py-0 md:py-2  px-3 md:px-4  hover:bg-[--secondary]  duration-500 rounded-[2px] "
      )}>
      <SignUpButton>Register</SignUpButton>
    </button>
  );
}
