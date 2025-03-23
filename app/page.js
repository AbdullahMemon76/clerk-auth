import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
   <nav>

   </nav>
   <div>
      <SignedIn>
        <h1>Welcome to My App!</h1>
        <p>This content is only visible to signed-in users.</p>
      </SignedIn>
      <SignedOut>
        <h1>Please Sign In</h1>
        <p>You must sign in to view this page.</p>
      </SignedOut>
    </div>

    </>
  );
}
