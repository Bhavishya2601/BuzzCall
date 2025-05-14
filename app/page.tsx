import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-between py-5 px-24 h-[calc(100vh-5rem)] gap-8">
      <div className="w-2/5 flex flex-col gap-3">
        <div className="text-5xl">Video calls and meetings for everyone</div>
        <div className="text-gray-600 text-2xl">
          Connect, collaborate, and celebrate from anywhere with{" "}
          <span className="font-semibold">Buzz</span>Call
        </div>

        <Button
          asChild
          className="self-start gap-3 rounded-4xl px-6 py-4 mt-6 bg-blue-800 hover:bg-blue-700 transition-all duration-500"
        >
          <Link href="/dashboard" className="text-lg">
            Get Started
            <MoveRight />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-1/2">
        <Image src="homePic.svg" alt="BuzzCall" width={300} height={300} />
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-semibold">Your meeting is safe</div>
          <div>No one can join the meet unless invited</div>
        </div>
      </div>
    </div>
  );
}
