import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='flex p-10 justify-center items-center min-h-screen'>
      <SignIn />
    </div>
  );
}
