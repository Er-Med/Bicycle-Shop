import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='z-[20000]'>
      <SignUp />;
    </div>
  );
}
