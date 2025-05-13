import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-900 py-4 px-10 shadow-md text-lg">
      <div className="flex items-center gap-4">
        <Image src={"/logo.png"} alt="BuzzCall" width={33} height={33} />
        <div className="text-2xl tracking-wider">
          <span className="font-bold">Buzz</span>Call
        </div>
      </div>

      <header className="flex items-center gap-4">
        <SignedOut>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
}
