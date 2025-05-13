import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-5 h-[calc(100vh-5rem)] gap-5">
      <div className="text-4xl">BuzzCall - Video Conferencing application</div>
      <Button asChild>
        <Link href="/dashboard" className="text-lg">
          Get Started
        </Link>
      </Button>
    </div>
  );
}
