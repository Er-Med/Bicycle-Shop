import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "../../../loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='flex p-10 justify-center items-center min-h-screen'>
        <SignUp />
      </div>
    </Suspense>
  );
}
