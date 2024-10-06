import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=' ps-4 fixed top-0 left-0 w-full h-full bg-slate-100/80 z-50 flex backdrop-blur justify-center items-center'>
      <SignIn />
    </div>
  );
}
