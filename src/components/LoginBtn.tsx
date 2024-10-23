import { SignInButton } from "@clerk/nextjs";
import { clsx } from "clsx";
import { FiUser } from "react-icons/fi";

interface LoginBtnProps {
  isHomeBtn: boolean;
  isFixedMenu?: boolean;
}
export default function LoginBtn({ isHomeBtn, isFixedMenu }: LoginBtnProps) {
  return (
    <div
      className={clsx(
        { "lg:!bg-[--secondary]": isHomeBtn },
        "!text-[1rem] lg:text-base text-white lg:bg-[--primary] py-0 lg:py-2  px-3 lg:px-4 lg:hover:bg-[--secondary]  duration-500 rounded-[2px]"
      )}>
      <SignInButton>
        <div
          className={clsx("flex items-center gap-2", {
            "text-black": isFixedMenu,
          })}>
          Login
          <span className='text-[1.5rem]'>
            <FiUser />
          </span>
        </div>
      </SignInButton>
    </div>
  );
}
